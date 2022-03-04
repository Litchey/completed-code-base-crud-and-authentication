-- CREATE DATABASE FORM;

-- CREATE TABLE users(
--     user_id uuid PRIMARY KEY DEFAULT
--     uuid_generate_v4(),
--     user_name VARCHAR(255) NOT NULL,
--     user_email VARCHAR(255) NOT NULL,
--     user_password VARCHAR(255) NOT NULL,
--     user_list VARCHAR(225) NOT NULL,
--     user_type VARCHAR(255) NOT NULL
-- );

-- INSERT INTO users (user_name, user_email,
--  user_password) VALUES ('litu', 
--  'litu@gmail.com', 'hello@000');




CREATE DATABASE jwtcrud;

--users
CREATE TABLE users (
    user_id UUID DEFAULT uuid_generate_v4(),
    user_name VARCHAR(255) NOT NULL,
    user_email VARCHAR(255) NOT NULL UNIQUE,
    user_password VARCHAR(255) NOT NULL,
    PRIMARY KEY (user_id)
);


--todo

CREATE TABLE todo (
    todo_id SERIAL,
    user_id UUID,
    description VARCHAR(255) NOT NULL,
    PRIMARY KEY (todo_id),
    FOREIGN KEY (user_id) REFERENCES users(user_id)
);


--fake users data

insert into users (user_name, user_email, user_password) values ('hamid-another', 'hamid-another423@gmail.com', '423');


--fake todo data

insert into todo (user_id, description) values ('b32e54df-bdb4-4e05-b23e-a49c5f01cd74', 'hello command-prompt');