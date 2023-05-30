import React from "react";

function Diseases(props) {
  const { diseaseName, checked, onClick, name, id } = props;
  return (
    <label htmlFor={name + id} className="checking" onClick={onClick}>
      <input type="checkbox" id={name + id} defaultChecked={checked} />
      {diseaseName}
    </label>
  );
}

export default Diseases;
