import {
  Entity,
  ManyToMany,
  ManyToOne,
  JoinColumn,
  PrimaryColumn,
  Index,
} from "typeorm";
import Boardgame from "./Boardgame";
import Usuario from "./Usuario";

@Entity("ListaInteresse")
export default class ListaInteresse {
  @PrimaryColumn()
  descr: string;

  @ManyToMany(() => Boardgame, (boardgame: Boardgame) => boardgame.lista)
  @JoinColumn({ name: "id" })
  boards: Boardgame[];

  @ManyToOne(() => Usuario, (usuario: Usuario) => usuario.listas)
  @JoinColumn({ name: "lista" })
  usuario: Usuario;
}
