import React from "react";
import PropTypes from "prop-types";

const Item = ({ data }) => <div>{data.name}</div>;

//determino que el data es requerido cuando vaya a usar el componente
Item.propTypes = {
  data: PropTypes.object.isRequired,
};

export default Item;
