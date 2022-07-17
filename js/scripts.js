const myModal = new bootstrap.Modal(document.getElementById("loadStateModal"));
const loader = document.querySelector("#loadingIndicator");
myModal.show();
document.onreadystatechange = () => {
  if (document.readyState === "complete") {
    myModal.hide();
    setTimeout(() => {
      myModal.hide();
    }, "500");
  }
};
