import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class Usuario1630975872355 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "Usuario",
        columns: [],
        foreignKeys: [
          {
            name: "email_usuario",
            columnNames: ["email_usuario"],
            referencedTableName: "Pessoa",
            referencedColumnNames: ["email"],
            onUpdate: "CASCADE",
            onDelete: "CASCADE",
          },
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("Usuario");
  }
}
