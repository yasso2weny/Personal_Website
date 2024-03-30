//================
// Navigation Bar
//================

const openNavBar = document.querySelector("#burger-img");
const closeNavBar = document.querySelector("#close-img");
const links = document.querySelector(".mbl-container");

closeNavBar.addEventListener("click", function () {
  links.classList.add("hide-links");
});

openNavBar.addEventListener("click", function () {
  links.classList.remove("hide-links");
});

//================
// Skills Section
//================

const about = document.querySelector(".about");
const btns = document.querySelectorAll(".tab-btn");
const articles = document.querySelectorAll(".content");
about.addEventListener("click", function (e) {
  const id = e.target.dataset.id;
  if (id) {
    // remove selected from other buttons
    btns.forEach(function (btn) {
      btn.classList.remove("active");
    });
    e.target.classList.add("active");
    // hide other articles
    articles.forEach(function (article) {
      article.classList.remove("active");
    });
    const element = document.getElementById(id);
    element.classList.add("active");
  }
});

//================
// Project Section
//================

// local reviews data
const reviews = [
  {
    id: 1,
    prjtitle: "Tip Calculator",
    img: "images/project1.jpg",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis ab nam aliquid aperiam atque minima illum nesciunt neque dignissimos voluptate!",
  },
  {
    id: 2,
    prjtitle: "Product Card",
    img: "images/project2.jpg",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis ab nam aliquid aperiam atque minima illum nesciunt neque dignissimos voluptate!",
  },
  {
    id: 3,
    prjtitle: "Newsletter Sign Up",
    img: "images/project3.jpg",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis ab nam aliquid aperiam atque minima illum nesciunt neque dignissimos voluptate!",
  },
  {
    id: 4,
    prjtitle: "Pricing Component",
    img: "images/project4.jpg",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis ab nam aliquid aperiam atque minima illum nesciunt neque dignissimos voluptate!",
  },
  {
    id: 5,
    prjtitle: "FAQ Accordion",
    img: "images/project5.jpg",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis ab nam aliquid aperiam atque minima illum nesciunt neque dignissimos voluptate!",
  },
  {
    id: 6,
    prjtitle: "Social Media Dashboard",
    img: "images/project6.jpg",
    text: " A dashboard design that displays social media metrics at a glance. It includes charts, follower counts, and engagement statistics. This project highlights my ability to work with data visualization libraries and create informative, visually appealing interfaces that are both functional and user-friendly.",
  },
];
// select items
const img = document.getElementById("prjimg");
const author = document.getElementById("prjtitle");

const info = document.getElementById("info");

const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");

// set starting item
let currentItem = 0;

// load initial item
window.addEventListener("DOMContentLoaded", function () {
  const item = reviews[currentItem];
  img.src = item.img;
  author.textContent = item.prjtitle;

  info.textContent = item.text;
});

// show person based on item
function showPerson(person) {
  const item = reviews[person];
  img.src = item.img;
  author.textContent = item.prjtitle;

  info.textContent = item.text;
}
// show next person
nextBtn.addEventListener("click", function () {
  currentItem++;
  if (currentItem > reviews.length - 1) {
    currentItem = 0;
  }
  showPerson(currentItem);
});
// show prev person
prevBtn.addEventListener("click", function () {
  currentItem--;
  if (currentItem < 0) {
    currentItem = reviews.length - 1;
  }
  showPerson(currentItem);
});
