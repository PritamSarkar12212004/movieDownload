const hamBar = document.querySelector(".hamBar");
const SideBar = document.querySelector(".SideBar");
const itemsHi = document.querySelector(".itemsHi");
const pcLOgbtn = document.querySelector(".pcLOgbtn");
const pcLogin = document.querySelector(".pcLogin");
const sideImg=document.querySelector(".sideImg")
const footer=document.querySelector(".footer")

flag = true;
hamBar.addEventListener("click", () => {
  if (flag == true) {
    SideBar.classList.remove("hidden");
    sideImg.classList.add("hidden");
    itemsHi.classList.add("hidden");
    footer.classList.add("hidden");
    flag = false;
  } else {
    SideBar.classList.add("hidden");
    sideImg.classList.remove("hidden");
    itemsHi.classList.remove("hidden");
    footer.classList.remove("hidden");

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
