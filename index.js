const slider = document.getElementById("slider");
const carouselBtn = document.querySelector(".carousel-buttons")
const btnNext = document.querySelector(".btn-next")
const btnPrev = document.querySelector(".btn-prev")

//Getting Data
const renderMovielist = (data) => {
  let output = "";
  data
    .sort((a, b) => b.id - a.id)
    .forEach((datas) => {
      output += `
    <div class="carousel">
    <div class="carousel__item">
      <li class=data-id=${datas.id}>
        <img src="${datas.imgUrl}">
        <h3 class="btn--edit" id="${datas.id}">${datas.name}</h3>
        <p class="btn--delete" id="${datas.id}">${datas.outlineInfo}</p>
      </li>
      </div>
    </div>
    `;
    });
  slider.innerHTML = output;
  console.log(data);
};

// Get - Read the movielist
// Method: Get
const URL = "http://localhost:4232/movies";

fetch(URL)
  .then((res) => res.json())
  .then((data) => renderMovielist(data));

slider.append((e) => {
  e.preventDefault();
  fetch(URL, {
    method: "POST",
    body: JSON.stringify({
      completed: true,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  });
})

// Slider window Scroll Right
let scrollAmount = 0;
let scrollMax = slider.clientWidth

btnNext.addEventListener('click', function () {
  slider.scrollTo({
    left: Math.max(scrollAmount += 500, scrollMax),
    behavior: 'smooth'
  })
})

// Slider window Scroll left
btnPrev.addEventListener('click', function () {
  slider.scrollTo({
    left: Math.min(scrollAmount -= 500, scrollMax),
    behavior: 'smooth'
  })
})

