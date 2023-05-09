const myBtn = document.querySelectorAll(".btn");
myBtn.addEventListener("click", function (event) {
  this.target.toggle("");
});
