import React from "react";

type Props = {
  fn: () => void;
  comp: React.ReactElement;
};

let COUNT = -1;

function TestContainer({ fn, comp }: Props) {
  console.log(fn);

  return (
    <>
      <div>{comp}</div>
      <p>TestContainer counter: {COUNT}</p>
    </>
  );
}

export default React.memo(TestContainer);
