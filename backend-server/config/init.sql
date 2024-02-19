create table users (
	user_id serial primary key,
	full_name varchar(100) not null,
	email varchar(100) not null unique,
	username varchar(50) not null unique,
	password varchar(200) not null
);

create table products (
	product_id serial primary key,
	product_name varchar(200) not null unique,
	price real not null,
	description text not null,
	image_url text not null, 
	brand_name varchar(200) not null
);