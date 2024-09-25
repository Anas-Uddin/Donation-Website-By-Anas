function inputGatherer(id) {
  const idValue = document.getElementById(id).value;
  return idValue;
}
function textValueGatherer(id) {
  const textValue = document.getElementById(id).innerText;
  return textValue;
}
function showSectionById(id) {
  document.getElementById("section-1").classList.add("hidden");
  document.getElementById("section-2").classList.add("hidden");
  document.getElementById(id).classList.remove("hidden");
}
