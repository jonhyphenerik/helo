INSERT INTO helo_users (email, helo_password)
VALUES ($1, $2)
RETURNING *;