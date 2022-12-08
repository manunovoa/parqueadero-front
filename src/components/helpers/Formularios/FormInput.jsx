import React from "react";

export const FormInput = ({ infomacionInput, classInput, tipoInput,inputName, inputId, inputPlaceholder,classSection}) => {
  return (
    <section className={" "+classSection}>
      <h3 className="text-white fs-5">{infomacionInput}</h3>
      <input className={"form-control "+classInput} type={tipoInput} name={inputName} id={inputId} placeholder={inputPlaceholder}/>
    </section>
  );
};
