import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class Usuario1630975872355 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "Usuario",
        columns: [
          {
            name: "email",
            type: "string",
            isPrimary: true,
          },
        ],
        foreignKeys: [
          {
            name: "email",
            columnNames: ["email"],
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
