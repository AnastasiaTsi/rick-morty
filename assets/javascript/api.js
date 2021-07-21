const getCharacters = (action) => {
  var pageNumber = 1;

  switch (action) {
    case "next":
      pageNumber++;
      break;
    case "back":
      pageNumber === 1 ? 1 : pageNumber - 1;
      break;
    default:
      pageNumber = 1;
      break;
  }

  console.log(pageNumber);
  const apiUrl = `https://rickandmortyapi.com/api/character?page=${pageNumber}`;

  fetch(apiUrl)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      // Work with JSON data here
      console.log(data);

      var characters = data.results;

      characters.map((character, index) => {
        const div = document.createElement("div");

        div.className = "card";
        div.style.cssText = "flex-direction: row;";
        div.setAttribute("id", `card-${index}`);

        div.innerHTML = `
          <div>
            <img src=${character.image} class="image"/>
          </div>
          <div>
            <h2 class="card-title">${character.name}</h2>
            <div style="display: flex;">
              <span class="status-${character.status}"></span>
              <p class="card-status">${character.status}</p>
            </div>
          </div>
        `;

        div.onclick = () => {
          // this.parentElement.removeChild(this);
          console.log("im clicked");
        };

        document.getElementById("content").appendChild(div);
      });

      const pages = document.createElement("div");
      pages.innerHTML = `${pageNumber} of ${data.info.pages}`;

      document.getElementById("pages").appendChild(pages);
      // daysElement.textContent = pageNumber;
    })
    .catch((err) => {
      // Do something for an error here
    });
};

getCharacters((action = ""));

var json = {
  items: [
    {
      title: "sample 1",
      author: "author 1",
    },
    {
      title: "sample 2",
      author: "author 2",
    },
  ],
};
