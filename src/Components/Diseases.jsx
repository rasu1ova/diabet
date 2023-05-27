import React from "react";
import DiseasesName from "./Data";
function Diseases(props) {
  function handleCheckboxChange(kl) {
    DiseasesName[kl].checked === true;
    console.log(DiseasesName[kl].checked);
    console.log(DiseasesName);
  }

  const { pid, diseaseName, onChange, checked } = props;
  return (
    <label className="checking" onChange={() => handleCheckboxChange(pid)}>
      <input type="checkbox" name="checkbox" id={pid} checked={checked} />
      <span>{diseaseName}</span>
    </label>
  );
}

export default Diseases;
