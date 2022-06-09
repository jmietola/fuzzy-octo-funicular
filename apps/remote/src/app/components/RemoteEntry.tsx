import { useState } from "react";
import WebglAppSin from "./webglAppSin";

function RemoteEntry() {
  let [freq, setFreq] = useState(0.001);
  let [amp, setAmp] = useState(0.5);
  return (
    <div>
     <WebglAppSin freq={freq} amp={amp} />
      <h3>Virtual Oscilloscope</h3>
    </div>
  );
}

export default RemoteEntry;
