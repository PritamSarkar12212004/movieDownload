const hamBar = document.querySelector(".hamBar");
const SideBar = document.querySelector(".SideBar");
const itemsHi = document.querySelector(".itemsHi");

const pcLOgbtn = document.querySelector(".pcLOgbtn");
const pcLogin = document.querySelector(".pcLogin");

flag = true;
hamBar.addEventListener("click", () => {
  if (flag == true) {
    SideBar.classList.remove("hidden");
    itemsHi.classList.add("hidden");
    flag = false;
  } else {
    SideBar.classList.add("hidden");
    itemsHi.classList.remove("hidden");
    flag = true;
  }
});

val = true;
pcLOgbtn.addEventListener("click", () => {
  if (val == true) {
    pcLogin.classList.remove("hidden")
    val = false;
  } else {
    pcLogin.classList.add("hidden")

    val = true;
  }
});
