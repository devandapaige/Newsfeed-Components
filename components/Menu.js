// This is the data we will be using, study it but don't change anything, yet.

let menuItems = [
  "Students",
  "Faculty",
  "What's New",
  "Tech Trends",
  "Music",
  "Log Out",
];
/* 
  Step 1: Write a component called 'menuMaker' to create a menu like the markup below:

  <div class="menu">
    <ul>
      {each menu item as an <li>}
    </ul>
  </div> */
const menuMaker = (array) => {
  const button = document.querySelector(".menu-button");
  const menu = document.createElement("div");
  menu.classList.add("menu");
  const ul = document.createElement("ul");
  array.forEach((element) => {
    const index = document.createElement("li");
    index.textContent = element;
    ul.appendChild(index);
  });
  menu.appendChild(ul);
  button.addEventListener("click", () => {
    menu.classList.toggle("menu--open");
  });
  return menu;
};
const header = document.querySelector(".header");
header.appendChild(menuMaker(menuItems));
// Stretch Goal: Animation for menu image:
document.querySelector(".menu-button").addEventListener("mouseover", (e) => {
  e.target.style =
    "transform: skew(20deg, 10deg) scale(1.2);  transition: 0.5s ease-in;";
});
document.querySelector(".menu-button").addEventListener("mouseout", (e) => {
  e.target.style = "";
});
// The 'menuMaker' takes an array of menu items as its only argument.

/* Step 2: Inside the function, iterate over the array creating a list item <li> element for each item in the array. ✅
  Add those items to the <ul> ✅

  Step 3: Still inside your function, select from the DOM the menu button (the element with a class of 'menu-button'). ✅

  Step 4: Add a click event listener to the menu button. When clicked it should toggle the class 'menu--open' on div.menu (your div with a 'menu' class). ✅

  Step 5: Don't forget to return your div.menu. ✅

  Step 6: Use 'menuMaker' to create a menu using the 'menuItems' array, and append the returned menu to the header. ✅
*/
