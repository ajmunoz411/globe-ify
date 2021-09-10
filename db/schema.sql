-- Database: globeify----------------------------------------------------------------------------------
-- DROP DATABASE globeify;
CREATE DATABASE globeify
    WITH
    OWNER = postgres
    ENCODING = 'UTF8'
    LC_COLLATE = 'C'
    LC_CTYPE = 'C'
    TABLESPACE = pg_default
    CONNECTION LIMIT = -1;

-- SCHEMA: globeify
-- DROP SCHEMA globeify;
CREATE SCHEMA globeify
    AUTHORIZATION postgres;

-- Table: globeify.countries----------------------------------------------------------------------------------
-- DROP TABLE globeify.countries;
CREATE TABLE globeify.countries
(
    id integer NOT NULL DEFAULT nextval('globeify.countries_id_seq'::regclass),
    code character varying(6) COLLATE pg_catalog."default" NOT NULL,
    name character varying(60) COLLATE pg_catalog."default" NOT NULL,
    coordinate point NOT NULL,
    CONSTRAINT countries_pkey PRIMARY KEY (id),
    CONSTRAINT country_code_uniq UNIQUE (code)
)

TABLESPACE pg_default;

ALTER TABLE globeify.countries
    OWNER to postgres;

-- Index: countries_id_idx
-- DROP INDEX globeify.countries_id_idx;
CREATE INDEX countries_id_idx
    ON globeify.countries USING btree
    (id ASC NULLS LAST)
    TABLESPACE pg_default;
-- Index: country_code_idx
-- DROP INDEX globeify.country_code_idx;
CREATE INDEX country_code_idx
    ON globeify.countries USING btree
    (code COLLATE pg_catalog."default" ASC NULLS LAST)
    TABLESPACE pg_default;

-- Table: globeify.tracks----------------------------------------------------------------------------------
-- DROP TABLE globeify.tracks;
CREATE TABLE globeify.tracks
(
    id integer NOT NULL DEFAULT nextval('globeify.tracks_id_seq'::regclass),
    name character varying(250) COLLATE pg_catalog."default" NOT NULL,
    artist character varying(250) COLLATE pg_catalog."default" NOT NULL,
    url character varying(250) COLLATE pg_catalog."default" NOT NULL,
    spotify_id character varying(125) COLLATE pg_catalog."default" NOT NULL,
    danceability double precision,
    energy double precision,
    key integer,
    loudness double precision,
    mode integer,
    speechiness double precision,
    acousticness double precision,
    instrumentalness double precision,
    liveness double precision,
    valence double precision,
    tempo double precision,
    duration integer,
    meter integer,
    CONSTRAINT tracks_pkey PRIMARY KEY (id),
    CONSTRAINT spotify_id_uniq UNIQUE (spotify_id)
)

TABLESPACE pg_default;

ALTER TABLE globeify.tracks
    OWNER to postgres;

-- Index: track_spotify_id_idx
-- DROP INDEX globeify.track_spotify_id_idx;
CREATE INDEX track_spotify_id_idx
    ON globeify.tracks USING btree
    (spotify_id COLLATE pg_catalog."default" ASC NULLS LAST)
    TABLESPACE pg_default;
-- Index: tracks_id_idx
-- DROP INDEX globeify.tracks_id_idx;
CREATE INDEX tracks_id_idx
    ON globeify.tracks USING btree
    (id ASC NULLS LAST)
    TABLESPACE pg_default;
-- Index: tracks_url_idx
-- DROP INDEX globeify.tracks_url_idx;
CREATE INDEX tracks_url_idx
    ON globeify.tracks USING btree
    (url COLLATE pg_catalog."default" ASC NULLS LAST)
    TABLESPACE pg_default;

-- Table: globeify.rankings----------------------------------------------------------------------------------
-- DROP TABLE globeify.rankings;
CREATE TABLE globeify.rankings
(
    id integer NOT NULL DEFAULT nextval('globeify.rankings_id_seq'::regclass),
    rank integer NOT NULL,
    streams integer NOT NULL,
    country_id integer NOT NULL,
    track_id integer NOT NULL,
    CONSTRAINT rankings_pkey PRIMARY KEY (id),
    CONSTRAINT rank_country_uniq UNIQUE (country_id, rank),
    CONSTRAINT country_id_fk FOREIGN KEY (country_id)
        REFERENCES globeify.countries (id) MATCH SIMPLE
        ON UPDATE CASCADE
        ON DELETE CASCADE,
    CONSTRAINT track_id_fk FOREIGN KEY (track_id)
        REFERENCES globeify.tracks (id) MATCH SIMPLE
        ON UPDATE CASCADE
        ON DELETE CASCADE
)

TABLESPACE pg_default;

ALTER TABLE globeify.rankings
    OWNER to postgres;
-- Index: fki_country_id_fk
-- DROP INDEX globeify.fki_country_id_fk;
CREATE INDEX fki_country_id_fk
    ON globeify.rankings USING btree
    (country_id ASC NULLS LAST)
    TABLESPACE pg_default;
-- Index: fki_track_id_fk
-- DROP INDEX globeify.fki_track_id_fk;
CREATE INDEX fki_track_id_fk
    ON globeify.rankings USING btree
    (track_id ASC NULLS LAST)
    TABLESPACE pg_default;
-- Index: rankings_id_idx
-- DROP INDEX globeify.rankings_id_idx;
CREATE INDEX rankings_id_idx
    ON globeify.rankings USING btree
    (id ASC NULLS LAST)
    TABLESPACE pg_default;
-- Index: rankings_rank_idx
-- DROP INDEX globeify.rankings_rank_idx;
CREATE INDEX rankings_rank_idx
    ON globeify.rankings USING btree
    (rank ASC NULLS LAST)
    TABLESPACE pg_default;