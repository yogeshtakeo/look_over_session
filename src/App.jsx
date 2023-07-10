import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Heading from "./heading";

function App() {
  const [count, setCount] = useState(0);

  const [username, setUserName] = useState();
  let hello = 100;

  const handleClickOnCout = () => {
    setCount(count + 1);
    hello = 10000000;

    console.log(hello);
  };

  // if (count < 5 || count === 5) {
  //   return <Heading title={count} />;
  // }
  // else{
  //   return count
  // }

  return (
    <div onClick={handleClickOnCout}>
      {count || 5}
      <br />
      {username || "Guest"}
      {hello}
    </div>
  );
}

export default App;
