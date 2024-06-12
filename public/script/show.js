const hamBar = document.querySelector(".hamBar");
const SideBar = document.querySelector(".SideBar");
const showmovie = document.querySelector(".showmovie");
const sideImg=document.querySelector(".sideImg")
const footer=document.querySelector(".footer")


flag = true;
hamBar.addEventListener("click", () => {
  if (flag == true) {
    SideBar.classList.remove("hidden");
    showmovie.classList.add("hidden");
    footer.classList.add("hidden");


    
    flag = false;
  } else {


    SideBar.classList.add("hidden");
    showmovie.classList.remove("hidden");
    footer.classList.remove("hidden");

    flag = true;
  }
});

//  check email and password
