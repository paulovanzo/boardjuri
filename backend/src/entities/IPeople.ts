import { prop } from "@typegoose/typegoose";

export default class People {
  @prop()
  email: string;

  @prop()
  password: string;

  @prop()
  firstName: string;

  @prop()
  lastName: string;

  @prop()
  birth: string;
}
