const contentTemp = document.getElementById("content-temp");
const contentDate = document.getElementById("content-date");
const image = document.getElementById("image");
const date = new Date();

const getWeather = async () => {
    const response = await fetch(
        "https://api.open-meteo.com/v1/forecast?latitude=50.088&longitude=14.4208&current=apparent_temperature,precipitation,rain,showers,snowfall,relative_humidity_2m,is_day"
    );
    const data = await response.json();
    const temp = data.current.apparent_temperature;
    const precipitation = data.current.precipitation;

    contentTemp.innerText = Math.round(temp) + "°";
    contentDate.innerText = `Today, ${date.getDay()} ${date.toLocaleString("default", { month: "long" })}`;
    if (precipitation > 0.5) {
        image.setAttribute("src", "/images/weather.png");
    } else {
        image.setAttribute("src", "/images/sun2.svg");
    }

};

getWeather()


