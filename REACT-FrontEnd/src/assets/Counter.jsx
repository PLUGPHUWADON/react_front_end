import { useState } from "react";

export default function Counter() {
    const [count, setCount] = useState(">");
    function increment() {
        setCount(count + ">");
    }
    function decrement() {
        // if (count > 0) {
        //     setCount(count += "1");
        // }
        setCount(() => {
            let len = count.length;
            let str = count.split("");
            let str2 = str[len - 1] = "<"
            return(str2.slice(0,len - 2));
        });
}

return (
    <div>
        <h1>Count value is: {count}</h1>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
    </div>
);
}