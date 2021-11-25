import React, { Component } from "react";
import PropTypes from "prop-types";

export class Loading extends Component {
  render() {
    return <div className="loading">{this.props.message || "Cargando..."}</div>;
  }
}

Loading.propTypes = [
  {
    message: PropTypes.string.isRequired,
  },
];
