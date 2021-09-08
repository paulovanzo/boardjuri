import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class Admin1631067435832 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "Admin",
        columns: [
          {
            name: "email_pessoa",
            type: "string",
          },
        ],
        foreignKeys: [
          {
            name: "UsuarioCartao",
            columnNames: ["email_pessoa"],
            referencedTableName: "Pessoa",
            referencedColumnNames: ["email_pessoa"],
            onUpdate: "CASCADE",
            onDelete: "CASCADE",
          },
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("Admin");
  }
}
