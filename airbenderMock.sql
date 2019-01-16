-- mysql -uroot -p <airbenderMock.sql
-- mysql -uroot -p --local-infile airbenderReviews<airbenderMock.sql



drop database if exists airbenderReviews;
create database airbenderReviews;
use airbenderReviews;
create table airbenderMock (
	id INT,
	finalStar INT,
	accuracyStar INT,
	locationStar INT,
	checkinStar INT,
	cleanlinessStar INT,
	valueStar INT,
	communicationStar INT,
	userId INT,
	userName VARCHAR(50),
	reviewContent TEXT,
	productId INT,
	shijian DATE,
	userPic VARCHAR(50)
);

LOAD DATA LOCAL INFILE 'example.csv' INTO TABLE airbenderMock FIELDS TERMINATED BY ',' LINES TERMINATED BY '\n'  ignore 1 lines;
