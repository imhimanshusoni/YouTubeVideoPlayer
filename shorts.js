const profile = document.getElementsByClassName("profile");
const menuContainer = document.getElementsByClassName("menu-container");

let menuOpen = false;
document.body.addEventListener("click", (e) => {
  if (e.target.className == "floating-a") {
    menuContainer[0].style.display = "block";
  } else if (e.target === profile[0] && menuOpen == false) {
    menuContainer[0].style.display = "block";
    menuOpen = true;
  } else if (menuOpen == true) {
    menuContainer[0].style.display = "none";
    menuOpen = false;
  }
});

// var scrollPos = 0;
let id = 0;
const len = 4;
// const peacock = document.getElementById("shorts-video-player");
// peacock.addEventListener("wheel", foo);

function foo(e) {
  let dir = e.deltaY;
  if (dir > 0) {
    id += 1;
  } else if (dir < 0) {
    id -= 1;
  }
  id = id % len;
  console.log(id);

  document.getElementById(`short-${id}`).scrollIntoView({ behavior: "smooth" });
}
//   if (document.body.getBoundingClientRect().top > scrollPos) {
//     console.log("UP");
//     id = id + 1;
//     peacock.removeEventListener();
//   } else {
//     console.log("DOWN");
//     id = id - 1;
//   }
//   console.log(id);

//   scrollPos = document.body.getBoundingClientRect().top;
//   console.log(scrollPos);
// });

// peacock.addEventListener("scrollend", () => {});
