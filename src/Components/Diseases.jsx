import React from "react";

function Diseases(props) {
  const { pid, diseaseName, checked, onClick } = props;
  return (
    <label htmlFor="checkbox" className="checking" onClick={onClick}>
      <input
        type="checkbox"
        name="checkbox"
        id={pid}
        defaultChecked={checked}
      />
      <span>{diseaseName}</span>
    </label>
  );
}

export default Diseases;
