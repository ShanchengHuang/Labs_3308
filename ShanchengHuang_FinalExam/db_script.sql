CREATE DATABASE book_review;

CREATE TABLE
IF NOT EXISTS table_review
(
	id SMALLINT PRIMARY KEY,
	book_title TEXT,
    review TEXT,
	review_data DATE
);

INSERT INTO book_review
    (id,book_title,book_title,review,review_data)
VALUES
    ('0', 'Books of Answer', 'GOD', 'very good, the books that you have to read about', '2020-12-9');
