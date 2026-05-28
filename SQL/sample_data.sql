USE community_portal;

INSERT INTO Users
(full_name, email, city)

VALUES

('Alice Johnson',
 'alice@example.com',
 'New York'),

('Bob Smith',
 'bob@example.com',
 'Chicago'),

('Charlie Brown',
 'charlie@example.com',
 'Los Angeles');



INSERT INTO Events
(title, category, event_date, location)

VALUES

('Music Festival',
 'Music',
 '2026-06-15',
 'Central Park'),

('Tech Workshop',
 'Education',
 '2026-07-20',
 'City Hall'),

('Sports Meet',
 'Sports',
 '2026-08-10',
 'Community Ground');



INSERT INTO Registrations
(user_id, event_id)

VALUES

(1,1),

(2,2),

(3,3);