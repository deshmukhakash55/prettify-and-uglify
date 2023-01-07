import React, { useEffect } from "react";

export const JsonPrettify = () => {
  useEffect(() => {
    (window as any).renderJsonPrettify();

    return () => (window as any).unmountJsonPrettify();
  }, []);
  return <></>;
};
