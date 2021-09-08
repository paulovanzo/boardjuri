import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class Pessoa1630982011518 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "Pessoa",
        columns: [
          {
            name: "email",
            type: "string",
            isPrimary: true,
            isGenerated: false,
          },
          {
            name: "senha",
            type: "string",
          },
          {
            name: "nome",
            type: "string",
          },
          {
            name: "sobrenome",
            type: "string",
          },
          {
            name: "birth",
            type: "Date",
          },
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("Pessoa");
  }
}
