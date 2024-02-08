create table users (
	user_id serial primary key,
	full_name varchar(100) not null,
	email varchar(100) not null unique,
	username varchar(50) not null unique,
	password varchar(200) not null
);