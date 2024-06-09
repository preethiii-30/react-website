import React from "react";

const ColoredLine = ({ color }) => (
    <hr
        style={{
            color: color,
            backgroundColor: color,
            borderColor:color,
            height: 2,
            width:40,
            borderRadius:4,
            margin:'auto'
        }}
    />
);

export default ColoredLine