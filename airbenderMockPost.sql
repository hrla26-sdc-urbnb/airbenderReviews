
psql -f airbenderMockPost.sql airbenderReviews

psql airbenderReviews < airbenderMockPost.sql


drop database if exists airbenderReviews;

create database airbenderReviews;
\c airbenderreviews;
create table airbendermock (
	id SERIAL,
	finalStar INT,
	accuracyStar INT,
	locationStar INT,
	checkinStar INT,
	cleanlinessStar INT,
	valueStar INT,
	communicationStar INT,
	userId INT,
	userName VARCHAR,
	reviewContent TEXT,
	productId INT,
	shijian VARCHAR,
	userPic VARCHAR,
    PRIMARY KEY (id)
);

SELECT * from airbendermock INNER JOIN (SELECT id FROM airbendermock WHERE username like '%Kevin%') as virtualTable on virtualTable.id = airbendermock.id;

\COPY airbendermock(finalStar, accuracyStar, locationStar, checkinStar, cleanlinessStar, valueStar, communicationStar, userId, userName, reviewContent, productId, shijian, userPic) FROM 'example.csv' DELIMITER ',' CSV HEADER;