import "./styles.css";

const searchBtn = document.getElementById("start-search");

const listSearchCities = data => {
  const searchContainer = document.createElement("div");
  searchContainer.className = "search-container";
  const listMenu = document.createElement("ul");
  searchContainer.append(listMenu);
  data.map(el => {
    const listItem = document.createElement("li");
    listItem.append(el["matching_full_name"]);
    listMenu.append(listItem);
    return null;
  });
  document.querySelector("main").append(searchContainer);
};

const searchForCity = event => {
  event.preventDefault();
  let cityName = document.getElementById("city-name").value;
  fetch(`https://api.teleport.org/api/cities/?search=${cityName}`)
    .then(function(response) {
      return response.json();
    })
    .then(function(myJson) {
      const data = myJson["_embedded"]["city:search-results"];
      console.log(data);

      listSearchCities(data);
    });
};
searchBtn.onclick = searchForCity;
