import sequelize from '../connection.js';
import { UserFactory } from './user.js';

const User = UserFactory(sequelize);

export { sequelize, User };
