function Event(name, seats) {

    this.name = name;

    this.seats = seats;
}

Event.prototype.checkAvailability = function () {

    if(this.seats > 0) {

        console.log(this.name + " seats available");

    } else {

        console.log(this.name + " full");
    }
};

const event1 = new Event("Music Festival", 25);

event1.checkAvailability();

console.log(Object.entries(event1));