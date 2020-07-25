-- DROP TABLE IF EXISTS helo_users;

CREATE TABLE helo_users (
helo_id SERIAL PRIMARY KEY,
email VARCHAR(50) NOT NULL,
helo_password VARCHAR(20) NOT NULL,
img_url VARCHAR(100)
)

create table helo_posts(
helo_post_id SERIAL PRIMARY KEY,
post_content TEXT, 
author_id INTEGER, 
post_time TIMESTAMP)
ALTER TABLE helo_users
DROP COLUMN helo_password;

-- ALTER TABLE helo_users
-- ADD COLUMN helo_password TEXT NOT NULL;