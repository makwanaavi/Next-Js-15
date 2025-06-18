import React from "react";

async function Server() {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos");
  const data = await res.json();
  console.log(data);
  return (
    <div>
      <h2>Server</h2>
      <ul className="grid grid-cols-3">
        {data.map((item) => (
          <li className="border m-2 p-2 bg-black text-white rounded-xl flex justify-center items-center">
            {item.title}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Server;
