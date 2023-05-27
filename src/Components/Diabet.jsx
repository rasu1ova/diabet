import { useState, useEffect } from "react";

import Diseases from "./Diseases";
import DiseasesName from "./Data";

function Diabet() {
  const [lname, setLname] = useState("");
  const [fname, setFname] = useState("");
  const [age, setAge] = useState("");
  const [weight, setWeight] = useState("");
  const [gender, setGender] = useState(null);
  const [heredity, setHeredity] = useState(null);
  const [win, setWindow] = useState(false);
  const [active, setActive] = useState(false);
  const [data, setData] = useState([]);
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
  const [fdata, setFData] = useState(DiseasesName);
  function handleCheckboxChange(id) {
    // setFData((prevDiseases) =>
    //   prevDiseases.map((disease) =>
    //     disease.id === id ? { ...disease, checked: !disease.checked } : disease
    //   )
    // );
    fdata.map((tit) => {
      tit=== id ?  tit.checked == true : tit
      console.log(tit.checked);
    })
   
  }

  const handleSubmit = () => {
    const selectedDiseases = fdata.filter((disease) => disease.checked);
    const formData = {
      lname: lname,
      fname: fname,
      age: age,
      weight: weight,
      gender: gender,
      heredity: heredity,
      diseases: selectedDiseases.map((disease) => disease.name),
    };
    setData((prevData) => [...prevData, formData]);
    setFData((prevDiseases) =>
      prevDiseases.map((disease) => ({ ...disease, checked: false }))
    );
    setWindow(true);
    console.log(formData);
    setFname("");
    setLname("");
    setAge("");
    setWeight("");
    setHeredity(null);
    setGender(null);
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
            {DiseasesName.map((item, index) => {
              return (
                <Diseases
                  key={index}
                  elem={item}
                  pid={item.id}
                  diseaseName={item.name}
                  checked={item.checked}
                  onClick={ handleCheckboxChange  }
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

              {/* {data &&
                data.map((get) => (
                  <>
                    <h2>
                      salom hurmarli bo`lishi mumkin bo`lgan{get.name}. sizda
                      qand kasalligiga --% moyillik bor bo`lishi mumkin
                    </h2>
                  </>
                ))} */}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Diabet;
