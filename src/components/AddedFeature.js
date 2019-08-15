import React from 'react';
import { connect } from "react-redux";

const AddedFeature = props => {
  return (
    <li>
      <button onClick={() => {
        props.removeFeature(props.feature)
      }} className="button">X</button>
      {props.feature.name} (+ {props.feature.price})
    </li>
  );
};

export default connect(null, {})(AddedFeature);
