"use client"
const Home = () => {
  return (<>
    <h1>Welcome, to Next.js Course</h1>
    <button className="bg-yellow-400 p-2 rounded-3xl" onClick={() =>{console.log("Hello OnClick")}}>Click Me</button>
  </>)
};

export default Home;
