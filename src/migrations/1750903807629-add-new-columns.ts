import { MigrationInterface, QueryRunner } from "typeorm";

export class AddNewColumns1750903807629 implements MigrationInterface {
    name = 'AddNewColumns1750903807629'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "tumulos" DROP COLUMN "grauRelacionamento"`);
        await queryRunner.query(`ALTER TABLE "tumulos" ADD "ordemNb" character varying(255) DEFAULT 'Sem dados'`);
        await queryRunner.query(`ALTER TABLE "tumulos" ADD "grauParentesco" character varying(255) DEFAULT 'Sem dados'`);
        await queryRunner.query(`ALTER TABLE "tumulos" ADD "parenteKanji" character varying(255) DEFAULT 'Sem dados'`);
        await queryRunner.query(`ALTER TABLE "tumulos" ADD "fileira" character varying(255) DEFAULT 'Sem dados'`);
        await queryRunner.query(`ALTER TABLE "tumulos" ADD "posicao" character varying(255) DEFAULT 'Sem dados'`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "tumulos" DROP COLUMN "posicao"`);
        await queryRunner.query(`ALTER TABLE "tumulos" DROP COLUMN "fileira"`);
        await queryRunner.query(`ALTER TABLE "tumulos" DROP COLUMN "parenteKanji"`);
        await queryRunner.query(`ALTER TABLE "tumulos" DROP COLUMN "grauParentesco"`);
        await queryRunner.query(`ALTER TABLE "tumulos" DROP COLUMN "ordemNb"`);
        await queryRunner.query(`ALTER TABLE "tumulos" ADD "grauRelacionamento" character varying(255) DEFAULT 'Sem dados'`);
    }

}
