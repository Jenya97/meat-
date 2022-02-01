$(".right_menu").click(function () {
  $(".second_submenu").toggle();
});

let submenu = document.querySelector(".submenu");
let menu_item = document.querySelector(".category_menu");
let menu_btn = document.querySelector(".category_menu_btn");
function closeMenu(e) {
  e.preventDefault();
  if (submenu.style.display === "none") {
    submenu.style.display = "flex";
  } else {
    submenu.style.display = "none";
  }
}

menu_item.addEventListener("click", closeMenu);
menu_btn.addEventListener("click", closeMenu);
$(".burger_btn").on("click", () => {
  $(".burger_menu").toggle();
});
