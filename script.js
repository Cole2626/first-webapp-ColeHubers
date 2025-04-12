document.getElementById("myBtn")?.addEventListener("click",() => {
    let input = document.getElementById("myInput").value;
    document.getElementById("myPara").innerHTML = "You typed " + input;
});
document.getElementById("Donate")?.addEventListener("click", () => {
    console.log("Donated 200$ to the Human Fund");
    alert("You have donated 200$ to the Human Fund!");
});
document.getElementById("payTaxes")?.addEventListener("click", () => {
    console.log("Taxes have been paid");
    alert("Congratulations, you have paid your taxes!");
});
