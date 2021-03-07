create table users
(
  id serial,
  email varchar(255),
  name varchar(50),
  password varchar(50),
  role_id integer default 0
);

create table roles
(
  id integer,
  name varchar(50)
);
