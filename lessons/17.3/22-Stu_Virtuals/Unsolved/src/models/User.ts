import { Schema, model, Document } from 'mongoose';

interface IUser extends Document {
  first?: string;
  last?: string;
  age?: number;
  fullName?: string;
}

const userSchema = new Schema<IUser>(
  {
    first: String,
    last: String,
    age: Number,
  },
  {
    toJSON: {
      // TODO: Mongoose will not include virtuals by default, so add a `virtuals` property and set it's value to true
      virtuals: true,
    },
    id: false,
  }
);

// TODO: Create a virtual property `fullName` on the userSchema
userSchema.virtual('fullName')
// TODO: Create a getter for the virtual that returns the full name of the user (first + last)
.get(function () {
    return `${this.first} ${this.last}`;
  })
// TODO: Create a setter for the virtual that sets the value of the first and last name, given just the `fullName`
  .set(function ( fullName: string ) {
    const names = fullName.split(' ');
    this.first = names[0];
    this.last = names[1];
  });


// Initialize our User model
const User = model('user', userSchema);

export default User;
