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
  const [height, setHeight] = useState("");
  const [selectedValues, setSelectedValues] = useState([]);
  const [tui, setTui] = useState(0);
  const [percent, setPercent] = useState(0);
  const [symptoms, setSymptoms] = useState("");
  const [obesity, setObesity] = useState("");
  const [qwert, setQwert] = useState([]);

  let summ = 0;
  let symptomsPercent = [];
  const handleGenderChange = (event) => {
    setGender(event.target.value);
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

  const handleHeredityChange = (event) => {
    setHeredity(event.target.value);
  };
  const handleWeightChange = (event) => {
    setWeight(Number(event.target.value));
  };
  const handleHeightChange = (event) => {
    setHeight(Number(event.target.value));
  };

  function handleCheckboxChange(value, checked, diseasePercent) {
    // extraPercent += diseasePercent;
    if (checked) {
      console.log(diseasePercent);
      setSelectedValues([...selectedValues, value]);
    } else {
      setSelectedValues(selectedValues.filter((val) => val !== value));
      // setQwert(qwert.filter((get) => get !== diseasePercent));
    }
    console.log(percent, "inputchalar");
    // symptomsPercent.push(diseasePercent);
    // console.log(symptomsPercent);
    // const sum = symptomsPercent.reduce(
    //   (acc, current) => acc + current,
    //   diseasePercent
    // );
    // console.log(sum);
    // console.log(qwert, "qwert");
  }

  // console.log(qwert);
  // console.log(symptomsPercent, "symptoms");
  useEffect(() => {
    console.log("tuini hisoblash", percent);
    let tuiHeight = height * 0.01;
    let wert = weight / (tuiHeight * tuiHeight);
    let qwer = wert.toFixed(1);
    setTui(Number(qwer));
  }, [height, weight]);
  useEffect(() => {
    let extraPercent = 0;
    console.log("preeffect tui", percent);
    if (tui >= 23.0 && tui < 24.9) {
      setObesity("o`rtacha vazn");
      extraPercent += 2;
      console.log("2% vazn un qo'shildi");
    } else if (tui > 25.0 && tui < 29.9) {
      setObesity("ortiqcha vazn");
      extraPercent += 6;
      console.log("6% vazn un qo'shildi");
    } else if (tui >= 30.0 && tui < 34.9) {
      setObesity("semizlikning 1-darajasi");
      extraPercent += 10;
      console.log("10% vazn un qo'shildi");
    } else if (tui >= 35.0 && tui <= 35.9) {
      setObesity("semizlikning 2-darajasi");
      extraPercent += 15;
      console.log("15% vazn un qo'shildi");
    }
    // else if (tui > 40.0) {
    //   setObesity("semizlikning 3-darajasi");
    //   extraPercent += 20;
    //   console.log("20% vazn un qo'shildi");
    // }
    console.log("tui", tui);
    console.log("exit", extraPercent);
    setPercent(percent + extraPercent);
    console.log("exitni pasti", extraPercent);
    console.log(percent, "vazn ichidada");
  }, [tui]);

  // useEffect(() => {
  //   console.log("symptoms", percent);
  //   if (percent >= 40) {
  //     setSymptoms(`Sog'lom turmush tarziga rioya qiling`);
  //     console.log(symptoms);
  //   } else if (percent >= 41 && percent < 50) {
  //     setSymptoms(
  //       `Parhez va jismoniy faollik (kuniga 5000 yoki 10000 qadam yurish)`
  //     );
  //   } else if (percent >= 51 && percent < 60) {
  //     setSymptoms(`Qon tahlili , hududdagi shifokor ko'ruvi `);
  //   } else if (percent > 60) {
  //     setSymptoms(`Endokrinolog ko'ruvi`);
  //   } else {
  //     console.log("symptoms oxiri");
  //   }
  // }, [percent]);


  
  useEffect(() => {
    if (
      // fname !== "" &&
      // lname !== "" &&
      weight !== "" &&
      height !== "" &&
      age !== "" &&
      heredity !== ""
    ) {
      setActive(true);
    } else {
      setActive(false);
    }
  }, [lname, fname, age, weight, gender, height]);
  const handleSubmit = () => {
    let extraPercent = 0;
    console.log(percent, "percent submit ichidagi");
    const formData = {
      lname: lname,
      fname: fname,
      age: age,
      weight: weight,
      height: height,
      gender: gender,
      heredity: heredity,
    };

    if (heredity === "Yes") {
      extraPercent = 9;
      console.log("yes", "9%");
    }
    if (heredity === "Now") {
      extraPercent = 0;
      console.log("now", "0%");
    }
    if (gender === "Male") {
      extraPercent = 4;
      console.log("mal", "4%");
    }
    if (gender === "Female") {
      extraPercent = 2;
      console.log("female", "2%");
    }
    if (age >= 40 && age < 65) {
      extraPercent = 6;
      console.log("6% yosh un qo'shildi");
    }
    if (age > 65) {
      extraPercent = 10;
      console.log("10% yosh un qo'shildi");
    } else {
      console.log(extraPercent + "%");
    }
    console.log("out", extraPercent);
    console.log(qwert);
    setPercent(percent + extraPercent);
    setData(formData);
    setWindow(true);
  };
  // useEffect(() => {
  //   if (window === false) {
  //     setFname("");
  //     setLname("");
  //     setAge("");
  //     setWeight("");
  //     setHeredity("");
  //     setHeight("");
  //     setGender("");
  //   }
  // }, []);
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
              type="number"
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
          <label htmlFor="height" className="labIn">
            <span>Height</span>
            <input
              type="number"
              value={height}
              onChange={handleHeightChange}
              name="height"
              id=""
              placeholder="height"
            />
          </label>
          <div className="labIn">
            <span>TUI: </span>
            <div>
              {tui ? <div>{tui}</div> : 0} % -{obesity}
            </div>
          </div>
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
            </select>
          </div>
          <div className="diseases">
            {DiseasesName.map((item) => {
              return (
                <Diseases
                  key={item.id}
                  elem={item}
                  diseaseName={item.name}
                  name={item.name.substring(0, 3)}
                  id={item.id}
                  diseasePercent={item.percent}
                  onClick={(e) =>
                    handleCheckboxChange(
                      item.name,

                      e.target.checked,
                      item.percent,
                      item.id
                    )
                  }
                  checked={selectedValues.includes(item.name)}
                />
              );
            })}
          </div>
          <div className="btn">
            {/* <button id="button" className={active ? "active" : null}>
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
                ❌
              </h2>
              <br />
              <h2>
                Salom 👋🏻 {data.lname}. <br /> Sizda
                {percent < 10 ? (
                  <span>
                    oshqozon osti bezi insulin ishlab chiqarilishining buzilishi{" "}
                    {percent}%
                  </span>
                ) : (
                  <span>qandli diabetga chalinish ehtimoli {percent}%</span>
                )}
                <br />
                <span>{symptoms}</span>
              </h2>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Diabet;
