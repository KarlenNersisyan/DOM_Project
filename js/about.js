let modal = document.getElementById("myModal");
let modalImg = document.querySelector("#img01");
let img = document.getElementById("myImg");

let captionText = document.getElementById("caption");
img.onclick = function () {
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
};

let span = document.getElementsByClassName("close")[0];

span.onclick = function () {
  modal.style.display = "none";
};
