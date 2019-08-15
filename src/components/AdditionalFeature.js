import React, { useState, useReducer } from 'react';

const AdditionalFeature = props => {
  return (
    <li>
      <button onClick={(e) => {
        e.stopPropagation()
        props.buyItem(props.feature)
      }} className="button">Add</button>
      {props.feature.name} (+{props.feature.price})
    </li>
  );
};

export default AdditionalFeature;
