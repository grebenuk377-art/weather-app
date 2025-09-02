const headerLocation = document.getElementById("header-location");
const headerSearch = document.getElementById("header-search");

headerLocation.onclick = () => {
    headerSearch.classList.add("header-search-opened");
};

document.onclick = ({ target }) => {
  if (!headerSearch.contains(target) && !headerLocation.contains(target)) {
    headerSearch.classList.remove("header-search-opened");
  }
};
