// Initialize votes
let votes = JSON.parse(localStorage.getItem("votes")) || {
    "Candidate A": 0,
    "Candidate B": 0,
    "Candidate C": 0
};

let votedUsers = JSON.parse(localStorage.getItem("votedUsers")) || [];

updateResults();

function login() {
    let voterId = document.getElementById("voterId").value;

    if (voterId === "") {
        document.getElementById("loginMsg").innerText = "Please enter Voter ID";
        return;
    }

    if (votedUsers.includes(voterId)) {
        document.getElementById("loginMsg").innerText = "You have already voted!";
        return;
    }

    document.getElementById("loginBox").classList.add("hidden");
    document.getElementById("voteBox").classList.remove("hidden");
}

function submitVote() {
    let selected = document.querySelector('input[name="candidate"]:checked');

    if (!selected) {
        document.getElementById("voteMsg").innerText = "Please select a candidate";
        return;
    }

    let voterId = document.getElementById("voterId").value;
    let candidate = selected.value;

    votes[candidate]++;
    votedUsers.push(voterId);

    localStorage.setItem("votes", JSON.stringify(votes));
    localStorage.setItem("votedUsers", JSON.stringify(votedUsers));

    document.getElementById("voteMsg").innerText = "✅ Vote submitted successfully!";
    document.getElementById("voteBox").classList.add("hidden");

    updateResults();
}

function updateResults() {
    document.getElementById("aVotes").innerText = votes["Candidate A"];
    document.getElementById("bVotes").innerText = votes["Candidate B"];
    document.getElementById("cVotes").innerText = votes["Candidate C"];
}
