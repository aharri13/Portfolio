import imdb from "../../assets/IMDb_App.png";
import weather from "../../assets/Weather_App.png";
import todo from "../../assets/ToDo_App.png";

export const projectData = [
  {
    img: `${todo}`,
    title: "To-Do List Application",
    description:
      "A To-Do List created in React using Chakra-UI. Tasks can be created and are added to the Incomplete section, there they can be deleted or can be checked and moved to the Complete Section. ",
      link: "https://aharri13.github.io/ToDoListApp/"
  },
  {
    img: `${weather}`,
    title: "Weather Application",
    description:
      "A simple Weather Application that utilizes the most basic data from OpenWeatherApi. It finds the weather based on the location searched and provides the date, time, and all other relevant weather data.",
      link: "https://aharri13.github.io/WeatherApp/"
  },
  {
    img: `${imdb}`,
    title: "IMDb Clone Application",
    description:
      "A clone of the current IMDb website where the data is pulled utilizing the TMDb Api. The Application provides data like Upcoming Movies, Top Rated Movies, as well as Trending movies. Updates are still in progress to include all of the functionality that the IMDb website provides.",
      link: "https://aharri13.github.io/IMDb_Clone/"
  },
];
