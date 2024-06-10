const hamBar = document.querySelector(".hamBar");
const SideBar = document.querySelector(".SideBar");
const showmovie = document.querySelector(".showmovie");

flag = true;
hamBar.addEventListener("click", () => {
  if (flag == true) {
    SideBar.classList.remove("hidden");
    showmovie.classList.add("hidden");
    flag = false;
  } else {
    SideBar.classList.add("hidden");
    showmovie.classList.remove("hidden");
    flag = true;
  }
});

//  check email and password
