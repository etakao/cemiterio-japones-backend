import { MigrationInterface, QueryRunner } from "typeorm";

export class AddColumnLivro1750984632076 implements MigrationInterface {
    name = 'AddColumnLivro1750984632076'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "tumulos" ADD "livro" character varying(255) DEFAULT 'Sem dados'`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "tumulos" DROP COLUMN "livro"`);
    }

}
