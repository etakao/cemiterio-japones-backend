import { MigrationInterface, QueryRunner } from "typeorm";

export class AddColumnFotoUrl1751389156473 implements MigrationInterface {
    name = 'AddColumnFotoUrl1751389156473'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "tumulos" ADD "fotoUrl" character varying(255) DEFAULT ''`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "tumulos" DROP COLUMN "fotoUrl"`);
    }

}
