import React from "react";

type Props = {
  type?: string;
};

let COUNT = -1;

function TestChildren({ type }: Props) {
  COUNT++;

  return (
    <div>
      This is a component with type = {type || "N/A"}
      <p>TestChildren counter: {COUNT}</p>
    </div>
  );
}

export default React.memo(TestChildren);
