document
  .getElementById("donate-noakhali-btn")
  .addEventListener("click", function (event) {
    event.preventDefault();
    const donate = inputGatherer("input-noakhali");
    // console.log(donate);
    const balance = textValueGatherer("balance");
    const newBalance = parseFloat(balance) - parseFloat(donate);
    // console.log(newBalance);
    document.getElementById("balance").innerText = newBalance;
    const noakhaliDonated = textValueGatherer("noakhali-donated");
    const newNoakhaliDonated = parseFloat(noakhaliDonated) + parseFloat(donate);
    document.getElementById("noakhali-donated").innerText = newNoakhaliDonated;
  });
