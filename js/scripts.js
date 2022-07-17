const sidebarToggle = document.body.querySelector("#sidebarToggle");
const myModal = new bootstrap.Modal(document.getElementById("loadStateModal"));
const loader = document.querySelector("#loadingIndicator");
myModal.show();

// Toggle the side navigation
if (sidebarToggle) {
  //Uncomment Below to persist sidebar toggle between refreshes
  if (localStorage.getItem("sb|sidebar-toggle") === "true") {
    document.body.classList.toggle("sb-sidenav-toggled");
  }
  sidebarToggle.addEventListener("click", (event) => {
    //event.preventDefault();
    document.body.classList.toggle("sb-sidenav-toggled");
    localStorage.setItem(
      "sb|sidebar-toggle",
      document.body.classList.contains("sb-sidenav-toggled")
    );
  });
}

window.addEventListener("load", (event) => {
  myModal.hide();
});
