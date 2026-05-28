function addEvent(name) {

    console.log(name + " event added");
}

function registerUser(userName) {

    console.log(userName + " registered successfully");
}

function filterEventsByCategory(events, callback) {

    return events.filter(callback);
}

const events = [

    {
        name: "Music Show",
        category: "Music"
    },

    {
        name: "Coding Workshop",
        category: "Education"
    }
];

const musicEvents = filterEventsByCategory(
    events,
    event => event.category === "Music"
);

console.log(musicEvents);

function registrationTracker() {

    let totalRegistrations = 0;

    return function () {

        totalRegistrations++;

        return totalRegistrations;
    };
}

const counter = registrationTracker();

console.log(counter());
console.log(counter());

addEvent("Dance Event");

registerUser("Deb");