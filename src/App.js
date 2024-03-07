
import './App.css';
import Sort from "./table";
import {useCallback, useState} from 'react';
function App() {
  const [fdata, setFdata] = useState({ rno: "", fname: "", school: "", course: "" });
  const [mainData, setMainData] = useState(JSON.parse(localStorage.getItem("localdata")) || []);
  const [index, setIndex] = useState();

  const handleChange = (e) => {
    setFdata({ ...fdata, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    setMainData([...mainData, { ...fdata }]);
    localStorage.setItem("localdata", JSON.stringify([...mainData, fdata]));
  };

  const [sortBy, setSortBy] = useState();

  const getSortedData = useCallback((e) => {



    // Sorting logic based on the selected option

    switch (e) {
      case 'id': {
          return [...mainData].sort((a, b) => a.rno - b.rno)
      }
        break;
      case 'name':
       return [...mainData].sort((a, b) => a.fname.localeCompare(b.fname));
        break;
      case 'school':
      return [...mainData].sort((a, b) => a.school.localeCompare(b.school));
        break;
      case 'course':
       return [...mainData].sort((a, b) => a.course.localeCompare(b.course));
        break;

      default:
        // No sorting
      return mainData;
    }

    // Update the state with the sorted table data

  },[sortBy,mainData]);


  return (
    <>
        <div className=' flex flex-col justify-center items-center'>
<div className='border-solid border-2 m-5 p-5   w-96 img'>
    <h1 className='uppercase text-center !font-cursive'> sortdata</h1>
    <div className='text-center'>    Enter id: <input
        type="number"
        id="rno"
        name="rno"
        value={fdata.rno}
        onChange={(e) => handleChange(e)}/>
    </div><br /><br />
    <div className='text-center '>   Enter name: <input type="text" name="fname" id="fname" value={fdata.fname} onChange={(e) => handleChange(e)} /> </div><br /><br />
    <div className='text-center'> Enter school: <input
        type="text"
        id="school"
        name="school"
        value={fdata.school}
        onChange={(e) => handleChange(e)}/>
    </div><br /><br />
    <div className='text-center'>
      <select name="course" id="course" value={fdata.course} onChange={(e) => handleChange(e)}>
        <option name="ba" value="BA" >BA</option>
        <option name="bca" value="BCA">BCA</option>
        <option name="b.tech" value="B.TECH">B.TECH</option>
      </select>
    </div>

      <br />
      <br />
  <div className='text-center'>
    <button type="submit" onClick={() => handleSubmit()}>submit</button>
  </div>

  <br/>
  <br/>


    <div className='text-center'> <label htmlFor="sort">Choose a below:</label>

      <select id="sort" value={sortBy} onChange={(e)=> setSortBy(e.target.value)}>
        <option value="id">id</option>
        <option value="name">name</option>
        <option value="school">school</option>
        <option value="course">courses</option>
      </select>
      <br />
      <br />
        <br /></div></div>
            <div className='img'>  <Sort  demo={getSortedData(sortBy)}  /></div>

        </div>
    </>
  );
}

export default App;
