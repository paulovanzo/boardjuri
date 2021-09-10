import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class ListaInteresse1631249370602 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "ListaInteresse",
        columns: [
          {
            name: "descr",
            type: "string",
            isGenerated: false,
            isPrimary: true,
          },
        ],
        foreignKeys: [
          {
            name: "lista",
            columnNames: ["lista"],
            referencedTableName: "Boardgame",
            referencedColumnNames: ["id"],
            onUpdate: "CASCADE",
          },
          {
            name: "email",
            columnNames: ["email"],
            referencedTableName: "Usuario",
            referencedColumnNames: ["email"],
            onUpdate: "CASCADE",
          },
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("ListaInteresse");
  }
}
