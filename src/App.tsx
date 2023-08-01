import { css } from "../styled-system/css";
import { Card } from "./card";
import "./App.css";

function App() {
  return (
    <>
      <div className={css({ bg: "red.400" })}>
        <p
          className={css({
            padding: "badge",
            color: "primary",
            fontFamily: "body",
          })}
        >
          Hello World
        </p>
        <Card />
      </div>
    </>
  );
}

export default App;
