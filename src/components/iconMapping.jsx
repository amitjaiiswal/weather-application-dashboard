// iconMapping.js
import rainIcon from "../assets/rain_240071.png";
import clearIcon from "../assets/moon_9231687.png";
import clearDayIcon from "../assets/sunny_136723.png";
import clearNightIcon from "../assets/cloudy-night_178339.png";
import sleetIcon from "../assets/sleet_3222742.png";
import snowIcon from "../assets/snowy_6566033.png";
import windIcon from "../assets/wind_300742.png";
import fogIcon from "../assets/mist_13882643.png";
import cloudyIcon from "../assets/summer-rain_136720.png";
import partlyCloudyDayIcon from "../assets/morning-rain_136714.png";
import partlyCloudyNightIcon from "../assets/cloudy-night_10991183.png";
import hailIcon from "../assets/hail_178341.png";
import thunderstormIcon from "../assets/storm_1946170.png";
import tornadoIcon from "../assets/tornado_1779931.png";

export const iconMapping = {
  rain: rainIcon,
  clear: clearIcon,
  "clear-day": clearDayIcon,
  "clear-night": clearNightIcon,
  sleet: sleetIcon,
  snow: snowIcon,
  wind: windIcon,
  fog: fogIcon,
  cloudy: cloudyIcon,
  "partly-cloudy-day": partlyCloudyDayIcon,
  "partly-cloudy-night": partlyCloudyNightIcon,
  hail: hailIcon,
  thunderstorm: thunderstormIcon,
  tornado: tornadoIcon,
};

// utils.js
export const convertFToC = (tempF) => ((tempF - 32) * 5) / 9;
