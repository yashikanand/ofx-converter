import DataAccess from "./dataAccess";

let customerRate;
let senderAmount;
let receiverAmount;
let senderCurrency;
let receiverCurrency;

function Output(props) {
  const setValues = (props) => {
    /* customerRate = <DataAccess />; */
    senderAmount = props.senderAmt;
    receiverAmount = props.senderAmt * customerRate;
    senderCurrency = props.senderCurr;
    receiverCurrency = props.receiverCurr;
  };
  document.ready(setValues);
  return (
    <div id="output">
      <div id="customer-rate-details">
        <h2>OFX Customer Rate</h2>
        <h1>{customerRate}</h1>
      </div>
      <div id="conversion-price-details">
        <h2>From</h2>
        <h1>
          {senderCurrency}
          <span className="amount"> {senderAmount}</span>
        </h1>
        <h2>To</h2>
        <h1>
          {receiverCurrency}
          <span className="amount"> {receiverAmount}</span>
        </h1>
      </div>
      <button id="submission">START NEW QUOTE</button>
    </div>
  );
}

export default Output;
