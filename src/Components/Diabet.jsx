import { useState, useEffect, useMemo, useCallback } from "react";

import Diseases from "./Diseases";
import DiseasesName from "./Data";

function Diabet() {
  const [lname, setLname] = useState("");
  const [fname, setFname] = useState("");
  const [age, setAge] = useState("");
  const [weight, setWeight] = useState("");
  const [gender, setGender] = useState("male");
  const [heredity, setHeredity] = useState("now");
  const [win, setWindow] = useState(false);
  const [active, setActive] = useState(false);
  const [data, setData] = useState({});
  const [height, setHeight] = useState("");
  const [selectedValues, setSelectedValues] = useState([]);
  const [tui, setTui] = useState(0);
  const [percent, setPercent] = useState(0);
  const [symptoms, setSymptoms] = useState("");
  const [obesity, setObesity] = useState("");
  const [qwert, setQwert] = useState(0);
  const [util, setUtil] = useState(0);

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
    let extraPercent = 0;
    if (age >= 40 && age < 65) {
      extraPercent = 6;
    } else if (age > 65) {
      extraPercent = 10;
    } else {
    }
    setQwert(extraPercent);
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

  useEffect(() => {
    let tuiHeight = height * 0.01;
    let wert = weight / (tuiHeight * tuiHeight);
    let qwer = wert.toFixed(1);
    setTui(Number(qwer));
  }, [height, weight]);

  useEffect(() => {
    let extraPercent1 = 0;

    if (tui !== NaN) {
      if (tui >= 23.0 && tui < 24.9) {
        setObesity("o`rtacha vazn");
        extraPercent1 = 2;
      } else if (tui > 25.0 && tui < 29.9) {
        setObesity("ortiqcha vazn");
        extraPercent1 = 6;
      } else if (tui >= 30.0 && tui < 34.9) {
        setObesity("semizlikning 1-darajasi");
        extraPercent1 = 10;
      } else if (tui >= 35.0 && tui <= 35.9) {
        setObesity("semizlikning 2-darajasi");
        extraPercent1 = 15;
      } else if (tui > 40.0) {
        extraPercent1 = 20;
        setObesity("semizlikning 3-darajasi");
      }
      setUtil(extraPercent1);
    }
  }, [tui]);
  console.log(percent, "salom");
  useEffect(() => {
    console.log("symptoms", percent);
    if (percent >= 40) {
      setSymptoms(`Sog'lom turmush tarziga rioya qiling`);
      console.log(symptoms);
    } else if (percent >= 41 && percent < 50) {
      setSymptoms(
        `Parhez va jismoniy faollik (kuniga 5000 yoki 10000 qadam yurish)`
      );
    } else if (percent >= 51 && percent < 60) {
      setSymptoms(`Qon tahlili , hududdagi shifokor ko'ruvi `);
    } else if (percent > 60) {
      setSymptoms(`Endokrinolog ko'ruvi`);
    } else {
      console.log("symptoms oxiri");
    }
  }, [percent]);

  useEffect(() => {
    if (
      fname !== "" &&
      lname !== "" &&
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
    setData(formData);

    let extraPercent = 0;
    if (heredity !== "now") {
      extraPercent += 9;
    }
    if (heredity !== "yes") {
      extraPercent += 0;
    }
    if (gender === "male") {
      extraPercent += 4;
    }
    if (gender === "female") {
      extraPercent += 2;
    }

    setPercent(percent + extraPercent);
    setWindow(true);
    setFname("");
    setLname("");
    setAge("");
    setWeight("");
    setHeredity("");
    setHeight("");
    setGender("");
  };
  // useEffect(() => {
  //   if (window === false) {
  //
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
          <h1 className="heading">Qandli diabet prognozi</h1>
          <label htmlFor="fname" className="labIn">
            <span>Ism:</span>
            <input
              type="text"
              value={fname}
              onChange={handleNameChange}
              name="fname"
              id="fname"
              placeholder="Ism kiriting..."
            />
          </label>
          <label htmlFor="lname" className="labIn">
            <span>Familya:</span>
            <input
              type="text"
              value={lname}
              onChange={handleLnameChange}
              name="lname"
              id="lname"
              placeholder="Familya kiriting..."
            />
          </label>
          <label htmlFor="age" className="labIn">
            <span>Yosh:</span>
            <input
              type="number"
              value={age}
              onChange={handleAgeChange}
              name="age"
              id="age"
              placeholder="Yosh kiriting..."
            />
          </label>
          <div className="gender labIn">
            <label htmlFor="gender">Jins:</label>
            <select
              name="gender"
              id=""
              value={gender}
              onChange={handleGenderChange}>
              <option value="male">Erkak</option>
              <option value="female">Ayol</option>
            </select>
          </div>
          <label htmlFor="weight" className="labIn">
            <span>Vazn:</span>
            <input
              type="number"
              value={weight}
              onChange={handleWeightChange}
              name="weight"
              id=""
              placeholder="Vazn kiriting..."
            />
          </label>
          <label htmlFor="height" className="labIn">
            <span>Bo'y:</span>
            <input
              type="number"
              value={height}
              onChange={handleHeightChange}
              name="height"
              id=""
              placeholder="Bo'y kiriting..."
            />
          </label>
          <div className="labIn">
            <span>TUI: </span>
            <div>
              {tui ? <span>{tui}</span> : 0}% {obesity}
            </div>
          </div>
          <div className="heredity labIn">
            <label htmlFor="heredity">
              Oilangizda qandli diabetga chalingalar bormi?
            </label>
            <select
              name="heredity"
              id=""
              value={heredity}
              onChange={handleHeredityChange}>
              <option value="noooooooooooooow">Yo'q</option>
              <option value="yeeeees">Ha</option>
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
                Yuborish✔️
              </button>
            ) : (
              <button id="button" className="noActive" disabled>
                Yopish❌
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
                    oshqozon osti bezi insulin ishlab chiqarilishining buzilishi
                    {percent + qwert + util}%
                  </span>
                ) : (
                  <span>
                    qandli diabetga chalinish ehtimoli {percent + qwert + util}%
                  </span>
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
