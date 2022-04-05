function QuickQuoteOutput(props) {
  return (
    <div id="output">
      <div id="customer-rate-details">
        <h2>OFX Customer Rate</h2>
        <h1>{props.customerRate}</h1>
      </div>
      <div id="conversion-price-details">
        <h2>From</h2>
        <h1>
          {props.fromCurrency}
          <span className="amount"> {props.amount}</span>
        </h1>
        <h2>To</h2>
        <h1>
          {props.toCurrency}
          <span className="amount"> {props.convertedAmount}</span>
        </h1>
      </div>
      <button id="submission" onClick={props.newQuote}>
        START NEW QUOTE
      </button>
    </div>
  );
}

export default QuickQuoteOutput;
