import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";

function QuickQuoteForm(props) {
  return (
    <form id="details">
      <div id="user-details">
        <div id="name">
          <label>
            First Name
            <span className="required"> *</span>
            <br />
            <input
              type="text"
              name="first-name"
              required
              placeholder="First Name"
            />
          </label>
          <label>
            Last Name
            <span className="required"> *</span>
            <br />
            <input
              type="text"
              name="last-name"
              required
              placeholder="Last Name"
            />
          </label>
        </div>

        <label>
          Email
          <br />
          <input type="email" name="email" placeholder="Email" />
        </label>
        <label>
          Telephone/Mobile
          <br />
          <PhoneInput
            name="contact"
            value={props.contactNumber}
            onChange={props.setContactNumber}
          />
        </label>
      </div>
      <div id="currency-details">
        <label htmlFor="from-currency">
          From Currency
          <span className="required"> *</span>
          <br />
          <select
            value={props.fromCurrency}
            onChange={(e) => props.setFromCurrency(e.target.value)}
            id="from-currency"
            name="from-currency"
            required
          >
            <option value="">Please select</option>
            <option value="USD">United States Dollar(USD)</option>
            <option value="AUD">Australian Dollar(AUD)</option>
          </select>
        </label>
        <label htmlFor="to-currency">
          To Currency
          <span className="required"> *</span>
          <br />
          <select
            value={props.toCurrency}
            onChange={(e) => props.setToCurrency(e.target.value)}
            id="to-currency"
            name="to-currency"
            required
          >
            <option value="">Please select</option>
            <option value="USD">United States Dollar(USD)</option>
            <option value="AUD">Australian Dollar(AUD)</option>
          </select>
        </label>
        <label>
          Amount
          <span className="required"> *</span>
          <br />
          <input
            value={props.amount}
            onChange={(e) => props.setAmount(e.target.value)}
            type="number"
            step="0.01"
            name="Amount"
            required
            placeholder="25000.00"
          />
        </label>
      </div>
      <div id="submission-button">
        <button type="button" id="submission" onClick={props.getQuote}>
          GET QUOTE
        </button>
      </div>
    </form>
  );
}

export default QuickQuoteForm;
