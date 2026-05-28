function validatePhone() {

    let phone = document.getElementById("phone").value;

    if (phone.length !== 10 || isNaN(phone)) {

        alert("Please enter a valid 10 digit phone number");

    } else {

        alert("Phone number verified");
    }
}

function showFee(value) {

    document.getElementById("fee").innerHTML =
        "Selected Event Fee: ₹" + value;
}

function submitFeedback() {

    alert("Feedback Submitted Successfully!");
}

function enlargeImage(img) {

    img.style.width = "400px";
}

function countCharacters() {

    let text = document.getElementById("feedback").value;

    document.getElementById("count").innerHTML =
        text.length;
}