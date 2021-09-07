import { Entity } from "typeorm";
import Pessoa from "./Pessoa";

@Entity("Admin")
export default class Admin extends Pessoa {}
