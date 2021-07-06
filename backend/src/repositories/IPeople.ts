export interface IPeople extends Document {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  birth: Date;
}
