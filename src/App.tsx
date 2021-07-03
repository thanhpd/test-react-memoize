import { useCallback, useMemo, useState } from "react";
import "./styles.css";
import TestChildren from "./TestChildren";
import TestContainer from "./TestContainer";
import TestContainer2 from "./TestContainer2";

let COUNT = -1; // so first render count = 0

export default function App() {
  const [count, setCount] = useState<number>(0);
  COUNT++;

  const updateCount = () => {
    setCount(count + 1);
  };

  const memoizedFn = useCallback(() => {
    console.log("FN");
  }, []);

  const unMemoizedComp = <TestChildren />;

  const memoizedComp = useMemo(() => {
    return <TestChildren type="prop, has useMemo" />;
  }, []);

  return (
    <div className="App">
      <button type="button" onClick={updateCount}>
        Increase Count
      </button>
      <p>useState counter: {count}</p>
      <p>true counter: {COUNT}</p>

      <hr />

      <h2>Render {`<TestChildren />`} in return statement</h2>
      <TestChildren />

      <hr />

      <h2>Render unmemoized {`<TestChildren />`} in TestContainer</h2>
      <TestContainer fn={memoizedFn} comp={<TestChildren />} />

      {/* <hr />

      <h2>Render memoized {`<TestChildren />`} in TestContainer</h2>
      <TestContainer fn={memoizedFn} comp={memoizedComp} />

      <hr />

      <h2>Render memoized {`TestChildren`} in TestContainer2</h2>
      <TestContainer2 fn={memoizedFn} TestChildren={TestChildren} /> */}
    </div>
  );
}
