import "./App.css";
import axios from "axios";
import Axios from "axios";
import { useState } from "react";

function App() {
  const [currentExcuse, setCurrentExcuse] = useState({});
  const apis = {
    family: "https://excuser-three.vercel.app/v1/excuse/family/",
    office: "https://excuser-three.vercel.app/v1/excuse/office/",
    children: "https://excuser-three.vercel.app/v1/excuse/children/",
    college: "https://excuser-three.vercel.app/v1/excuse/college/",
    party: "https://excuser-three.vercel.app/v1/excuse/party/",
    funny: "https://excuser-three.vercel.app/v1/excuse/funny/",
    unbelievable: "https://excuser-three.vercel.app/v1/excuse/unbelievable",
    developers: "https://excuser-three.vercel.app/v1/excuse/developers",
    gaming: "https://excuser-three.vercel.app/v1/excuse/gaming",
  };

  const fetchData = (link) => {
    Axios.get(link).then((res) => setCurrentExcuse(res.data[0]));
  };

  return (
    <div className="App">
      <h2>Generate excuse for: </h2>
      <button onClick={() => fetchData(apis.family)}>Family</button>
      <button onClick={() => fetchData(apis.office)}>Office</button>
      <button onClick={() => fetchData(apis.children)}>Children</button>
      <button onClick={() => fetchData(apis.college)}>College</button>
      <button onClick={() => fetchData(apis.party)}>Party</button>
      <button onClick={() => fetchData(apis.funny)}>Funny</button>
      <button onClick={() => fetchData(apis.unbelievable)}>Unbelievable</button>
      <button onClick={() => fetchData(apis.developers)}>Developer</button>
      <button onClick={() => fetchData(apis.gaming)}>Gaming</button>

      <h1>{currentExcuse?.excuse}</h1>
    </div>
  );
}

export default App;
