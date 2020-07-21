import React, { Component } from "react";
import Jumbotron from "react-bootstrap/Jumbotron";

class Banner extends Component {
  state = {};
  render() {
    const css = this.props.componentData.style.css;
    const classes = this.props.componentData.style.classes;
    const data = this.props.componentData.data;

    let elements = data.map((thing) =>
      thing.type === "h1" ? (
        <h1 className={thing.classes} style={thing.css} key={thing.id}>
          {thing.data}
        </h1>
      ) : (
        <h3 key={thing.id}>{thing.data}</h3>
      )
    );

    return (
      <Jumbotron className={classes} style={css}>
        {elements}
      </Jumbotron>
    );
  }
}

export default Banner;
