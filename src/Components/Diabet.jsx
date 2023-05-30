import { useState, useEffect, useMemo, useCallback } from "react";

import Diseases from "./Diseases";
import DiseasesName from "./Data";

function Diabet() {
  const [lname, setLname] = useState("");
  const [fname, setFname] = useState("");
  const [age, setAge] = useState("");
  const [weight, setWeight] = useState("");
  const [gender, setGender] = useState("Male");
  const [heredity, setHeredity] = useState("Yes");
  const [win, setWindow] = useState(false);
  const [active, setActive] = useState(false);
  const [data, setData] = useState({});
  const [selectedValues, setSelectedValues] = useState([]);
  useEffect(() => {
    if (
      fname.length > 0 &&
      lname.length > 0 &&
      weight.length > 0 &&
      age.length > 0
    ) {
      setActive(true);
    } else setActive(false);
  }, [lname, fname, age, weight, gender]);
  const handleGenderChange = (event) => {
    setGender(event.target.value);
  };

  const handleHeredityChange = (event) => {
    setHeredity(event.target.value);
  };
  const handleNameChange = (event) => {
    setFname(event.target.value);
  };

  const handleLnameChange = (event) => {
    setLname(event.target.value);
  };
  const handleAgeChange = (event) => {
    setAge(event.target.value);
  };

  const handleWeightChange = (event) => {
    setWeight(event.target.value);
  };
  function handleCheckboxChange(value, checked) {
    console.log(selectedValues);
    if (checked) {
      setSelectedValues([...selectedValues, value]);
      console.log(value);
      console.log(checked);
    } else {
      setSelectedValues(selectedValues.filter((val) => val !== value));
      console.log(checked); 
    }

  }

  const handleSubmit = () => {
    // const selectedDiseases = fdata.filter((disease) => disease.checked);
    const formData = {
      lname: lname,
      fname: fname,
      age: age,
      weight: weight,
      gender: gender,
      heredity: heredity,
      // diseases: selectedDiseases.map((disease) => disease.name),
    };
    console.log(selectedValues);
    // setData((prevData) => [...prevData, formData]);
    setData(formData);
    setWindow(true);
    console.log(formData);
    console.log(heredity);
    setFname("");
    setLname("");
    setAge("");
    setWeight("");
    setHeredity("");
    setGender("");
    console.log(data);
  
  };
  return (
    <div>
      <div className="container">
        <form
          action=""
          id="form"
          onSubmit={(e) => {
            e.preventDefault();
            handleSubmit();
          }}>
          <h1 className="heading">Diabetes Prognosis</h1>
          <label htmlFor="fname" className="labIn">
            <span>Name</span>
            <input
              type="text"
              value={fname}
              onChange={handleNameChange}
              name="fname"
              id="fname"
              placeholder="Name"
            />
          </label>
          <label htmlFor="lname" className="labIn">
            <span>Last Name</span>
            <input
              type="text"
              value={lname}
              onChange={handleLnameChange}
              name="lname"
              id="lname"
              placeholder="Last Name"
            />
          </label>
          <label htmlFor="age" className="labIn">
            <span>Age</span>
            <input
              type="text"
              value={age}
              onChange={handleAgeChange}
              name="age"
              id="age"
              placeholder="Age"
            />
          </label>
          <div className="gender labIn">
            <label htmlFor="gender">Gender:</label>
            <select
              name="gender"
              id=""
              value={gender}
              onChange={handleGenderChange}>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
          </div>
          <label htmlFor="weight" className="labIn">
            <span>Weight</span>
            <input
              type="number"
              value={weight}
              onChange={handleWeightChange}
              name="weight"
              id=""
              placeholder="weight"
            />
          </label>
          <div className="heredity labIn">
            <label htmlFor="heredity">
              Do you have a family history of diabetes?
            </label>
            <select
              name="heredity"
              id=""
              value={heredity}
              onChange={handleHeredityChange}>
              <option value="yes">Yes</option>
              <option value="now">Now</option>
              <option value="i don't know">i don;t know</option>
            </select>
          </div>
          <div className="diseases">
            {DiseasesName.map((item) => {
              return (
                <Diseases
                  key={item.id}
                  elem={item}
                  diseaseName={item.name}
                  name={item.name.substring(0,3)}
                  id={item.id}
                  onClick={(e) =>
                    handleCheckboxChange(item.name, e.target.checked)
                  }
                  checked={selectedValues.includes(item.name)}
                />
              );
            })}
          </div>
          <div className="btn">
            {/* <button id="button" className={active ? "active" : null }>
              {active ? "Send✔️" : "Back❌"}
            </button> */}
            {active ? (
              <button id="button" className="active">
                Send✔️
              </button>
            ) : (
              <button id="button" className="noActive" disabled>
                Back✔️
              </button>
            )}
          </div>
        </form>
        {win && (
          <div className="main">
            <div className="module">
              <h2
                onClick={() => {
                  setWindow(false);
                }}>
                X
              </h2>

              {data && (
                <>
                  <h2>
                    salom hurmatli bo`lishi mumkin bo`lgan {data.lname}. sizda
                    qand kasalligiga --% moyillik bor bo`lishi mumkin
                  </h2>
                  <p>Selected values: {selectedValues.join(", ")}</p>
                </>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Diabet;
