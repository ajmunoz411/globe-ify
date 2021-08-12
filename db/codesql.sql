CREATE TABLE "spotifyChart"."ae"
    (
      rank integer NOT NULL,
      track character varying(250) COLLATE pg_catalog."default" NOT NULL,
      artist character varying(250) COLLATE pg_catalog."default" NOT NULL,
      streams integer NOT NULL,
      url character varying(250) COLLATE pg_catalog."default" NOT NULL,
      id character varying(250) COLLATE pg_catalog."default"
    )

    TABLESPACE pg_default;

    ALTER TABLE "spotifyChart"."ae"
      OWNER TO postgres;

    COPY "spotifyChart"."ae"
      FROM '/Users/Andrew.Munoz/HACK_REACTOR_PRECOURSE_2104/HRLAX44/mvp/dataClean/cleaned-ae-weekly-latest.csv'
      NULL 'null'
      DELIMITER ','
      CSV HEADER;

CREATE TABLE "spotifyChart"."ar"
    (
      rank integer NOT NULL,
      track character varying(250) COLLATE pg_catalog."default" NOT NULL,
      artist character varying(250) COLLATE pg_catalog."default" NOT NULL,
      streams integer NOT NULL,
      url character varying(250) COLLATE pg_catalog."default" NOT NULL,
      id character varying(250) COLLATE pg_catalog."default"
    )

    TABLESPACE pg_default;

    ALTER TABLE "spotifyChart"."ar"
      OWNER TO postgres;

    COPY "spotifyChart"."ar"
      FROM '/Users/Andrew.Munoz/HACK_REACTOR_PRECOURSE_2104/HRLAX44/mvp/dataClean/cleaned-ar-weekly-latest.csv'
      NULL 'null'
      DELIMITER ','
      CSV HEADER;

CREATE TABLE "spotifyChart"."at"
    (
      rank integer NOT NULL,
      track character varying(250) COLLATE pg_catalog."default" NOT NULL,
      artist character varying(250) COLLATE pg_catalog."default" NOT NULL,
      streams integer NOT NULL,
      url character varying(250) COLLATE pg_catalog."default" NOT NULL,
      id character varying(250) COLLATE pg_catalog."default"
    )

    TABLESPACE pg_default;

    ALTER TABLE "spotifyChart"."at"
      OWNER TO postgres;

    COPY "spotifyChart"."at"
      FROM '/Users/Andrew.Munoz/HACK_REACTOR_PRECOURSE_2104/HRLAX44/mvp/dataClean/cleaned-at-weekly-latest.csv'
      NULL 'null'
      DELIMITER ','
      CSV HEADER;

CREATE TABLE "spotifyChart"."au"
    (
      rank integer NOT NULL,
      track character varying(250) COLLATE pg_catalog."default" NOT NULL,
      artist character varying(250) COLLATE pg_catalog."default" NOT NULL,
      streams integer NOT NULL,
      url character varying(250) COLLATE pg_catalog."default" NOT NULL,
      id character varying(250) COLLATE pg_catalog."default"
    )

    TABLESPACE pg_default;

    ALTER TABLE "spotifyChart"."au"
      OWNER TO postgres;

    COPY "spotifyChart"."au"
      FROM '/Users/Andrew.Munoz/HACK_REACTOR_PRECOURSE_2104/HRLAX44/mvp/dataClean/cleaned-au-weekly-latest.csv'
      NULL 'null'
      DELIMITER ','
      CSV HEADER;

CREATE TABLE "spotifyChart"."be"
    (
      rank integer NOT NULL,
      track character varying(250) COLLATE pg_catalog."default" NOT NULL,
      artist character varying(250) COLLATE pg_catalog."default" NOT NULL,
      streams integer NOT NULL,
      url character varying(250) COLLATE pg_catalog."default" NOT NULL,
      id character varying(250) COLLATE pg_catalog."default"
    )

    TABLESPACE pg_default;

    ALTER TABLE "spotifyChart"."be"
      OWNER TO postgres;

    COPY "spotifyChart"."be"
      FROM '/Users/Andrew.Munoz/HACK_REACTOR_PRECOURSE_2104/HRLAX44/mvp/dataClean/cleaned-be-weekly-latest.csv'
      NULL 'null'
      DELIMITER ','
      CSV HEADER;

CREATE TABLE "spotifyChart"."bg"
    (
      rank integer NOT NULL,
      track character varying(250) COLLATE pg_catalog."default" NOT NULL,
      artist character varying(250) COLLATE pg_catalog."default" NOT NULL,
      streams integer NOT NULL,
      url character varying(250) COLLATE pg_catalog."default" NOT NULL,
      id character varying(250) COLLATE pg_catalog."default"
    )

    TABLESPACE pg_default;

    ALTER TABLE "spotifyChart"."bg"
      OWNER TO postgres;

    COPY "spotifyChart"."bg"
      FROM '/Users/Andrew.Munoz/HACK_REACTOR_PRECOURSE_2104/HRLAX44/mvp/dataClean/cleaned-bg-weekly-latest.csv'
      NULL 'null'
      DELIMITER ','
      CSV HEADER;

CREATE TABLE "spotifyChart"."bo"
    (
      rank integer NOT NULL,
      track character varying(250) COLLATE pg_catalog."default" NOT NULL,
      artist character varying(250) COLLATE pg_catalog."default" NOT NULL,
      streams integer NOT NULL,
      url character varying(250) COLLATE pg_catalog."default" NOT NULL,
      id character varying(250) COLLATE pg_catalog."default"
    )

    TABLESPACE pg_default;

    ALTER TABLE "spotifyChart"."bo"
      OWNER TO postgres;

    COPY "spotifyChart"."bo"
      FROM '/Users/Andrew.Munoz/HACK_REACTOR_PRECOURSE_2104/HRLAX44/mvp/dataClean/cleaned-bo-weekly-latest.csv'
      NULL 'null'
      DELIMITER ','
      CSV HEADER;

CREATE TABLE "spotifyChart"."br"
    (
      rank integer NOT NULL,
      track character varying(250) COLLATE pg_catalog."default" NOT NULL,
      artist character varying(250) COLLATE pg_catalog."default" NOT NULL,
      streams integer NOT NULL,
      url character varying(250) COLLATE pg_catalog."default" NOT NULL,
      id character varying(250) COLLATE pg_catalog."default"
    )

    TABLESPACE pg_default;

    ALTER TABLE "spotifyChart"."br"
      OWNER TO postgres;

    COPY "spotifyChart"."br"
      FROM '/Users/Andrew.Munoz/HACK_REACTOR_PRECOURSE_2104/HRLAX44/mvp/dataClean/cleaned-br-weekly-latest.csv'
      NULL 'null'
      DELIMITER ','
      CSV HEADER;

CREATE TABLE "spotifyChart"."ca"
    (
      rank integer NOT NULL,
      track character varying(250) COLLATE pg_catalog."default" NOT NULL,
      artist character varying(250) COLLATE pg_catalog."default" NOT NULL,
      streams integer NOT NULL,
      url character varying(250) COLLATE pg_catalog."default" NOT NULL,
      id character varying(250) COLLATE pg_catalog."default"
    )

    TABLESPACE pg_default;

    ALTER TABLE "spotifyChart"."ca"
      OWNER TO postgres;

    COPY "spotifyChart"."ca"
      FROM '/Users/Andrew.Munoz/HACK_REACTOR_PRECOURSE_2104/HRLAX44/mvp/dataClean/cleaned-ca-weekly-latest.csv'
      NULL 'null'
      DELIMITER ','
      CSV HEADER;

CREATE TABLE "spotifyChart"."ch"
    (
      rank integer NOT NULL,
      track character varying(250) COLLATE pg_catalog."default" NOT NULL,
      artist character varying(250) COLLATE pg_catalog."default" NOT NULL,
      streams integer NOT NULL,
      url character varying(250) COLLATE pg_catalog."default" NOT NULL,
      id character varying(250) COLLATE pg_catalog."default"
    )

    TABLESPACE pg_default;

    ALTER TABLE "spotifyChart"."ch"
      OWNER TO postgres;

    COPY "spotifyChart"."ch"
      FROM '/Users/Andrew.Munoz/HACK_REACTOR_PRECOURSE_2104/HRLAX44/mvp/dataClean/cleaned-ch-weekly-latest.csv'
      NULL 'null'
      DELIMITER ','
      CSV HEADER;

CREATE TABLE "spotifyChart"."cl"
    (
      rank integer NOT NULL,
      track character varying(250) COLLATE pg_catalog."default" NOT NULL,
      artist character varying(250) COLLATE pg_catalog."default" NOT NULL,
      streams integer NOT NULL,
      url character varying(250) COLLATE pg_catalog."default" NOT NULL,
      id character varying(250) COLLATE pg_catalog."default"
    )

    TABLESPACE pg_default;

    ALTER TABLE "spotifyChart"."cl"
      OWNER TO postgres;

    COPY "spotifyChart"."cl"
      FROM '/Users/Andrew.Munoz/HACK_REACTOR_PRECOURSE_2104/HRLAX44/mvp/dataClean/cleaned-cl-weekly-latest.csv'
      NULL 'null'
      DELIMITER ','
      CSV HEADER;

CREATE TABLE "spotifyChart"."co"
    (
      rank integer NOT NULL,
      track character varying(250) COLLATE pg_catalog."default" NOT NULL,
      artist character varying(250) COLLATE pg_catalog."default" NOT NULL,
      streams integer NOT NULL,
      url character varying(250) COLLATE pg_catalog."default" NOT NULL,
      id character varying(250) COLLATE pg_catalog."default"
    )

    TABLESPACE pg_default;

    ALTER TABLE "spotifyChart"."co"
      OWNER TO postgres;

    COPY "spotifyChart"."co"
      FROM '/Users/Andrew.Munoz/HACK_REACTOR_PRECOURSE_2104/HRLAX44/mvp/dataClean/cleaned-co-weekly-latest.csv'
      NULL 'null'
      DELIMITER ','
      CSV HEADER;

CREATE TABLE "spotifyChart"."cr"
    (
      rank integer NOT NULL,
      track character varying(250) COLLATE pg_catalog."default" NOT NULL,
      artist character varying(250) COLLATE pg_catalog."default" NOT NULL,
      streams integer NOT NULL,
      url character varying(250) COLLATE pg_catalog."default" NOT NULL,
      id character varying(250) COLLATE pg_catalog."default"
    )

    TABLESPACE pg_default;

    ALTER TABLE "spotifyChart"."cr"
      OWNER TO postgres;

    COPY "spotifyChart"."cr"
      FROM '/Users/Andrew.Munoz/HACK_REACTOR_PRECOURSE_2104/HRLAX44/mvp/dataClean/cleaned-cr-weekly-latest.csv'
      NULL 'null'
      DELIMITER ','
      CSV HEADER;

CREATE TABLE "spotifyChart"."cz"
    (
      rank integer NOT NULL,
      track character varying(250) COLLATE pg_catalog."default" NOT NULL,
      artist character varying(250) COLLATE pg_catalog."default" NOT NULL,
      streams integer NOT NULL,
      url character varying(250) COLLATE pg_catalog."default" NOT NULL,
      id character varying(250) COLLATE pg_catalog."default"
    )

    TABLESPACE pg_default;

    ALTER TABLE "spotifyChart"."cz"
      OWNER TO postgres;

    COPY "spotifyChart"."cz"
      FROM '/Users/Andrew.Munoz/HACK_REACTOR_PRECOURSE_2104/HRLAX44/mvp/dataClean/cleaned-cz-weekly-latest.csv'
      NULL 'null'
      DELIMITER ','
      CSV HEADER;

CREATE TABLE "spotifyChart"."de"
    (
      rank integer NOT NULL,
      track character varying(250) COLLATE pg_catalog."default" NOT NULL,
      artist character varying(250) COLLATE pg_catalog."default" NOT NULL,
      streams integer NOT NULL,
      url character varying(250) COLLATE pg_catalog."default" NOT NULL,
      id character varying(250) COLLATE pg_catalog."default"
    )

    TABLESPACE pg_default;

    ALTER TABLE "spotifyChart"."de"
      OWNER TO postgres;

    COPY "spotifyChart"."de"
      FROM '/Users/Andrew.Munoz/HACK_REACTOR_PRECOURSE_2104/HRLAX44/mvp/dataClean/cleaned-de-weekly-latest.csv'
      NULL 'null'
      DELIMITER ','
      CSV HEADER;

CREATE TABLE "spotifyChart"."dk"
    (
      rank integer NOT NULL,
      track character varying(250) COLLATE pg_catalog."default" NOT NULL,
      artist character varying(250) COLLATE pg_catalog."default" NOT NULL,
      streams integer NOT NULL,
      url character varying(250) COLLATE pg_catalog."default" NOT NULL,
      id character varying(250) COLLATE pg_catalog."default"
    )

    TABLESPACE pg_default;

    ALTER TABLE "spotifyChart"."dk"
      OWNER TO postgres;

    COPY "spotifyChart"."dk"
      FROM '/Users/Andrew.Munoz/HACK_REACTOR_PRECOURSE_2104/HRLAX44/mvp/dataClean/cleaned-dk-weekly-latest.csv'
      NULL 'null'
      DELIMITER ','
      CSV HEADER;

CREATE TABLE "spotifyChart"."do"
    (
      rank integer NOT NULL,
      track character varying(250) COLLATE pg_catalog."default" NOT NULL,
      artist character varying(250) COLLATE pg_catalog."default" NOT NULL,
      streams integer NOT NULL,
      url character varying(250) COLLATE pg_catalog."default" NOT NULL,
      id character varying(250) COLLATE pg_catalog."default"
    )

    TABLESPACE pg_default;

    ALTER TABLE "spotifyChart"."do"
      OWNER TO postgres;

    COPY "spotifyChart"."do"
      FROM '/Users/Andrew.Munoz/HACK_REACTOR_PRECOURSE_2104/HRLAX44/mvp/dataClean/cleaned-do-weekly-latest.csv'
      NULL 'null'
      DELIMITER ','
      CSV HEADER;

CREATE TABLE "spotifyChart"."ec"
    (
      rank integer NOT NULL,
      track character varying(250) COLLATE pg_catalog."default" NOT NULL,
      artist character varying(250) COLLATE pg_catalog."default" NOT NULL,
      streams integer NOT NULL,
      url character varying(250) COLLATE pg_catalog."default" NOT NULL,
      id character varying(250) COLLATE pg_catalog."default"
    )

    TABLESPACE pg_default;

    ALTER TABLE "spotifyChart"."ec"
      OWNER TO postgres;

    COPY "spotifyChart"."ec"
      FROM '/Users/Andrew.Munoz/HACK_REACTOR_PRECOURSE_2104/HRLAX44/mvp/dataClean/cleaned-ec-weekly-latest.csv'
      NULL 'null'
      DELIMITER ','
      CSV HEADER;

CREATE TABLE "spotifyChart"."ee"
    (
      rank integer NOT NULL,
      track character varying(250) COLLATE pg_catalog."default" NOT NULL,
      artist character varying(250) COLLATE pg_catalog."default" NOT NULL,
      streams integer NOT NULL,
      url character varying(250) COLLATE pg_catalog."default" NOT NULL,
      id character varying(250) COLLATE pg_catalog."default"
    )

    TABLESPACE pg_default;

    ALTER TABLE "spotifyChart"."ee"
      OWNER TO postgres;

    COPY "spotifyChart"."ee"
      FROM '/Users/Andrew.Munoz/HACK_REACTOR_PRECOURSE_2104/HRLAX44/mvp/dataClean/cleaned-ee-weekly-latest.csv'
      NULL 'null'
      DELIMITER ','
      CSV HEADER;

CREATE TABLE "spotifyChart"."eg"
    (
      rank integer NOT NULL,
      track character varying(250) COLLATE pg_catalog."default" NOT NULL,
      artist character varying(250) COLLATE pg_catalog."default" NOT NULL,
      streams integer NOT NULL,
      url character varying(250) COLLATE pg_catalog."default" NOT NULL,
      id character varying(250) COLLATE pg_catalog."default"
    )

    TABLESPACE pg_default;

    ALTER TABLE "spotifyChart"."eg"
      OWNER TO postgres;

    COPY "spotifyChart"."eg"
      FROM '/Users/Andrew.Munoz/HACK_REACTOR_PRECOURSE_2104/HRLAX44/mvp/dataClean/cleaned-eg-weekly-latest.csv'
      NULL 'null'
      DELIMITER ','
      CSV HEADER;

CREATE TABLE "spotifyChart"."es"
    (
      rank integer NOT NULL,
      track character varying(250) COLLATE pg_catalog."default" NOT NULL,
      artist character varying(250) COLLATE pg_catalog."default" NOT NULL,
      streams integer NOT NULL,
      url character varying(250) COLLATE pg_catalog."default" NOT NULL,
      id character varying(250) COLLATE pg_catalog."default"
    )

    TABLESPACE pg_default;

    ALTER TABLE "spotifyChart"."es"
      OWNER TO postgres;

    COPY "spotifyChart"."es"
      FROM '/Users/Andrew.Munoz/HACK_REACTOR_PRECOURSE_2104/HRLAX44/mvp/dataClean/cleaned-es-weekly-latest.csv'
      NULL 'null'
      DELIMITER ','
      CSV HEADER;

CREATE TABLE "spotifyChart"."fi"
    (
      rank integer NOT NULL,
      track character varying(250) COLLATE pg_catalog."default" NOT NULL,
      artist character varying(250) COLLATE pg_catalog."default" NOT NULL,
      streams integer NOT NULL,
      url character varying(250) COLLATE pg_catalog."default" NOT NULL,
      id character varying(250) COLLATE pg_catalog."default"
    )

    TABLESPACE pg_default;

    ALTER TABLE "spotifyChart"."fi"
      OWNER TO postgres;

    COPY "spotifyChart"."fi"
      FROM '/Users/Andrew.Munoz/HACK_REACTOR_PRECOURSE_2104/HRLAX44/mvp/dataClean/cleaned-fi-weekly-latest.csv'
      NULL 'null'
      DELIMITER ','
      CSV HEADER;

CREATE TABLE "spotifyChart"."fr"
    (
      rank integer NOT NULL,
      track character varying(250) COLLATE pg_catalog."default" NOT NULL,
      artist character varying(250) COLLATE pg_catalog."default" NOT NULL,
      streams integer NOT NULL,
      url character varying(250) COLLATE pg_catalog."default" NOT NULL,
      id character varying(250) COLLATE pg_catalog."default"
    )

    TABLESPACE pg_default;

    ALTER TABLE "spotifyChart"."fr"
      OWNER TO postgres;

    COPY "spotifyChart"."fr"
      FROM '/Users/Andrew.Munoz/HACK_REACTOR_PRECOURSE_2104/HRLAX44/mvp/dataClean/cleaned-fr-weekly-latest.csv'
      NULL 'null'
      DELIMITER ','
      CSV HEADER;

CREATE TABLE "spotifyChart"."gb"
    (
      rank integer NOT NULL,
      track character varying(250) COLLATE pg_catalog."default" NOT NULL,
      artist character varying(250) COLLATE pg_catalog."default" NOT NULL,
      streams integer NOT NULL,
      url character varying(250) COLLATE pg_catalog."default" NOT NULL,
      id character varying(250) COLLATE pg_catalog."default"
    )

    TABLESPACE pg_default;

    ALTER TABLE "spotifyChart"."gb"
      OWNER TO postgres;

    COPY "spotifyChart"."gb"
      FROM '/Users/Andrew.Munoz/HACK_REACTOR_PRECOURSE_2104/HRLAX44/mvp/dataClean/cleaned-gb-weekly-latest.csv'
      NULL 'null'
      DELIMITER ','
      CSV HEADER;

CREATE TABLE "spotifyChart"."global"
    (
      rank integer NOT NULL,
      track character varying(250) COLLATE pg_catalog."default" NOT NULL,
      artist character varying(250) COLLATE pg_catalog."default" NOT NULL,
      streams integer NOT NULL,
      url character varying(250) COLLATE pg_catalog."default" NOT NULL,
      id character varying(250) COLLATE pg_catalog."default"
    )

    TABLESPACE pg_default;

    ALTER TABLE "spotifyChart"."global"
      OWNER TO postgres;

    COPY "spotifyChart"."global"
      FROM '/Users/Andrew.Munoz/HACK_REACTOR_PRECOURSE_2104/HRLAX44/mvp/dataClean/cleaned-global-weekly-latest.csv'
      NULL 'null'
      DELIMITER ','
      CSV HEADER;

CREATE TABLE "spotifyChart"."gr"
    (
      rank integer NOT NULL,
      track character varying(250) COLLATE pg_catalog."default" NOT NULL,
      artist character varying(250) COLLATE pg_catalog."default" NOT NULL,
      streams integer NOT NULL,
      url character varying(250) COLLATE pg_catalog."default" NOT NULL,
      id character varying(250) COLLATE pg_catalog."default"
    )

    TABLESPACE pg_default;

    ALTER TABLE "spotifyChart"."gr"
      OWNER TO postgres;

    COPY "spotifyChart"."gr"
      FROM '/Users/Andrew.Munoz/HACK_REACTOR_PRECOURSE_2104/HRLAX44/mvp/dataClean/cleaned-gr-weekly-latest.csv'
      NULL 'null'
      DELIMITER ','
      CSV HEADER;

CREATE TABLE "spotifyChart"."gt"
    (
      rank integer NOT NULL,
      track character varying(250) COLLATE pg_catalog."default" NOT NULL,
      artist character varying(250) COLLATE pg_catalog."default" NOT NULL,
      streams integer NOT NULL,
      url character varying(250) COLLATE pg_catalog."default" NOT NULL,
      id character varying(250) COLLATE pg_catalog."default"
    )

    TABLESPACE pg_default;

    ALTER TABLE "spotifyChart"."gt"
      OWNER TO postgres;

    COPY "spotifyChart"."gt"
      FROM '/Users/Andrew.Munoz/HACK_REACTOR_PRECOURSE_2104/HRLAX44/mvp/dataClean/cleaned-gt-weekly-latest.csv'
      NULL 'null'
      DELIMITER ','
      CSV HEADER;

CREATE TABLE "spotifyChart"."hk"
    (
      rank integer NOT NULL,
      track character varying(250) COLLATE pg_catalog."default" NOT NULL,
      artist character varying(250) COLLATE pg_catalog."default" NOT NULL,
      streams integer NOT NULL,
      url character varying(250) COLLATE pg_catalog."default" NOT NULL,
      id character varying(250) COLLATE pg_catalog."default"
    )

    TABLESPACE pg_default;

    ALTER TABLE "spotifyChart"."hk"
      OWNER TO postgres;

    COPY "spotifyChart"."hk"
      FROM '/Users/Andrew.Munoz/HACK_REACTOR_PRECOURSE_2104/HRLAX44/mvp/dataClean/cleaned-hk-weekly-latest.csv'
      NULL 'null'
      DELIMITER ','
      CSV HEADER;

CREATE TABLE "spotifyChart"."hn"
    (
      rank integer NOT NULL,
      track character varying(250) COLLATE pg_catalog."default" NOT NULL,
      artist character varying(250) COLLATE pg_catalog."default" NOT NULL,
      streams integer NOT NULL,
      url character varying(250) COLLATE pg_catalog."default" NOT NULL,
      id character varying(250) COLLATE pg_catalog."default"
    )

    TABLESPACE pg_default;

    ALTER TABLE "spotifyChart"."hn"
      OWNER TO postgres;

    COPY "spotifyChart"."hn"
      FROM '/Users/Andrew.Munoz/HACK_REACTOR_PRECOURSE_2104/HRLAX44/mvp/dataClean/cleaned-hn-weekly-latest.csv'
      NULL 'null'
      DELIMITER ','
      CSV HEADER;

CREATE TABLE "spotifyChart"."hu"
    (
      rank integer NOT NULL,
      track character varying(250) COLLATE pg_catalog."default" NOT NULL,
      artist character varying(250) COLLATE pg_catalog."default" NOT NULL,
      streams integer NOT NULL,
      url character varying(250) COLLATE pg_catalog."default" NOT NULL,
      id character varying(250) COLLATE pg_catalog."default"
    )

    TABLESPACE pg_default;

    ALTER TABLE "spotifyChart"."hu"
      OWNER TO postgres;

    COPY "spotifyChart"."hu"
      FROM '/Users/Andrew.Munoz/HACK_REACTOR_PRECOURSE_2104/HRLAX44/mvp/dataClean/cleaned-hu-weekly-latest.csv'
      NULL 'null'
      DELIMITER ','
      CSV HEADER;

CREATE TABLE "spotifyChart"."id"
    (
      rank integer NOT NULL,
      track character varying(250) COLLATE pg_catalog."default" NOT NULL,
      artist character varying(250) COLLATE pg_catalog."default" NOT NULL,
      streams integer NOT NULL,
      url character varying(250) COLLATE pg_catalog."default" NOT NULL,
      id character varying(250) COLLATE pg_catalog."default"
    )

    TABLESPACE pg_default;

    ALTER TABLE "spotifyChart"."id"
      OWNER TO postgres;

    COPY "spotifyChart"."id"
      FROM '/Users/Andrew.Munoz/HACK_REACTOR_PRECOURSE_2104/HRLAX44/mvp/dataClean/cleaned-id-weekly-latest.csv'
      NULL 'null'
      DELIMITER ','
      CSV HEADER;

CREATE TABLE "spotifyChart"."ie"
    (
      rank integer NOT NULL,
      track character varying(250) COLLATE pg_catalog."default" NOT NULL,
      artist character varying(250) COLLATE pg_catalog."default" NOT NULL,
      streams integer NOT NULL,
      url character varying(250) COLLATE pg_catalog."default" NOT NULL,
      id character varying(250) COLLATE pg_catalog."default"
    )

    TABLESPACE pg_default;

    ALTER TABLE "spotifyChart"."ie"
      OWNER TO postgres;

    COPY "spotifyChart"."ie"
      FROM '/Users/Andrew.Munoz/HACK_REACTOR_PRECOURSE_2104/HRLAX44/mvp/dataClean/cleaned-ie-weekly-latest.csv'
      NULL 'null'
      DELIMITER ','
      CSV HEADER;

CREATE TABLE "spotifyChart"."il"
    (
      rank integer NOT NULL,
      track character varying(250) COLLATE pg_catalog."default" NOT NULL,
      artist character varying(250) COLLATE pg_catalog."default" NOT NULL,
      streams integer NOT NULL,
      url character varying(250) COLLATE pg_catalog."default" NOT NULL,
      id character varying(250) COLLATE pg_catalog."default"
    )

    TABLESPACE pg_default;

    ALTER TABLE "spotifyChart"."il"
      OWNER TO postgres;

    COPY "spotifyChart"."il"
      FROM '/Users/Andrew.Munoz/HACK_REACTOR_PRECOURSE_2104/HRLAX44/mvp/dataClean/cleaned-il-weekly-latest.csv'
      NULL 'null'
      DELIMITER ','
      CSV HEADER;

CREATE TABLE "spotifyChart"."in"
    (
      rank integer NOT NULL,
      track character varying(250) COLLATE pg_catalog."default" NOT NULL,
      artist character varying(250) COLLATE pg_catalog."default" NOT NULL,
      streams integer NOT NULL,
      url character varying(250) COLLATE pg_catalog."default" NOT NULL,
      id character varying(250) COLLATE pg_catalog."default"
    )

    TABLESPACE pg_default;

    ALTER TABLE "spotifyChart"."in"
      OWNER TO postgres;

    COPY "spotifyChart"."in"
      FROM '/Users/Andrew.Munoz/HACK_REACTOR_PRECOURSE_2104/HRLAX44/mvp/dataClean/cleaned-in-weekly-latest.csv'
      NULL 'null'
      DELIMITER ','
      CSV HEADER;

CREATE TABLE "spotifyChart"."is"
    (
      rank integer NOT NULL,
      track character varying(250) COLLATE pg_catalog."default" NOT NULL,
      artist character varying(250) COLLATE pg_catalog."default" NOT NULL,
      streams integer NOT NULL,
      url character varying(250) COLLATE pg_catalog."default" NOT NULL,
      id character varying(250) COLLATE pg_catalog."default"
    )

    TABLESPACE pg_default;

    ALTER TABLE "spotifyChart"."is"
      OWNER TO postgres;

    COPY "spotifyChart"."is"
      FROM '/Users/Andrew.Munoz/HACK_REACTOR_PRECOURSE_2104/HRLAX44/mvp/dataClean/cleaned-is-weekly-latest.csv'
      NULL 'null'
      DELIMITER ','
      CSV HEADER;

CREATE TABLE "spotifyChart"."it"
    (
      rank integer NOT NULL,
      track character varying(250) COLLATE pg_catalog."default" NOT NULL,
      artist character varying(250) COLLATE pg_catalog."default" NOT NULL,
      streams integer NOT NULL,
      url character varying(250) COLLATE pg_catalog."default" NOT NULL,
      id character varying(250) COLLATE pg_catalog."default"
    )

    TABLESPACE pg_default;

    ALTER TABLE "spotifyChart"."it"
      OWNER TO postgres;

    COPY "spotifyChart"."it"
      FROM '/Users/Andrew.Munoz/HACK_REACTOR_PRECOURSE_2104/HRLAX44/mvp/dataClean/cleaned-it-weekly-latest.csv'
      NULL 'null'
      DELIMITER ','
      CSV HEADER;

CREATE TABLE "spotifyChart"."jp"
    (
      rank integer NOT NULL,
      track character varying(250) COLLATE pg_catalog."default" NOT NULL,
      artist character varying(250) COLLATE pg_catalog."default" NOT NULL,
      streams integer NOT NULL,
      url character varying(250) COLLATE pg_catalog."default" NOT NULL,
      id character varying(250) COLLATE pg_catalog."default"
    )

    TABLESPACE pg_default;

    ALTER TABLE "spotifyChart"."jp"
      OWNER TO postgres;

    COPY "spotifyChart"."jp"
      FROM '/Users/Andrew.Munoz/HACK_REACTOR_PRECOURSE_2104/HRLAX44/mvp/dataClean/cleaned-jp-weekly-latest.csv'
      NULL 'null'
      DELIMITER ','
      CSV HEADER;

CREATE TABLE "spotifyChart"."kr"
    (
      rank integer NOT NULL,
      track character varying(250) COLLATE pg_catalog."default" NOT NULL,
      artist character varying(250) COLLATE pg_catalog."default" NOT NULL,
      streams integer NOT NULL,
      url character varying(250) COLLATE pg_catalog."default" NOT NULL,
      id character varying(250) COLLATE pg_catalog."default"
    )

    TABLESPACE pg_default;

    ALTER TABLE "spotifyChart"."kr"
      OWNER TO postgres;

    COPY "spotifyChart"."kr"
      FROM '/Users/Andrew.Munoz/HACK_REACTOR_PRECOURSE_2104/HRLAX44/mvp/dataClean/cleaned-kr-weekly-latest.csv'
      NULL 'null'
      DELIMITER ','
      CSV HEADER;

CREATE TABLE "spotifyChart"."lt"
    (
      rank integer NOT NULL,
      track character varying(250) COLLATE pg_catalog."default" NOT NULL,
      artist character varying(250) COLLATE pg_catalog."default" NOT NULL,
      streams integer NOT NULL,
      url character varying(250) COLLATE pg_catalog."default" NOT NULL,
      id character varying(250) COLLATE pg_catalog."default"
    )

    TABLESPACE pg_default;

    ALTER TABLE "spotifyChart"."lt"
      OWNER TO postgres;

    COPY "spotifyChart"."lt"
      FROM '/Users/Andrew.Munoz/HACK_REACTOR_PRECOURSE_2104/HRLAX44/mvp/dataClean/cleaned-lt-weekly-latest.csv'
      NULL 'null'
      DELIMITER ','
      CSV HEADER;

CREATE TABLE "spotifyChart"."lu"
    (
      rank integer NOT NULL,
      track character varying(250) COLLATE pg_catalog."default" NOT NULL,
      artist character varying(250) COLLATE pg_catalog."default" NOT NULL,
      streams integer NOT NULL,
      url character varying(250) COLLATE pg_catalog."default" NOT NULL,
      id character varying(250) COLLATE pg_catalog."default"
    )

    TABLESPACE pg_default;

    ALTER TABLE "spotifyChart"."lu"
      OWNER TO postgres;

    COPY "spotifyChart"."lu"
      FROM '/Users/Andrew.Munoz/HACK_REACTOR_PRECOURSE_2104/HRLAX44/mvp/dataClean/cleaned-lu-weekly-latest.csv'
      NULL 'null'
      DELIMITER ','
      CSV HEADER;

CREATE TABLE "spotifyChart"."lv"
    (
      rank integer NOT NULL,
      track character varying(250) COLLATE pg_catalog."default" NOT NULL,
      artist character varying(250) COLLATE pg_catalog."default" NOT NULL,
      streams integer NOT NULL,
      url character varying(250) COLLATE pg_catalog."default" NOT NULL,
      id character varying(250) COLLATE pg_catalog."default"
    )

    TABLESPACE pg_default;

    ALTER TABLE "spotifyChart"."lv"
      OWNER TO postgres;

    COPY "spotifyChart"."lv"
      FROM '/Users/Andrew.Munoz/HACK_REACTOR_PRECOURSE_2104/HRLAX44/mvp/dataClean/cleaned-lv-weekly-latest.csv'
      NULL 'null'
      DELIMITER ','
      CSV HEADER;

CREATE TABLE "spotifyChart"."ma"
    (
      rank integer NOT NULL,
      track character varying(250) COLLATE pg_catalog."default" NOT NULL,
      artist character varying(250) COLLATE pg_catalog."default" NOT NULL,
      streams integer NOT NULL,
      url character varying(250) COLLATE pg_catalog."default" NOT NULL,
      id character varying(250) COLLATE pg_catalog."default"
    )

    TABLESPACE pg_default;

    ALTER TABLE "spotifyChart"."ma"
      OWNER TO postgres;

    COPY "spotifyChart"."ma"
      FROM '/Users/Andrew.Munoz/HACK_REACTOR_PRECOURSE_2104/HRLAX44/mvp/dataClean/cleaned-ma-weekly-latest.csv'
      NULL 'null'
      DELIMITER ','
      CSV HEADER;

CREATE TABLE "spotifyChart"."mx"
    (
      rank integer NOT NULL,
      track character varying(250) COLLATE pg_catalog."default" NOT NULL,
      artist character varying(250) COLLATE pg_catalog."default" NOT NULL,
      streams integer NOT NULL,
      url character varying(250) COLLATE pg_catalog."default" NOT NULL,
      id character varying(250) COLLATE pg_catalog."default"
    )

    TABLESPACE pg_default;

    ALTER TABLE "spotifyChart"."mx"
      OWNER TO postgres;

    COPY "spotifyChart"."mx"
      FROM '/Users/Andrew.Munoz/HACK_REACTOR_PRECOURSE_2104/HRLAX44/mvp/dataClean/cleaned-mx-weekly-latest.csv'
      NULL 'null'
      DELIMITER ','
      CSV HEADER;

CREATE TABLE "spotifyChart"."my"
    (
      rank integer NOT NULL,
      track character varying(250) COLLATE pg_catalog."default" NOT NULL,
      artist character varying(250) COLLATE pg_catalog."default" NOT NULL,
      streams integer NOT NULL,
      url character varying(250) COLLATE pg_catalog."default" NOT NULL,
      id character varying(250) COLLATE pg_catalog."default"
    )

    TABLESPACE pg_default;

    ALTER TABLE "spotifyChart"."my"
      OWNER TO postgres;

    COPY "spotifyChart"."my"
      FROM '/Users/Andrew.Munoz/HACK_REACTOR_PRECOURSE_2104/HRLAX44/mvp/dataClean/cleaned-my-weekly-latest.csv'
      NULL 'null'
      DELIMITER ','
      CSV HEADER;

CREATE TABLE "spotifyChart"."ni"
    (
      rank integer NOT NULL,
      track character varying(250) COLLATE pg_catalog."default" NOT NULL,
      artist character varying(250) COLLATE pg_catalog."default" NOT NULL,
      streams integer NOT NULL,
      url character varying(250) COLLATE pg_catalog."default" NOT NULL,
      id character varying(250) COLLATE pg_catalog."default"
    )

    TABLESPACE pg_default;

    ALTER TABLE "spotifyChart"."ni"
      OWNER TO postgres;

    COPY "spotifyChart"."ni"
      FROM '/Users/Andrew.Munoz/HACK_REACTOR_PRECOURSE_2104/HRLAX44/mvp/dataClean/cleaned-ni-weekly-latest.csv'
      NULL 'null'
      DELIMITER ','
      CSV HEADER;

CREATE TABLE "spotifyChart"."nl"
    (
      rank integer NOT NULL,
      track character varying(250) COLLATE pg_catalog."default" NOT NULL,
      artist character varying(250) COLLATE pg_catalog."default" NOT NULL,
      streams integer NOT NULL,
      url character varying(250) COLLATE pg_catalog."default" NOT NULL,
      id character varying(250) COLLATE pg_catalog."default"
    )

    TABLESPACE pg_default;

    ALTER TABLE "spotifyChart"."nl"
      OWNER TO postgres;

    COPY "spotifyChart"."nl"
      FROM '/Users/Andrew.Munoz/HACK_REACTOR_PRECOURSE_2104/HRLAX44/mvp/dataClean/cleaned-nl-weekly-latest.csv'
      NULL 'null'
      DELIMITER ','
      CSV HEADER;

CREATE TABLE "spotifyChart"."no"
    (
      rank integer NOT NULL,
      track character varying(250) COLLATE pg_catalog."default" NOT NULL,
      artist character varying(250) COLLATE pg_catalog."default" NOT NULL,
      streams integer NOT NULL,
      url character varying(250) COLLATE pg_catalog."default" NOT NULL,
      id character varying(250) COLLATE pg_catalog."default"
    )

    TABLESPACE pg_default;

    ALTER TABLE "spotifyChart"."no"
      OWNER TO postgres;

    COPY "spotifyChart"."no"
      FROM '/Users/Andrew.Munoz/HACK_REACTOR_PRECOURSE_2104/HRLAX44/mvp/dataClean/cleaned-no-weekly-latest.csv'
      NULL 'null'
      DELIMITER ','
      CSV HEADER;

CREATE TABLE "spotifyChart"."nz"
    (
      rank integer NOT NULL,
      track character varying(250) COLLATE pg_catalog."default" NOT NULL,
      artist character varying(250) COLLATE pg_catalog."default" NOT NULL,
      streams integer NOT NULL,
      url character varying(250) COLLATE pg_catalog."default" NOT NULL,
      id character varying(250) COLLATE pg_catalog."default"
    )

    TABLESPACE pg_default;

    ALTER TABLE "spotifyChart"."nz"
      OWNER TO postgres;

    COPY "spotifyChart"."nz"
      FROM '/Users/Andrew.Munoz/HACK_REACTOR_PRECOURSE_2104/HRLAX44/mvp/dataClean/cleaned-nz-weekly-latest.csv'
      NULL 'null'
      DELIMITER ','
      CSV HEADER;

CREATE TABLE "spotifyChart"."pa"
    (
      rank integer NOT NULL,
      track character varying(250) COLLATE pg_catalog."default" NOT NULL,
      artist character varying(250) COLLATE pg_catalog."default" NOT NULL,
      streams integer NOT NULL,
      url character varying(250) COLLATE pg_catalog."default" NOT NULL,
      id character varying(250) COLLATE pg_catalog."default"
    )

    TABLESPACE pg_default;

    ALTER TABLE "spotifyChart"."pa"
      OWNER TO postgres;

    COPY "spotifyChart"."pa"
      FROM '/Users/Andrew.Munoz/HACK_REACTOR_PRECOURSE_2104/HRLAX44/mvp/dataClean/cleaned-pa-weekly-latest.csv'
      NULL 'null'
      DELIMITER ','
      CSV HEADER;

CREATE TABLE "spotifyChart"."pe"
    (
      rank integer NOT NULL,
      track character varying(250) COLLATE pg_catalog."default" NOT NULL,
      artist character varying(250) COLLATE pg_catalog."default" NOT NULL,
      streams integer NOT NULL,
      url character varying(250) COLLATE pg_catalog."default" NOT NULL,
      id character varying(250) COLLATE pg_catalog."default"
    )

    TABLESPACE pg_default;

    ALTER TABLE "spotifyChart"."pe"
      OWNER TO postgres;

    COPY "spotifyChart"."pe"
      FROM '/Users/Andrew.Munoz/HACK_REACTOR_PRECOURSE_2104/HRLAX44/mvp/dataClean/cleaned-pe-weekly-latest.csv'
      NULL 'null'
      DELIMITER ','
      CSV HEADER;

CREATE TABLE "spotifyChart"."ph"
    (
      rank integer NOT NULL,
      track character varying(250) COLLATE pg_catalog."default" NOT NULL,
      artist character varying(250) COLLATE pg_catalog."default" NOT NULL,
      streams integer NOT NULL,
      url character varying(250) COLLATE pg_catalog."default" NOT NULL,
      id character varying(250) COLLATE pg_catalog."default"
    )

    TABLESPACE pg_default;

    ALTER TABLE "spotifyChart"."ph"
      OWNER TO postgres;

    COPY "spotifyChart"."ph"
      FROM '/Users/Andrew.Munoz/HACK_REACTOR_PRECOURSE_2104/HRLAX44/mvp/dataClean/cleaned-ph-weekly-latest.csv'
      NULL 'null'
      DELIMITER ','
      CSV HEADER;

CREATE TABLE "spotifyChart"."pl"
    (
      rank integer NOT NULL,
      track character varying(250) COLLATE pg_catalog."default" NOT NULL,
      artist character varying(250) COLLATE pg_catalog."default" NOT NULL,
      streams integer NOT NULL,
      url character varying(250) COLLATE pg_catalog."default" NOT NULL,
      id character varying(250) COLLATE pg_catalog."default"
    )

    TABLESPACE pg_default;

    ALTER TABLE "spotifyChart"."pl"
      OWNER TO postgres;

    COPY "spotifyChart"."pl"
      FROM '/Users/Andrew.Munoz/HACK_REACTOR_PRECOURSE_2104/HRLAX44/mvp/dataClean/cleaned-pl-weekly-latest.csv'
      NULL 'null'
      DELIMITER ','
      CSV HEADER;

CREATE TABLE "spotifyChart"."pt"
    (
      rank integer NOT NULL,
      track character varying(250) COLLATE pg_catalog."default" NOT NULL,
      artist character varying(250) COLLATE pg_catalog."default" NOT NULL,
      streams integer NOT NULL,
      url character varying(250) COLLATE pg_catalog."default" NOT NULL,
      id character varying(250) COLLATE pg_catalog."default"
    )

    TABLESPACE pg_default;

    ALTER TABLE "spotifyChart"."pt"
      OWNER TO postgres;

    COPY "spotifyChart"."pt"
      FROM '/Users/Andrew.Munoz/HACK_REACTOR_PRECOURSE_2104/HRLAX44/mvp/dataClean/cleaned-pt-weekly-latest.csv'
      NULL 'null'
      DELIMITER ','
      CSV HEADER;

CREATE TABLE "spotifyChart"."py"
    (
      rank integer NOT NULL,
      track character varying(250) COLLATE pg_catalog."default" NOT NULL,
      artist character varying(250) COLLATE pg_catalog."default" NOT NULL,
      streams integer NOT NULL,
      url character varying(250) COLLATE pg_catalog."default" NOT NULL,
      id character varying(250) COLLATE pg_catalog."default"
    )

    TABLESPACE pg_default;

    ALTER TABLE "spotifyChart"."py"
      OWNER TO postgres;

    COPY "spotifyChart"."py"
      FROM '/Users/Andrew.Munoz/HACK_REACTOR_PRECOURSE_2104/HRLAX44/mvp/dataClean/cleaned-py-weekly-latest.csv'
      NULL 'null'
      DELIMITER ','
      CSV HEADER;

CREATE TABLE "spotifyChart"."ro"
    (
      rank integer NOT NULL,
      track character varying(250) COLLATE pg_catalog."default" NOT NULL,
      artist character varying(250) COLLATE pg_catalog."default" NOT NULL,
      streams integer NOT NULL,
      url character varying(250) COLLATE pg_catalog."default" NOT NULL,
      id character varying(250) COLLATE pg_catalog."default"
    )

    TABLESPACE pg_default;

    ALTER TABLE "spotifyChart"."ro"
      OWNER TO postgres;

    COPY "spotifyChart"."ro"
      FROM '/Users/Andrew.Munoz/HACK_REACTOR_PRECOURSE_2104/HRLAX44/mvp/dataClean/cleaned-ro-weekly-latest.csv'
      NULL 'null'
      DELIMITER ','
      CSV HEADER;

CREATE TABLE "spotifyChart"."ru"
    (
      rank integer NOT NULL,
      track character varying(250) COLLATE pg_catalog."default" NOT NULL,
      artist character varying(250) COLLATE pg_catalog."default" NOT NULL,
      streams integer NOT NULL,
      url character varying(250) COLLATE pg_catalog."default" NOT NULL,
      id character varying(250) COLLATE pg_catalog."default"
    )

    TABLESPACE pg_default;

    ALTER TABLE "spotifyChart"."ru"
      OWNER TO postgres;

    COPY "spotifyChart"."ru"
      FROM '/Users/Andrew.Munoz/HACK_REACTOR_PRECOURSE_2104/HRLAX44/mvp/dataClean/cleaned-ru-weekly-latest.csv'
      NULL 'null'
      DELIMITER ','
      CSV HEADER;

CREATE TABLE "spotifyChart"."sa"
    (
      rank integer NOT NULL,
      track character varying(250) COLLATE pg_catalog."default" NOT NULL,
      artist character varying(250) COLLATE pg_catalog."default" NOT NULL,
      streams integer NOT NULL,
      url character varying(250) COLLATE pg_catalog."default" NOT NULL,
      id character varying(250) COLLATE pg_catalog."default"
    )

    TABLESPACE pg_default;

    ALTER TABLE "spotifyChart"."sa"
      OWNER TO postgres;

    COPY "spotifyChart"."sa"
      FROM '/Users/Andrew.Munoz/HACK_REACTOR_PRECOURSE_2104/HRLAX44/mvp/dataClean/cleaned-sa-weekly-latest.csv'
      NULL 'null'
      DELIMITER ','
      CSV HEADER;

CREATE TABLE "spotifyChart"."se"
    (
      rank integer NOT NULL,
      track character varying(250) COLLATE pg_catalog."default" NOT NULL,
      artist character varying(250) COLLATE pg_catalog."default" NOT NULL,
      streams integer NOT NULL,
      url character varying(250) COLLATE pg_catalog."default" NOT NULL,
      id character varying(250) COLLATE pg_catalog."default"
    )

    TABLESPACE pg_default;

    ALTER TABLE "spotifyChart"."se"
      OWNER TO postgres;

    COPY "spotifyChart"."se"
      FROM '/Users/Andrew.Munoz/HACK_REACTOR_PRECOURSE_2104/HRLAX44/mvp/dataClean/cleaned-se-weekly-latest.csv'
      NULL 'null'
      DELIMITER ','
      CSV HEADER;

CREATE TABLE "spotifyChart"."sg"
    (
      rank integer NOT NULL,
      track character varying(250) COLLATE pg_catalog."default" NOT NULL,
      artist character varying(250) COLLATE pg_catalog."default" NOT NULL,
      streams integer NOT NULL,
      url character varying(250) COLLATE pg_catalog."default" NOT NULL,
      id character varying(250) COLLATE pg_catalog."default"
    )

    TABLESPACE pg_default;

    ALTER TABLE "spotifyChart"."sg"
      OWNER TO postgres;

    COPY "spotifyChart"."sg"
      FROM '/Users/Andrew.Munoz/HACK_REACTOR_PRECOURSE_2104/HRLAX44/mvp/dataClean/cleaned-sg-weekly-latest.csv'
      NULL 'null'
      DELIMITER ','
      CSV HEADER;

CREATE TABLE "spotifyChart"."sk"
    (
      rank integer NOT NULL,
      track character varying(250) COLLATE pg_catalog."default" NOT NULL,
      artist character varying(250) COLLATE pg_catalog."default" NOT NULL,
      streams integer NOT NULL,
      url character varying(250) COLLATE pg_catalog."default" NOT NULL,
      id character varying(250) COLLATE pg_catalog."default"
    )

    TABLESPACE pg_default;

    ALTER TABLE "spotifyChart"."sk"
      OWNER TO postgres;

    COPY "spotifyChart"."sk"
      FROM '/Users/Andrew.Munoz/HACK_REACTOR_PRECOURSE_2104/HRLAX44/mvp/dataClean/cleaned-sk-weekly-latest.csv'
      NULL 'null'
      DELIMITER ','
      CSV HEADER;

CREATE TABLE "spotifyChart"."sv"
    (
      rank integer NOT NULL,
      track character varying(250) COLLATE pg_catalog."default" NOT NULL,
      artist character varying(250) COLLATE pg_catalog."default" NOT NULL,
      streams integer NOT NULL,
      url character varying(250) COLLATE pg_catalog."default" NOT NULL,
      id character varying(250) COLLATE pg_catalog."default"
    )

    TABLESPACE pg_default;

    ALTER TABLE "spotifyChart"."sv"
      OWNER TO postgres;

    COPY "spotifyChart"."sv"
      FROM '/Users/Andrew.Munoz/HACK_REACTOR_PRECOURSE_2104/HRLAX44/mvp/dataClean/cleaned-sv-weekly-latest.csv'
      NULL 'null'
      DELIMITER ','
      CSV HEADER;

CREATE TABLE "spotifyChart"."th"
    (
      rank integer NOT NULL,
      track character varying(250) COLLATE pg_catalog."default" NOT NULL,
      artist character varying(250) COLLATE pg_catalog."default" NOT NULL,
      streams integer NOT NULL,
      url character varying(250) COLLATE pg_catalog."default" NOT NULL,
      id character varying(250) COLLATE pg_catalog."default"
    )

    TABLESPACE pg_default;

    ALTER TABLE "spotifyChart"."th"
      OWNER TO postgres;

    COPY "spotifyChart"."th"
      FROM '/Users/Andrew.Munoz/HACK_REACTOR_PRECOURSE_2104/HRLAX44/mvp/dataClean/cleaned-th-weekly-latest.csv'
      NULL 'null'
      DELIMITER ','
      CSV HEADER;

CREATE TABLE "spotifyChart"."tr"
    (
      rank integer NOT NULL,
      track character varying(250) COLLATE pg_catalog."default" NOT NULL,
      artist character varying(250) COLLATE pg_catalog."default" NOT NULL,
      streams integer NOT NULL,
      url character varying(250) COLLATE pg_catalog."default" NOT NULL,
      id character varying(250) COLLATE pg_catalog."default"
    )

    TABLESPACE pg_default;

    ALTER TABLE "spotifyChart"."tr"
      OWNER TO postgres;

    COPY "spotifyChart"."tr"
      FROM '/Users/Andrew.Munoz/HACK_REACTOR_PRECOURSE_2104/HRLAX44/mvp/dataClean/cleaned-tr-weekly-latest.csv'
      NULL 'null'
      DELIMITER ','
      CSV HEADER;

CREATE TABLE "spotifyChart"."tw"
    (
      rank integer NOT NULL,
      track character varying(250) COLLATE pg_catalog."default" NOT NULL,
      artist character varying(250) COLLATE pg_catalog."default" NOT NULL,
      streams integer NOT NULL,
      url character varying(250) COLLATE pg_catalog."default" NOT NULL,
      id character varying(250) COLLATE pg_catalog."default"
    )

    TABLESPACE pg_default;

    ALTER TABLE "spotifyChart"."tw"
      OWNER TO postgres;

    COPY "spotifyChart"."tw"
      FROM '/Users/Andrew.Munoz/HACK_REACTOR_PRECOURSE_2104/HRLAX44/mvp/dataClean/cleaned-tw-weekly-latest.csv'
      NULL 'null'
      DELIMITER ','
      CSV HEADER;

CREATE TABLE "spotifyChart"."ua"
    (
      rank integer NOT NULL,
      track character varying(250) COLLATE pg_catalog."default" NOT NULL,
      artist character varying(250) COLLATE pg_catalog."default" NOT NULL,
      streams integer NOT NULL,
      url character varying(250) COLLATE pg_catalog."default" NOT NULL,
      id character varying(250) COLLATE pg_catalog."default"
    )

    TABLESPACE pg_default;

    ALTER TABLE "spotifyChart"."ua"
      OWNER TO postgres;

    COPY "spotifyChart"."ua"
      FROM '/Users/Andrew.Munoz/HACK_REACTOR_PRECOURSE_2104/HRLAX44/mvp/dataClean/cleaned-ua-weekly-latest.csv'
      NULL 'null'
      DELIMITER ','
      CSV HEADER;

CREATE TABLE "spotifyChart"."us"
    (
      rank integer NOT NULL,
      track character varying(250) COLLATE pg_catalog."default" NOT NULL,
      artist character varying(250) COLLATE pg_catalog."default" NOT NULL,
      streams integer NOT NULL,
      url character varying(250) COLLATE pg_catalog."default" NOT NULL,
      id character varying(250) COLLATE pg_catalog."default"
    )

    TABLESPACE pg_default;

    ALTER TABLE "spotifyChart"."us"
      OWNER TO postgres;

    COPY "spotifyChart"."us"
      FROM '/Users/Andrew.Munoz/HACK_REACTOR_PRECOURSE_2104/HRLAX44/mvp/dataClean/cleaned-us-weekly-latest.csv'
      NULL 'null'
      DELIMITER ','
      CSV HEADER;

CREATE TABLE "spotifyChart"."uy"
    (
      rank integer NOT NULL,
      track character varying(250) COLLATE pg_catalog."default" NOT NULL,
      artist character varying(250) COLLATE pg_catalog."default" NOT NULL,
      streams integer NOT NULL,
      url character varying(250) COLLATE pg_catalog."default" NOT NULL,
      id character varying(250) COLLATE pg_catalog."default"
    )

    TABLESPACE pg_default;

    ALTER TABLE "spotifyChart"."uy"
      OWNER TO postgres;

    COPY "spotifyChart"."uy"
      FROM '/Users/Andrew.Munoz/HACK_REACTOR_PRECOURSE_2104/HRLAX44/mvp/dataClean/cleaned-uy-weekly-latest.csv'
      NULL 'null'
      DELIMITER ','
      CSV HEADER;

CREATE TABLE "spotifyChart"."vn"
    (
      rank integer NOT NULL,
      track character varying(250) COLLATE pg_catalog."default" NOT NULL,
      artist character varying(250) COLLATE pg_catalog."default" NOT NULL,
      streams integer NOT NULL,
      url character varying(250) COLLATE pg_catalog."default" NOT NULL,
      id character varying(250) COLLATE pg_catalog."default"
    )

    TABLESPACE pg_default;

    ALTER TABLE "spotifyChart"."vn"
      OWNER TO postgres;

    COPY "spotifyChart"."vn"
      FROM '/Users/Andrew.Munoz/HACK_REACTOR_PRECOURSE_2104/HRLAX44/mvp/dataClean/cleaned-vn-weekly-latest.csv'
      NULL 'null'
      DELIMITER ','
      CSV HEADER;

CREATE TABLE "spotifyChart"."za"
    (
      rank integer NOT NULL,
      track character varying(250) COLLATE pg_catalog."default" NOT NULL,
      artist character varying(250) COLLATE pg_catalog."default" NOT NULL,
      streams integer NOT NULL,
      url character varying(250) COLLATE pg_catalog."default" NOT NULL,
      id character varying(250) COLLATE pg_catalog."default"
    )

    TABLESPACE pg_default;

    ALTER TABLE "spotifyChart"."za"
      OWNER TO postgres;

    COPY "spotifyChart"."za"
      FROM '/Users/Andrew.Munoz/HACK_REACTOR_PRECOURSE_2104/HRLAX44/mvp/dataClean/cleaned-za-weekly-latest.csv'
      NULL 'null'
      DELIMITER ','
      CSV HEADER;

