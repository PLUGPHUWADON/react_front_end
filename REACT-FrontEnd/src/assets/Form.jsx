import { useState } from "react";
import ShowName from "./ShowName";

export default function Form() {
  const [name, setName] = useState("");
  const [displayName, setDisplayName] = useState(false);
  const [count,setcount] = useState(1);

  const handleChange = (event) => {
    console.log(event);
    setName(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    alert("A name was submitted: " + name);
    console.log("A name was submitted: " + name);
    setcount(count + 1);
    console.log(count)
    name.length >= 5 ? setDisplayName(true) : setDisplayName(false);
  };

  function coutnum() {
    setcount(count + 1);
  }

  return (
    <div>
      <h1>Form to Input Data</h1>
      <form>
        <label>
          Name:
          <input type="text" value={name} onChange={handleChange} />
        </label>
        <input type="submit" value="Submit" onClick={handleSubmit} />
      </form>
      <h1>{count}</h1>
      <ShowName name={name} show={displayName} />
    </div>
  );
}