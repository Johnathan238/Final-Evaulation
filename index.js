const slider = document.getElementById("slider");

const renderTodolist = (data) => {
  let output = "";
  data
    .sort((a, b) => b.id - a.id)
    .forEach((datas) => {
      output += `
    <div id="carousel">
      <li class=data-id=${datas.id}>
        <img src="${datas.imgUrl}">
        <h3 class="btn--edit" id="${datas.id}">${datas.name}</h3>
        <p class="btn--delete" id="${datas.id}">${datas.outlineInfo}</p>
      </li>
    </div>
    `;
    });
  slider.innerHTML = output;
  console.log(data);
};

const URL = "http://localhost:4232/movies";

fetch(URL)
  .then((res) => res.json())
  .then((data) => renderTodolist(data));

// fetch(URL).then((data) => {
//     console.log(data.json());
// return data.json();
// })
//     .then((jsondata) => {
// console.log(jsondata[0].url);
//now using map method we will get all url
//         jsondata.map((val) => {
//             console.log(val.url);
//             key = val.id;
//             let img = document.createElement("img");
//now we will call 2nd api for images
//             img.src = `http://localhost:4232/movies${key}`;
//             slider.appendChild(img);
//         })
//     });

// const getMovies = () => {
//   fetch(`${URL}/`)
//     .then(response => response.json())
//     .then(data => {
//       data.results.forEach(element => {
//         createElements(element)
//       });
//     })
//   }

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
});
