import React, { useState } from "react";
import Sort from "./table";
import Search from "./serchTable";

const UserTable = () => {
  const [fdata, setFdata] = useState({ fnm: "", lnm: "" });
  const [mainData, setMainData] = useState([]);
  const [index, setIndex] = useState();
  const [searchQuery, setSearchQuery] = useState("");

  const handleChange = (e) => {
    setFdata({ ...fdata, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    setMainData([...mainData, { ...fdata }]);
    localStorage.setItem("localdata", JSON.stringify([...mainData, fdata]));
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const search = mainData.filter((item) =>
    item.name.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  console.log(index);
  console.log(fdata);
  console.log(mainData);

  return (
    <>
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
      <div>
        <input
          type="text"
          placeholder="Search by name..."
          value={mainData}
          onChange={handleSearchChange}
        />
      </div>
      <br />
      <br />
      <Search data={mainData} getdata={(e) => setIndex(e)} />
    </>
  );
};

export default UserTable;
