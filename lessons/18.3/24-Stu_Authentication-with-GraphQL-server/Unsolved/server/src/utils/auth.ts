import jwt from 'jsonwebtoken';
import { GraphQLError } from 'graphql';
import dotenv from 'dotenv';
dotenv.config();


export const authenticateToken = ({ req }: any) => {
  let token = req.body.token || req.query.token || req.headers.authorization;

  if (req.headers.authorization) {
    token = token.split(' ').pop().trim();
  }

  if (!token) {
    console.log("No token provided.");
    return { user: null }; // Explicitly return user
  }

  try {
    const { data }: any = jwt.verify(token, process.env.JWT_SECRET_KEY || '', { maxAge: '2h' });
    console.log("Decoded Token Data:", data);
    return { user: data }; // Return user object
  } catch (err) {
    if (err instanceof Error) {
      console.log("Invalid token:", err.message);
    } else {
      console.log("Invalid token:", err);
    }
    return { user: null }; // Ensure invalid token leads to null user
  }
};

export const signToken = (username: string, email: string, _id: unknown) => {
  // Create a payload with the user information
  const payload = { username, email, _id };
  const secretKey: any = process.env.JWT_SECRET_KEY; // Get the secret key from environment variables

  // Sign the token with the payload and secret key, and set it to expire in 2 hours
  return jwt.sign({ data: payload }, secretKey, { expiresIn: '2h' });
};

export class AuthenticationError extends GraphQLError {
  constructor(message: string) {
    super(message, undefined, undefined, undefined, ['UNAUTHENTICATED']);
    Object.defineProperty(this, 'name', { value: 'AuthenticationError' });
  }
};
