import { MigrationInterface, QueryRunner } from "typeorm";

export class UpdateTableTumulos1750847357427 implements MigrationInterface {
    name = 'UpdateTableTumulos1750847357427'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "tumulos" DROP COLUMN "nomePai"`);
        await queryRunner.query(`ALTER TABLE "tumulos" ADD "kanji" character varying(255) DEFAULT 'Sem dados'`);
        await queryRunner.query(`ALTER TABLE "tumulos" ADD "idade" character varying(255) DEFAULT 'Sem dados'`);
        await queryRunner.query(`ALTER TABLE "tumulos" ADD "nomeParente" character varying(255) DEFAULT 'Sem dados'`);
        await queryRunner.query(`ALTER TABLE "tumulos" ADD "grauRelacionamento" character varying(255) DEFAULT 'Sem dados'`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "tumulos" DROP COLUMN "grauRelacionamento"`);
        await queryRunner.query(`ALTER TABLE "tumulos" DROP COLUMN "nomeParente"`);
        await queryRunner.query(`ALTER TABLE "tumulos" DROP COLUMN "idade"`);
        await queryRunner.query(`ALTER TABLE "tumulos" DROP COLUMN "kanji"`);
        await queryRunner.query(`ALTER TABLE "tumulos" ADD "nomePai" character varying(255) DEFAULT 'Sem dados'`);
    }

}
