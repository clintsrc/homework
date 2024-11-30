import type ZooAnimals from '../interfaces/ZooAnimals.js';

class Animal implements ZooAnimals {
    species: string;
    hungry: boolean;
    weight: number;
    amount: number;

    constructor(
        species: string,
        hungry: boolean,
        weight: number,
        amount: number,
      ) {
          this.species = species;
          this.hungry = hungry;
          this.weight = weight;
          this.amount = amount;
      }

    // makeRollCall() as a method that returns how many animals of that species are in the zoo and whether they are hungry 
    makeRollCall(): string {
        let message: string = `Number of ${this.species}: ${this.amount}. They are `;

        if (! this.hungry) {
            message += 'not ';
        }
        
        message += 'hungry';
        return message;
    }
}

export default Animal;
