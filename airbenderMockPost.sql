
psql -f airbenderMockPost.sql airbenderReviews

psql airbenderReviews < airbenderMockPost.sql


drop database if exists airbenderReviews;

create database airbenderReviews;
\c airbenderreviews;
create table airbendermock (
	id SERIAL,
	finalstar INT,
	accuracystar INT,
	locationstar INT,
	checkinstar INT,
	cleanlinessstar INT,
	valuestar INT,
	communicationstar INT,
	userid INT,
	username VARCHAR,
	reviewcontent TEXT,
	productid INT,
	shijian VARCHAR,
	userpic VARCHAR,
    PRIMARY KEY (id)
);

SELECT * from airbendermock INNER JOIN (SELECT id FROM airbendermock WHERE username like '%Kevin%') as virtualTable on virtualTable.id = airbendermock.id;

\COPY airbendermock(finalstar, accuracystar, locationstar, checkinstar, cleanlinessstar, valuestar, communicationstar, userid, username, reviewcontent, productid, shijian, userpic) FROM 'example.csv' DELIMITER ',' CSV HEADER;