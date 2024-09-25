document
  .getElementById("donate-noakhali-btn")
  .addEventListener("click", function (event) {
    event.preventDefault();
    const donate = inputGatherer("input-noakhali");
    if (isNaN(donate)) {
      alert("please enter a valid positive number");
      return;
    } else if (donate < "1") {
      alert("please enter a valid positive number");
      return;
    }
    // console.log(donate);
    const balance = textValueGatherer("balance");
    const newBalance = parseFloat(balance) - parseFloat(donate);
    // console.log(newBalance);
    document.getElementById("balance").innerText = newBalance;
    const noakhaliDonated = textValueGatherer("noakhali-donated");
    const newNoakhaliDonated = parseFloat(noakhaliDonated) + parseFloat(donate);
    document.getElementById("noakhali-donated").innerText = newNoakhaliDonated;
  });
document
  .getElementById("feni-donate-btn")
  .addEventListener("click", function (event) {
    event.preventDefault();
    const donate1 = inputGatherer("feni-input");
    if (isNaN(donate1)) {
      alert("please enter a valid positive number");
      return;
    } else if (donate1 < "1") {
      alert("please enter a valid positive number");
      return;
    }
    const balance2 = textValueGatherer("balance");
    const newBalance2 = parseFloat(balance2) - parseFloat(donate1);
    document.getElementById("balance").innerText = newBalance2;
    const feniDonated = textValueGatherer("feni-donated");
    const newFeniDonated = parseFloat(feniDonated) + parseFloat(donate1);
    document.getElementById("feni-donated").innerText = newFeniDonated;
  });
document
  .getElementById("stu-donate-btn")
  .addEventListener("click", function (event) {
    event.preventDefault();
    const donate2 = inputGatherer("stu-input");
    if (isNaN(donate2)) {
      alert("please enter a valid positive number");
      return;
    } else if (donate2 < "1") {
      alert("please enter a valid positive number");
      return;
    }
    const balance3 = textValueGatherer("balance");
    const newBalance3 = parseFloat(balance3) - parseFloat(donate2);
    document.getElementById("balance").innerText = newBalance3;
    const stuDonated = textValueGatherer("stu-donated");
    const newStuDonated = parseFloat(stuDonated) + parseFloat(donate2);
    document.getElementById("stu-donated").innerText = newStuDonated;
  });
