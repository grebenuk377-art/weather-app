const headerLocation = document.getElementById("header-location");
const headerSearch = document.getElementById("header-search");

headerLocation.onclick = () => {
    headerSearch.classList.add("header-search-opened");
};