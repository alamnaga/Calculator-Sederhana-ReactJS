import React, { useState } from "react";
import "../App.css";

const Calculator = () => {
  const [a, setA] = useState(0);
  const [b, setB] = useState(0);
  const [sum, setSum] = useState(0);
  const [kurang, setKurang] = useState(0);
  const [bagi, setBagi] = useState(0);
  const [kali, setKali] = useState(0);

  const handleUlang = () => {
    setA(0);
    setB(0);
    setSum(0);
    setKurang(0);
    setBagi(0);
    setKali(0);
  };

  const handleChangeA = (event) => {
    setA(event.target.value);
  };

  const handleChangeB = (event) => {
    setB(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setSum(Number(a) + Number(b));
    setKurang(a - b);
    setBagi(a / b);
    setKali(a * b);
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <label>
        <b>Nilai A:</b>
        <input className="form-input" value={a} onChange={handleChangeA} />
      </label>
      <br />
      <br />
      <label>
        <b>Nilai B:</b>
        <input className="form-input" value={b} onChange={handleChangeB} />
      </label>
      <br />
      <br />
      <button type="submit">Hitung</button>{" "}
      <button type="button" onClick={handleUlang}>
        Refresh
      </button>
      <br />
      <br />
      <label className="calc">Hasil Penjumlahan: {sum}</label>
      <br />
      <label className="calc">Hasil Pengurangan: {kurang}</label>
      <br />
      <label className="calc">Hasil Pembagian: {bagi}</label>
      <br />
      <label className="calc">Hasil Perkalian: {kali}</label>
    </form>
  );
};

export default Calculator;
