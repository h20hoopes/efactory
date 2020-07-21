import React, { Component } from "react";
import Banner from "./Banner";
import Navigation from "./Navigation";
import Slider from "./Slider";

class Page extends Component {
  render() {
    const page = this.props.data;
    const components = page.components;

    return <React.Fragment>{getComponents(components)}</React.Fragment>;
  }
}

function getComponents(components) {
  const Components = {
    banner: Banner,
    navigation: Navigation,
    slider: Slider,
  };

  let elements = components.map((component) =>
    typeof Components[component.name] !== "undefined" ? (
      React.createElement(Components[component.name], {
        componentData: component,
        key: component.id,
      })
    ) : (
      <div>The componenet {component.name} has not been created yet.</div>
    )
  );
  return elements;
}

export default Page;
