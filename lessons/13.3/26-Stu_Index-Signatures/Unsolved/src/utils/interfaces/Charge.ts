interface Charge {
  // TODO: What type is the `billed` key being set as?
  // ANSWER: A union
  billed: 'fixed' | 'hourly';
  // TODO: Why are these keys optional?
  // ANSWER: because it might be a one-time fixed charge and so they may not be present in every instance of the Charge interface
  hours?: number;
  hourlyRate?: number;
  price: number;
}

export default Charge;
