import { MigrationInterface, QueryRunner } from "typeorm";

export class AddColumnCodLivro1750904680775 implements MigrationInterface {
    name = 'AddColumnCodLivro1750904680775'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "tumulos" ADD "codLivro" character varying(255) DEFAULT 'Sem dados'`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "tumulos" DROP COLUMN "codLivro"`);
    }

}
