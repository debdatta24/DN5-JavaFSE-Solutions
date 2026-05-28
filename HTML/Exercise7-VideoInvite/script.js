function videoReady() {

    document.getElementById("message").innerHTML =
        "Video ready to play";
}

window.onbeforeunload = function () {

    return "Are you sure you want to leave this page?";
};