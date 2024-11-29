import { useState } from "react";
import "./App.css";
import icon from "./assets/images/calculate-icon.svg";
function App() {
  const [amount, setAmount] = useState("");
  const [term, setTerm] = useState("");
  const [rate, setRate] = useState("");
  const [type, setType] = useState("");
  const [monthly, setMonthly] = useState("");
  const [total, setTotal] = useState("");
  function validate() {
    if (amount === "") {
      alert("Iltimos qiymat kiritiing");
      return false;
    }
    if (term === "") {
      alert("Iltimos qiymat kiritiing");
      return false;
    }
    if (rate === "") {
      alert("Iltimos qiymat kiritiing");
      return false;
    }
    if (type === "") {
      alert("Iltimos tolov turini tanlang");
      return false;
    }

    return true;
  }
  function handleClick(e) {
    e.preventDefault();
    const isValid = validate();
    if (!isValid) {
      return;
    }
    if (type === "interest-only") {
      alert("Please select Repayment type");
      return;
    }

    const number1 = Number(amount);
    const number2 = Number(rate) / 100;
    const number3 = number2 / 12;
    const number4 = Number(term) * 12;

    if (type === "repayment") {
      if (number3 > 0) {
        const monthly =
          (number1 * number3 * Math.pow(1 + number3, number4)) /
          (Math.pow(1 + number3, number4) - 1);

        setMonthly(monthly.toFixed(2));
        setTotal((monthly * number4).toFixed(2));
      }
    }
    if (type === "interest-only") {
      alert("Please ");
    }
  }
  function handleClear() {
    setAmount("");
    setTerm("");
    setRate("");
    setType("repayment");
    setMonthly("");
    setTotal("");
  }

  return (
    <div className="container">
    <div className="loan-calculator__wrapper">
      <div className="loan-calculator__left">
        <div className="loan-calculator__left-header">
          <h1 className="loan-calculator__left-title">Mortgage Calculator</h1>
          <a
            className="loan-calculator__clear-btn"
            href="#"
            onClick={handleClear}
          >
            Clear All
          </a>
        </div>
        <form id="form">
          <div className="loan-calculator__input-box">
            <h4 className="loan-calculator__main-title">Mortgage Amount</h4>
            <div className="loan-calculator__input-block">
              <p className="loan-calculator__symbol">$</p>
              <input
                value={amount}
                type="number"
                name="mortgage-amount"
                onChange={(e) => {
                  setAmount(e.target.value);
                }}
              />
            </div>
          </div>
          <div className="loan-calculator__input-wrap">
            <div className="loan-calculator__input-box">
              <h4 className="loan-calculator__main-title">Mortgage Term</h4>
              <div className="loan-calculator__input-block">
                <input
                  value={term}
                  type="number"
                  name="mortgage-term"
                  onChange={(e) => {
                    setTerm(e.target.value);
                  }}
                />
                <p className="loan-calculator__symbol">years</p>
              </div>
            </div>
            <div className="loan-calculator__input-box">
              <h4 className="loan-calculator__main-title">Interest Rate</h4>
              <div className="loan-calculator__input-block">
                <input
                  value={rate}
                  type="number"
                  name="mortgage-rate"
                  onChange={(e) => {
                    setRate(e.target.value);
                  }}
                />
                <p className="loan-calculator__symbol">%</p>
              </div>
            </div>
          </div>
          <div className="loan-calculator__radio-wrapper">
            <h4 className="loan-calculator__main-title">Mortgage Type</h4>
            <div className="loan-calculator__radio-box">
              <input
                className="loan-calculator__radio"
                type="radio"
                id="repayment"
                name="mortgage-type"
                value="repayment"
                onChange={(e) => setType(e.target.value)}
              />
              <label htmlFor="repayment">Repayment</label>
            </div>
            <div className="loan-calculator__radio-box">
              <input
                className="loan-calculator__radio"
                type="radio"
                id="interest-only"
                name="mortgage-type"
                value="interest-only"
                onChange={(e) => setType(e.target.value)}
              />
              <label htmlFor="interest-only">Interest Only</label>
            </div>
          </div>
          <button
            onClick={handleClick}
            type="button"
            id="calculate-btn"
            className="loan-calculator__calculate-btn"
          >
            <img src={icon} alt="" />
            Calculate Repayments
          </button>
        </form>
      </div>
      <div className="loan-calculator__right">
        <div className="loan-calculator__right-header">
          <h1 className="loan-calculator__right-title">Your results</h1>
          <p className="loan-calculator__right-desc">
            Your results are shown below based on the information you provided.
            To adjust the results, edit the form and click “calculate repayments”
            again.
          </p>
        </div>
        <div className="loan-calculator__right-results">
          <p>Your monthly repayments</p>
          <h2>{monthly ? monthly : "0"}</h2>
          <div className="loan-calculator__line"></div>
          <p>Total you'll repay over the term</p>
          <h4>{total ? total : "0"}</h4>
        </div>
      </div>
    </div>
  </div>
  
  );
}

export default App;