import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateTableTumulos1745450889535 implements MigrationInterface {
    name = 'CreateTableTumulos1745450889535'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "tumulos" ("id" SERIAL NOT NULL, "nome" character varying(255) DEFAULT 'Sem dados', "dataNascimento" character varying(255) DEFAULT 'Sem dados', "dataFalecimento" character varying(255) DEFAULT 'Sem dados', "localOrigem" character varying(255) DEFAULT 'Sem dados', "nomePai" character varying(255) DEFAULT 'Sem dados', "genero" character varying(255) DEFAULT 'Sem dados', "ordem" character varying(255) DEFAULT 'Sem dados', "geom" geometry(Polygon,4326) NOT NULL, CONSTRAINT "PK_8a49519138744e35712ec6a77ae" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "tumulos"`);
    }

}
