
DROP KEYSPACE IF EXISTS airbenderReviews;
-- CREATE KEYSPACE airbenderReviews
--     WITH REPLICATION = {
--         'class': 'NetworkTopologyStrategy', 
--         'data_center1': 3
--     };

CREATE KEYSPACE airbenderReviews
    WITH REPLICATION = {
        'class': 'SimpleStrategy', 
        'replication_factor': 1
    };

	USE airbenderReviews;

-- create table airbenderMock (
-- 	id INT PRIMARY KEY,
-- 	finalStar INT,
-- 	accuracyStar INT,
-- 	locationStar INT,
-- 	checkinStar INT,
-- 	cleanlinessStar INT,
-- 	valueStar INT,
-- 	communicationStar INT,
-- 	userId INT,
-- 	userName VARCHAR,
-- 	reviewContent TEXT,
-- 	productId INT,
-- 	shijian VARCHAR,
-- 	userPic VARCHAR,
-- );

create table airbenderMockNormal (
	id INT PRIMARY KEY,
	finalStar INT,
	accuracyStar INT,
	locationStar INT,
	checkinStar INT,
	cleanlinessStar INT,
	valueStar INT,
	communicationStar INT,
	userId INT,
	userName VARCHAR,
	reviewContent VARCHAR,
	productId INT,
	shijian VARCHAR,
	userPic VARCHAR,
);

CREATE TABLE usernameq (
    id INT,
    username text,
	PRIMARY KEY(id, username)
);

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
	userName TEXT,
	reviewContent TEXT,
	productId INT,
	shijian TEXT,
	userPic TEXT,
    PRIMARY KEY(productid, id)
);

SELECT * FROM airbendermock WHERE id IN (SELECT id FROM username WHERE username like 



-- PRIMARY KEY(productid, id);

CREATE CUSTOM INDEX usernameqindex ON usernameq (username) USING 'org.apache.cassandra.index.sasi.SASIIndex'
WITH OPTIONS = {
'mode': 'CONTAINS',
'analyzer_class': 'org.apache.cassandra.index.sasi.analyzer.StandardAnalyzer',
'analyzed': 'true',
'tokenization_skip_stop_words': 'and, the, or',
'tokenization_enable_stemming': 'true',
'tokenization_normalize_lowercase': 'true',
'tokenization_locale': 'en'
};
CREATE CUSTOM INDEX usernameindex2 ON airbendermock (username) USING 'org.apache.cassandra.index.sasi.SASIIndex'
WITH OPTIONS = {
'mode': 'CONTAINS',
'analyzer_class': 'org.apache.cassandra.index.sasi.analyzer.StandardAnalyzer',
'analyzed': 'true',
'tokenization_skip_stop_words': 'and, the, or',
'tokenization_enable_stemming': 'true',
'tokenization_normalize_lowercase': 'true',
'tokenization_locale': 'en'
};

SELECT * FROM airbendermock WHERE id IN (SELECT id FROM usernameq WHERE username like '%Kevin')


    -- WITH CLUSTERING ORDER BY (productId DESC) 
    -- AND caching = {"keys":"ALL", "rows_per_partition":"ALL"};

CREATE CUSTOM INDEX usernamequery ON username (username) USING 'org.apache.cassandra.index.sasi.SASIIndex';

COPY airbendermockNormal(id, finalStar, accuracyStar, locationStar, checkinStar, cleanlinessStar, valueStar, communicationStar, userId, userName, reviewContent, productId, shijian, userPic) FROM 'example.csv' with HEADER = TRUE;

-- COPY airbendermock(username, id) FROM 'example.csv' with HEADER = TRUE;

COPY airbendermock(id, username) TO 'username.csv';
COPY usernameq(id, username) FROM 'username.csv';
