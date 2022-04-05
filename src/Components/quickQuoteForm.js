/* Importing the required libraries for the functionality of the code */
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";

/* Function to return form for collecting the user details and calculating the quote for the conversion. */
function QuickQuoteForm(props) {
  return (
    <form id="details" onSubmit={props.getQuote}>
      {/* Div to gather user first and last name */}
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

        {/* Labels to gather user contact details */}
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

      {/* Div to gather currency details */}
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
      {/* Div to add button for submission of the form */}
      <div id="submission-button">
        <button type="submit" id="submission">
          GET QUOTE
        </button>
      </div>
    </form>
  );
}

/* Exporting the function to use in another script */
export default QuickQuoteForm;
