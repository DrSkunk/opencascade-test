import React, { useEffect } from "react";
// import initOpenCascade from "replicad-opencascadejs/src/replicad_single.wasm?init";
import { initOpenCascade } from "opencascade.js";

export default function App() {
  useEffect(() => {
    initOpenCascade().then((oc) => {
      console.log(oc);
    });
  });
  return <div>hoi</div>;
}
