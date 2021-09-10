import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class Avalia1631249362099 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "Avalia",
        columns: [
          {
            name: "complexidade",
            type: "number",
          },
          {
            name: "avaliacao",
            type: "number",
          },
          {
            name: "interacao",
            type: "number",
          },
          {
            name: "comentario",
            type: "string",
          },
          {
            name: "email",
            type: "string",
          },
          {
            name: "id",
            type: "number",
          },
        ],
        foreignKeys: [
          {
            name: "email",
            columnNames: ["email"],
            referencedTableName: "Usuario",
            referencedColumnNames: ["email"],
            onUpdate: "CASCADE",
          },
          {
            name: "id",
            columnNames: ["id"],
            referencedTableName: "Boardgame",
            referencedColumnNames: ["id"],
            onUpdate: "CASCADE",
          },
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("Avalia");
  }
}
