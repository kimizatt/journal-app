create table users (
   id serial primary key,
   username varchar(30) not null unique,
   password varchar not null
)