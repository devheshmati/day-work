// get container and cards
const container = document.querySelector(".container");
const cards = document.querySelectorAll(".card");
// create observer for card
const cardObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((item) => {
      item.target.classList.toggle("show", item.isIntersecting);
    });
  },
  {
    rootMargin: "-100px",
  },
);
// set observer for each card
cards.forEach((item) => {
  cardObserver.observe(item);
});
// create observer for last card
const lastCardObserver = new IntersectionObserver((entries) => {
  if (entries[0].isIntersecting) {
    createCards();
    lastCardObserver.observe(entries[0].target);
    lastCardObserver.observe(document.querySelector(".card:last-child"));
  } else {
    return;
  }
});

// set observer for last card
lastCardObserver.observe(document.querySelector(".card:last-child"));
// create function for creating card
const createCards = () => {
  for (let i = 0; i < 10; i++) {
    const createCardEle = document.createElement("div");
    createCardEle.textContent = "This is new Card!";
    createCardEle.classList.add("card");
    cardObserver.observe(createCardEle);
    container.append(createCardEle);
  }
};
