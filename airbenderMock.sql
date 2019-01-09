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

-- insert into airbenderMock (id, finalStar, accuracyStar, locationStar, checkinStar, cleanlinessStar, valueStar, communicationStar, userId, userName, reviewContent, productId, shijian, userPic) values (1, 1, 1, 1, 5, 2, 3, 4, 1, 'Ronni', 'Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus. Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero. Nullam sit amet turpis elementum ligula vehicula consequat.', 11190, '2/4/2017', 'http://dummyimage.com/224x220.jpg/cc0000/ffffff');
LOAD DATA LOCAL INFILE 'example.csv' INTO TABLE airbenderMock FIELDS TERMINATED BY ',' LINES TERMINATED BY '\n'  ignore 1 lines;
LOAD DATA LOCAL INFILE 'example.csv' INTO TABLE airbenderMock FIELDS TERMINATED BY ',' LINES TERMINATED BY '\n'  ignore 1 lines;
LOAD DATA LOCAL INFILE 'example.csv' INTO TABLE airbenderMock FIELDS TERMINATED BY ',' LINES TERMINATED BY '\n'  ignore 1 lines;
LOAD DATA LOCAL INFILE 'example.csv' INTO TABLE airbenderMock FIELDS TERMINATED BY ',' LINES TERMINATED BY '\n'  ignore 1 lines;
LOAD DATA LOCAL INFILE 'example.csv' INTO TABLE airbenderMock FIELDS TERMINATED BY ',' LINES TERMINATED BY '\n'  ignore 1 lines;
LOAD DATA LOCAL INFILE 'example.csv' INTO TABLE airbenderMock FIELDS TERMINATED BY ',' LINES TERMINATED BY '\n'  ignore 1 lines;
LOAD DATA LOCAL INFILE 'example.csv' INTO TABLE airbenderMock FIELDS TERMINATED BY ',' LINES TERMINATED BY '\n'  ignore 1 lines;
LOAD DATA LOCAL INFILE 'example.csv' INTO TABLE airbenderMock FIELDS TERMINATED BY ',' LINES TERMINATED BY '\n'  ignore 1 lines;
LOAD DATA LOCAL INFILE 'example.csv' INTO TABLE airbenderMock FIELDS TERMINATED BY ',' LINES TERMINATED BY '\n'  ignore 1 lines;
LOAD DATA LOCAL INFILE 'example.csv' INTO TABLE airbenderMock FIELDS TERMINATED BY ',' LINES TERMINATED BY '\n'  ignore 1 lines;

