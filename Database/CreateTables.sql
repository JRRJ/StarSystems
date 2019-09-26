DO $$ BEGIN

IF NOT EXISTS(
  SELECT schema_name
  FROM information_schema.schemata
  WHERE schema_name = 'star_systems'
)
THEN

CREATE SCHEMA star_systems;

CREATE TABLE star_systems.star_system (
	star_system_id INT PRIMARY KEY NOT NULL GENERATED ALWAYS AS IDENTITY,
	system_name VARCHAR(255) NOT NULL,
	right_ascension REAL NOT NULL,
	declination REAL NOT NULL,
	parallax REAL NOT NULL,
	distance REAL NOT NULL
);

CREATE TABLE star_systems.star (
	star_id INT PRIMARY KEY NOT NULL GENERATED ALWAYS AS IDENTITY,
	star_name VARCHAR(255) NOT NULL,
	spectral_type VARCHAR(55) NOT NULL,
	bv_color_index REAL NULL,
	absolute_magniude REAL NULL,
	mass REAL NULL,
	radius REAL NULL,
	luminosity REAL NULL,
	temperature INT NULL,
	age REAL NULL,
	metallicity REAL NULL,
	star_system_id INT REFERENCES star_systems.star_system(star_system_id)
);

CREATE TABLE star_systems.orbit (
	orbit_id INT PRIMARY KEY NOT NULL GENERATED ALWAYS AS IDENTITY,
	semi_major_axis REAL NOT NULL,
	period REAL NOT NULL,
	eccentricity REAL NULL,
	inclination REAL NULL
);

CREATE TABLE star_systems.planet (
	planet_id INT PRIMARY KEY NOT NULL GENERATED ALWAYS AS IDENTITY,
	planet_name VARCHAR(255) NOT NULL,
	mass REAL NULL,
	radius REAL NULL,
	density REAL NULL,
	gravity REAL NULL,
	temperature INT NULL,
	atmospheric_pressure REAL NULL,
	discovery_method VARCHAR(55) NOT NULL,
	orbit_id INT REFERENCES star_systems.orbit(orbit_id),
	star_id INT REFERENCES star_systems.star(star_id)
);

INSERT INTO star_systems.star_system (system_name,right_ascension,declination,parallax,distance) VALUES 
('Sol',0.0,0.0,0.0,0.0)
,('Alpha Centauri',219.87384,-60.832222,754.81,4.3210344)
,('Barnard''s Star',269.4521,4.693364,547.4506,5.9577246)
,('Luhman 16',162.32881,-53.319466,500.51,6.5164733)
,('WISE 0855-0714',133.79512,-7.24514,448.0,7.2802677)
,('Wolf 359',164.1201,7.01454,413.13,7.894755)
,('Lalande 21185',165.83414,35.96988,392.64,8.306744)
,('Sirius',101.287155,-16.716116,379.21,8.600933)
,('Luyten 726-8',24.755007,-17.950739,375.0,8.697494)
,('Ross 154',282.4557,-23.836237,336.1228,9.703478)
,('Ross 248',355.4793,44.177452,316.9558,10.290268)
,('Epsilon Eridani',53.23269,-9.458259,310.94,10.489355)
,('Lacaille 9352',346.46683,-35.853073,304.219,10.721092)
,('Ross 128',176.93498,0.8045569,296.3073,11.007357)
,('EZ Aquarii',339.6399,-15.2999325,293.6,11.108855)
,('61 Cygni',316.72476,38.749416,285.9459,11.406214)
,('Procyon',114.8255,5.2249875,284.56,11.461765)
,('Struve 2398',280.6946,59.630394,283.9489,11.486433)
,('Groombridge 34',4.595354,44.022953,280.6902,11.619786)
,('DX Cancri',127.455635,26.776007,279.2901,11.678037)
;

INSERT INTO star_systems.star (star_name,spectral_type,bv_color_index,absolute_magniude,mass,radius,luminosity,temperature,age,metallicity,star_system_id) VALUES 
('Sun','G2V',0.63,4.83,1.0,1.0,1.0,5772,4.6,0.0122,1)
,('Alpha Centauri A','G2V',0.71,4.38,1.1,1.2234,1.519,5790,5.3,0.2,2)
,('Alpha Centauri B','K1V',0.88,5.71,0.907,0.8632,0.5002,5260,5.3,0.23,2)
,('Proxima Centauri','M5.5Ve',1.82,15.6,0.1221,0.1542,0.0017,3042,4.85,0.21,2)
,('Barnard''s Star','M4.0V',1.713,13.21,0.144,0.196,0.0035,3134,10.0,-1.0,3)
,('Luhman 16 A','L7.5',NULL,NULL,0.032,0.1,2.19E-5,1350,NULL,NULL,4)
,('Luhman 16 B','T0.5',NULL,NULL,0.027,0.1,2.09E-5,1210,NULL,NULL,4)
,('WISE 0855-0714','Y2',NULL,NULL,0.005,0.1,0.0,240,NULL,NULL,5)
,('Wolf 359','M6.5Ve',2.034,16.65,0.09,0.16,0.0014,2800,0.2,0.18,6)
,('Lalande 21185','M2V',1.444,10.48,0.46,0.393,0.026,3828,7.0,-0.2,7)
,('Sirius A','A1V',0.0,1.42,2.063,1.711,25.4,9940,0.237,0.5,8)
,('Sirius B','DA2',-0.03,11.18,1.018,0.0084,0.056,25000,0.228,NULL,8)
,('Luyten 726-8 A','M5.5V',1.87,12.7,0.102,0.14,6.0E-5,2670,NULL,NULL,9)
,('Luyten 726-8 B','M6V',NULL,13.2,0.1,0.14,4.0E-5,2650,NULL,NULL,9)
,('Ross 154','M3.5V',1.76,13.07,0.17,0.24,0.0038,3340,1.0,-0.25,10)
;

INSERT INTO star_systems.orbit (semi_major_axis,"period",eccentricity,inclination) VALUES 
(0.387,87.97,0.206,7.01)
,(0.728,224.7,0.00677,3.39)
,(1.0,365.26,0.0167,0.0)
,(1.523,686.971,0.0934,1.85)
,(5.2044,4332.59,0.0489,1.303)
,(10.1238,10759.22,0.0565,2.485)
,(19.218,30688.5,0.046381,0.773)
,(30.11,60182.0,0.009456,1.768)
,(0.0485,11.186,0.35,NULL)
,(0.404,232.8,0.32,NULL)
,(1.845,2938.0,0.04,NULL)
,(0.018,2.687,0.15,NULL)
,(0.0785,12.9532,0.22,NULL)
;

INSERT INTO star_systems.planet (planet_name,mass,radius,density,gravity,temperature,atmospheric_pressure,discovery_method,orbit_id,star_id) VALUES 
('Mercury',0.055,0.3829,0.98,0.38,340,0.0,'',1,1)
,('Venus',0.815,0.95,0.951,0.904,737,91.0,'',2,1)
,('Earth',1.0,1.0,1.0,1.0,288,1.0,'',3,1)
,('Mars',0.107,0.532,0.71,0.3794,210,0.00628,'',4,1)
,('Jupiter',317.8,11.19,0.227,2.528,165,-1.0,'',5,1)
,('Saturn',95.3,9.26,0.12,1.065,134,-1.0,'',6,1)
,('Uranus',14.6,4.01,0.226,0.886,76,-1.0,'telescope',7,1)
,('Neptune',17.23,3.88,0.295,1.14,72,-1.0,'telescope',8,1)
,('Proxima Centauri b',1.27,NULL,NULL,NULL,234,NULL,'radial_velocity',9,4)
,('Barnard''s Star b',3.23,NULL,NULL,NULL,105,NULL,'radial_velocity',10,5)
,('Wolf 359 b',43.9,NULL,NULL,NULL,50,NULL,'radial_velocity',11,9)
,('Wolf 359 c',3.8,NULL,NULL,NULL,500,NULL,'radial_velocity',12,9)
,('Lalande 21185',2.99,NULL,NULL,NULL,349,NULL,'radial_velocity',13,10)
;

--COPY star_systems.star_system
--FROM 'star_system.csv' DELIMITER ',' CSV HEADER;
--
--COPY star_systems.star
--FROM 'star.csv' DELIMITER ',' CSV HEADER;
--
--COPY star_systems.orbit
--FROM 'orbit.csv' DELIMITER ',' CSV HEADER;
--
--COPY star_systems.planet
--FROM 'planet.csv' DELIMITER ',' CSV HEADER;

END IF;

END $$;
