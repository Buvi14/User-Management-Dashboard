function openModal() {
  document.getElementById("myModal").style.display = "flex";
}

function closeModal() {
  document.getElementById("myModal").style.display = "none";
}

data = [
  "New Admin Design",
  "ReDesign: Landing Page",
  "Aboutus Design",
  "Contact Page Design",
  "UserPage Design",
  "Landing Page Design",
  "MultiPurpose Landing template",
  "Blog template Design",
  "Brand Logo Design",
];

function filterData() {
  var val = document.querySelector(".project-details input").value;
  const found = data.find((element) => element === val);
  found !== undefined
    ? alert(found + " Its is your searching data here")
    : alert(val + " Its is your searching data");
}
