create table users (
   id serial primary key,
   username varchar(30) not null unique,
   password varchar not null
);

create table entries (
   entry_id serial primary key,
   date varchar(30),
   title varchar(50),
   content text,
   mood varchar(25),
   user_id integer references users(id)
);