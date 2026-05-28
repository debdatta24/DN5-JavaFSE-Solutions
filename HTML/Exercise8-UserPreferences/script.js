window.onload = function() {
    let savedEvent = localStorage.getItem("preferredEvent");

    if(savedEvent) {
        document.getElementById("eventType").value = savedEvent;
    }
};

function savePreference() {
    let eventType = document.getElementById("eventType").value;

    localStorage.setItem("preferredEvent", eventType);

    sessionStorage.setItem("sessionEvent", eventType);

    alert("Preference Saved");
}

function clearPreferences() {
    localStorage.clear();
    sessionStorage.clear();

    alert("Preferences Cleared");
}