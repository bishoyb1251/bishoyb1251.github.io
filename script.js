let ownerName = "Bishoy Bebawy"; // update the part BETWEEN the "quotes"
let userName = "bishoyb1251"; // bishoyb1251

document.querySelectorAll(".owner-name").forEach((e) => {
    e.innerHTML = ownerName;
});

document.querySelector("#github").href = "http://github.com/" + userName;
document.querySelector("#fork").href = "http://github.com/" + userName + "/" + userName + ".github.io";
