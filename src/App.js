import React from "react";
import layout from "./assets/layout.png";
import topLayout from "./assets/layoutTop.png";
import botLayout from "./assets/layoutBot.png";
import { BotLayout, Layer, TopLayout } from "./styles";

export default function App() {
  return (
    <div>
      <TopLayout src={topLayout} />
      <Layer src={layout} />
      <iframe
        src="https://nwl-mobile.netlify.app/"
        title="nwl"
        style={{ height: 600 }}
      />
      <BotLayout src={botLayout} />
    </div>
  );
}
