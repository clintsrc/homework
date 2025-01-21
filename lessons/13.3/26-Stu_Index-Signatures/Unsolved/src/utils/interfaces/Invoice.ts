import type Charge from './Charge';

//TODO: What keys and values should we expect in this `Invoice` type?
//ANSWER:
// This uses a TypeScript index signature which allows you to define types for objects with dynamic keys:
// The keys are unique strings (e.g. invoice numbers, client IDs)
// The value is a Charge interface that represents specific charge information for that 
//  key
interface Invoice {
  [key: string]: Charge;
}

export default Invoice;
