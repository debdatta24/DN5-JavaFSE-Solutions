USE community_portal;

SELECT
    Users.full_name,
    Events.title,
    Events.location

FROM Registrations

JOIN Users
ON Registrations.user_id = Users.user_id

JOIN Events
ON Registrations.event_id = Events.event_id;