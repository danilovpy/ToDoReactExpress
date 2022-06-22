DROP TABLE IF EXISTS todo;

CREATE TABLE todo ( 
  id SERIAL PRIMARY KEY,
  description VARCHAR(255)
);

INSERT INTO todo (description) VALUES
  ('I need to clean my room'),
  ('Wash dishes'),
  ('Code');
