import React, { useEffect } from "react";

export const JsonUglify = () => {
  useEffect(() => {
    (window as any).renderJsonUglify();

    return () => (window as any).unmountJsonUglify();
  }, []);
  return <></>;
};
