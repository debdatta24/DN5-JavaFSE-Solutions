USE community_portal;

SELECT
    COUNT(*) AS Total_Users

FROM Users;

SELECT
    category,
    COUNT(*) AS Total_Events

FROM Events

GROUP BY category;

SELECT
    MIN(event_date) AS First_Event

FROM Events;