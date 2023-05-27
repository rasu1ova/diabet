import React, { useState } from "react";
import DiseasesName from "./Data";

function Diseases(props) {


  const { pid, diseaseName, checked, onClick } = props;
  return (
    <label className="checking" onClick={() => onClick(pid)}>
      <input type="checkbox" name="checkbox" id={pid} checked={checked} />
      <span>{diseaseName}</span>
    </label>
  );
}

export default Diseases;
