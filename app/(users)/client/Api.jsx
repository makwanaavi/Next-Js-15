"use client";

import React, { useEffect, useState } from "react";

function Api() {
  const [data, setdata] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const Api = "https://jsonplaceholder.typicode.com/todos?_limit=50";
      const res = await fetch(Api);
      const json = await res.json();
      setdata(json);
    };

    fetchData();
  }, []);

  return (
    <>
      <ul className="grid grid-cols-3">
        {data.map((item) => (
          <li
            className="border m-2 p-2 bg-black text-white rounded-xl flex justify-center items-center"
            key={item.id}
          >
            {item.title}
          </li>
        ))}
      </ul>
    </>
  );
}

export default Api;
