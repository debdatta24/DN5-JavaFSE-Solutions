const events = [

    {
        name: "Music Event",
        seats: 10,
        status: "upcoming"
    },

    {
        name: "Old Workshop",
        seats: 0,
        status: "past"
    },

    {
        name: "Tech Meetup",
        seats: 5,
        status: "upcoming"
    }
];

events.forEach(function(event) {

    if(event.status === "upcoming" && event.seats > 0) {

        console.log(event.name + " is available");

    } else {

        console.log(event.name + " is not available");
    }
});

try {

    let seats = 0;

    if(seats <= 0) {

        throw "No Seats Available";
    }

} catch(error) {

    console.log("Error:", error);
}