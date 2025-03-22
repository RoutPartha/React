import React from "react";
import Card from "./Components/Card";
function App() {
  let myobj={
    username:"Partha",
    age:21
  }
  let newArr=[1,2,3]
  return (
    <>
    <div className="flex flex-col justify-center items-center min-h-screen bg-gray-900 text-white">
      <h1 className="bg-green-400 text-black rounded-xl p-2">Tailwind test</h1>
      <Card  username="chai aur code"  />
      <Card />
    </div>
                                                                                  
    </>
  );
}
export default App;
                  