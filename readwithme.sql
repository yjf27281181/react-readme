CREATE TABLE user(
    id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(20) UNIQUE,
    pass_word VARCHAR(100),
    create_time DATETIME
);

CREATE TABLE question (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(50),
    content VARCHAR(300),
    pdf_name VARCHAR(40),
    page_num INT,
    pos_x INT,
    pos_y INT,
    author_id INT,
    create_time DATETIME,
    like_num INT,
    FOREIGN KEY (author_id) REFERENCES user(id)
);

CREATE TABLE comment (
    id INT AUTO_INCREMENT PRIMARY KEY,
    author_id INT REFERENCES user(id),
    question_id INT REFERENCES question(id),
    create_time DATETIME,
    like_num INT,
    content VARCHAR(300)
);