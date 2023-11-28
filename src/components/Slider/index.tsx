import { useState } from "react";
import Slider from "react-rangeslider";
import "react-rangeslider/lib/index.css";

export default function SliderComponent() {
  const [value, setValue] = useState(0);

  return (
    <>
      {/*@ts-ignore*/}
      <Slider
        value={value}
        orientation="horizontal"
        onChange={(value) => setValue(value)}
      />
    </>
  );
}
