import type Invoice from '../../utils/interfaces/Invoice';
import './style.css';
const ChargeList = ({ invoice }: { invoice: Invoice }) => {
  return (
    <div className='ChargeList'>
      {/* TODO: What is the `Object.keys()` method, and what are we using it for here? 
        ANSWER: to iterate over all invoice keys which are themselves objects */}
      {Object.keys(invoice).map((key) => (
      <div className='charge-div' key={key}>
        <span>
        {key}
        {/* TODO: What is this ternary operator doing ?
          ANSWER: It handles either a string value to write that string to the
          console, or else if it's a number it converts it to a string in order
          to log it to the console */}
        {invoice[key].billed === 'hourly' ? (
          <em>
          ({invoice[key].hours} hours @{' '}
          {invoice[key].hourlyRate?.toLocaleString('en-US', {
            style: 'currency',
            currency: 'USD',
          })}
          /hr)
          </em>
        ) : null}
        </span>
        <span>
        {invoice[key].price.toLocaleString('en-US', {
          style: 'currency',
          currency: 'USD',
        })}
        </span>
      </div>
      ))}
      {/* TODO: What is the `Object.values()` method, and what are we using it for here? 
        ANSWER: Object iterates over each key in the object and returns the value stored
        in it to add the price to the current total charge  */}
      {Object.values(invoice).length ? (
      <h2>
        <span>Total:</span>
        <span>
        {Object.values(invoice)
          // TODO: What are we using the `.reduce()` method for here?
          // ANSWER: to sum up the total prices from the invoice items and 
          // get the total charge.
          .reduce((accumulated, currentCharge) => {
          return accumulated + currentCharge.price;
          }, 0)
          .toLocaleString('en-US', {
          style: 'currency',
          currency: 'USD',
          })}
        </span>
      </h2>
      ) : null}
    </div>
  );
};

export default ChargeList;
