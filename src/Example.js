import React from "react";

export default function Example({ example }) {
  if (example) {
    return (
      <div className="Example">
        <strong>Example: </strong>
        <span>{example}</span>
      </div>
    );
  } else {
    return null;
  }
}
