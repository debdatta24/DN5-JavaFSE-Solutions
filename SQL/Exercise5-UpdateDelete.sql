USE community_portal;

UPDATE Users

SET city = 'Boston'

WHERE user_id = 1;

DELETE FROM Registrations

WHERE registration_id = 3;

SELECT * FROM Users;

SELECT * FROM Registrations;
