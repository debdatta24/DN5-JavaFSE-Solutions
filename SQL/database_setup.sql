CREATE DATABASE community_portal;

USE community_portal;

CREATE TABLE Users (

    user_id INT PRIMARY KEY AUTO_INCREMENT,

    full_name VARCHAR(100),

    email VARCHAR(100),

    city VARCHAR(50)
);

CREATE TABLE Events (

    event_id INT PRIMARY KEY AUTO_INCREMENT,

    title VARCHAR(100),

    category VARCHAR(50),

    event_date DATE,

    location VARCHAR(100)
);

CREATE TABLE Registrations (

    registration_id INT PRIMARY KEY AUTO_INCREMENT,

    user_id INT,

    event_id INT,

    FOREIGN KEY(user_id)
    REFERENCES Users(user_id),

    FOREIGN KEY(event_id)
    REFERENCES Events(event_id)
);