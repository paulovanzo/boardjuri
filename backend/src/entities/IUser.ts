import { prop } from "@typegoose/typegoose";
import People from "./IPeople";

export default class User extends People {
  @prop()
  address: string;
}
