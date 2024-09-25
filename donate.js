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
    const p = document.createElement("p");
    const timeNow = new Date();
    p.innerText = `Donated ${donate} taka for Noakhali. The time during the transaction was ${timeNow}`;
    p.classList.add("text-black", "bg-gray-200", "p-4", "m-2", "rounded");
    document.getElementById("transactions").appendChild(p);
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
    const p = document.createElement("p");
    const timeNow1 = new Date();
    p.innerText = `Donated ${donate1} taka for Feni. The time during the transaction was ${timeNow1}`;
    p.classList.add("text-black", "bg-gray-200", "p-4", "m-2", "rounded");
    document.getElementById("transactions").appendChild(p);
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
    const p = document.createElement("p");
    const timeNow2 = new Date();
    p.innerText = `Donated ${donate2} taka for Students. The time during the transaction was ${timeNow2}`;
    p.classList.add("text-black", "bg-gray-200", "p-4", "m-2", "rounded");
    document.getElementById("transactions").appendChild(p);
  });
document
  .getElementById("donation-sec-btn")
  .addEventListener("click", function () {
    showSectionById("section-1");
  });
document
  .getElementById("history-sec-btn")
  .addEventListener("click", function () {
    showSectionById("section-2");
  });
