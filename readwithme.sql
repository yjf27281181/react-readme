CREATE TABLE user(
    id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(20),
    pass_word VARCHAR(100),
    create_time DATETIME
);

CREATE TABLE question (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(50),
    content VARCHAR(300),
    author_id INT REFERENCES user(id),
    create_time DATETIME,
    like_num INT
);

CREATE TABLE comment (
    id INT AUTO_INCREMENT PRIMARY KEY,
    author_id INT REFERENCES user(id),
    question_id INT REFERENCES question(id),
    create_time DATETIME,
    like_num INT,
    content VARCHAR(300)
);