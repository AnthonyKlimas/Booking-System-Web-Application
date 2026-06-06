CREATE TABLE services
(
id SERIAL PRIMARY KEY;
title VARCHAR(100),
duration VARCHAR(50),
price DECIMAL(10, 2),
description TEXT
);

CREATE TABLE admins
(
	id SERIAL PRIMARY KEY,
	email VARCHAR(255) UNIQUE NOT NULL,
	password_hash TEXT NOT NULL
);

CREATE TABLE time_slots
(
	id SERIAL PRIMARY KEY,
	slot_time TIMESTAMP NOT NULL,
	max_bookings INTEGER NOT NULL

);

CREATE TABLE appointments
(
	id SERIAL PRIMARY KEY,
	slot_id INTEGER REFERENCES time_slots(id),
	customer_name VARCHAR(255) NOT NULL,
	customer_email VARCHAR(255) NOT NULL,
	appointment_time TIMESTAMP NOT NULL,
	status VARCHAR(20) DEFAULT 'scheduled'
	
);

CREATE TABLE availability
(
	id SERIAL PRIMARY KEY,
	day_of_week INTEGER NOT NULL,
	start_time TIME NOT NULL,
	end_time TIME NOT NULL

);