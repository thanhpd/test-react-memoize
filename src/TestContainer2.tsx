import React from "react";

type Props = {
  fn: () => void;
  TestChildren: any;
};

let COUNT = -1;

function TestContainer({ fn, TestChildren }: Props) {
  console.log(fn);
  COUNT++;

  return (
    <>
      <div>{<TestChildren />}</div>
      <p>TestContainer counter: {COUNT}</p>
    </>
  );
}

export default React.memo(TestContainer);
