import React, { createContext, useContext, useMemo } from "react";

export const RoktContext = createContext();
export const RoktContextConsumer = RoktContext.Consumer;

export function useRokt() {
  return useContext(RoktContext);
}

export function RoktContextProvider({
  children,
  tagId,
  sandbox = false,
  windowRef = window,
}) {
  // A custom hook that will get the latest Rokt snippet integration
  // and return a Promise that will resolve after Rokt has initialized
  const roktLoaded = useMemo(() => {
    // This is an exploded form of the initialization tag
    // found on the Rokt documentation website
    return new Promise((resolve) => {
      windowRef._ROKT_ = "rokt";
      windowRef.rokt = {
        id: tagId,
        lc: [
          // Once loaded, don't select Rokt placements immediately
          (rokt) =>
            rokt.init({
              skipInitialSelection: true,
              sandbox,
            }),
          // Resolve the Rokt instance
          (rokt) => resolve(rokt),
        ],
        it: new Date(),
      };
      // Create and load a script tag that contains the Rokt bootstrapper
      const target = windowRef.document.head || windowRef.document.body;
      const script = windowRef.document.createElement("script");
      script.type = "text/javascript";
      // script.src = "https://apps.rokt.com/wsdk/integrations/snippet.js";
      script.src = "https://wsdk.stage.rokt.com/integrations/snippet.js";
      // script.crossOrigin = "anonymous";
      script.async = true;
      target.appendChild(script);
    });
  }, [tagId, sandbox]);

  // Expose some public methods from the context for components to consume
  function setAttributes(attributes) {
    roktLoaded.then((rokt) => {
      rokt.setAttributes(attributes);
    });
  }

  function triggerPageChange(pageIdentifier) {
    roktLoaded.then((rokt) => {
      rokt.triggerPageChange({
        pageIdentifier,
      });
    });
  }

  function closeAll() {
    roktLoaded.then((rokt) => {
      rokt.closeAll();
    });
  }

  const roktWrapper = {
    setAttributes,
    triggerPageChange,
    closeAll,
  };

  // Return the context provider
  return (
    <RoktContext.Provider value={roktWrapper}>{children}</RoktContext.Provider>
  );
}
