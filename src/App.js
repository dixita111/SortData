import "./App.css";
import Sort from "./table";
import { useState } from "react";

function App() {
  const [fdata, setFdata] = useState({ fnm: "", lnm: "" });
  const [mainData, setMainData] = useState([]);
  const [index, setIndex] = useState();
  // const [dataSort, setDataSort] = useState({ sortdata1: "" });
  const handleChange = (e) => {
    setFdata({ ...fdata, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    setMainData([...mainData, { ...fdata }]);
    localStorage.setItem("localdata", JSON.stringify([...mainData, fdata]));
  };

  const [sortBy, setSortBy] = useState(null);

  const handleSort = (demo) => {
    if (sortBy === demo) {
      setMainData([...mainData.reverse()]);
    } else {
      const sortedUsers = [...mainData].sort((a, b) => a[demo] - b[demo]);
      setMainData(sortedUsers);
    }
    setSortBy(demo);
  };

  console.log(index);
  console.log(fdata);
  console.log(mainData);
  // console.log("dataSort", dataSort);
  return (
    <>
      <div>
        <h1>Sort Data</h1>
        <input
          type="text"
          id="fnm"
          name="fnm"
          placeholder="FirstName"
          value={fdata.fnm}
          onChange={(e) => handleChange(e)}
        />
        <br />
        <br />
        <input
          type="text"
          id="lnm"
          name="lnm"
          placeholder="LastName"
          value={fdata.lnm}
          onChange={(e) => handleChange(e)}
        />
        <br />
        <br />
        <button onClick={() => handleSubmit()}>click</button>
        <br />
        <br />
        <button
          id="sortdata1"
          name="sortdata1"
          value={fdata.sortdata1}
          onClick={() => handleSort("fnm", "lnm")}
        >
          Sort
        </button>
      </div>
      <br />
      <Sort demo={mainData} getdata={(e) => setIndex(e)} />
    </>
  );
}

export default App;
