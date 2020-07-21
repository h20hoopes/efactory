import React, { Component } from "react";
import Carousel from "react-bootstrap/Carousel";
import tree from "../content/images/20171107_124306.jpg";

class Slider extends Component {
  state = {};
  render() {
    const css = this.props.componentData.style.css;
    const classes = this.props.componentData.style.classes;
    const images = this.props.componentData.images;
    console.log(this.props.componentData.images[0].src);

    let elements = images.map((thing) => (
      <Carousel.Item className={thing.class} style={thing.css}  key={thing.id}>
        <img src={tree} alt={thing.alt} style={thing.css} />
      </Carousel.Item>
    ));

    return (
      <Carousel className={classes} style={css}>
        {elements}
      </Carousel>
    );
  }
}

export default Slider;
