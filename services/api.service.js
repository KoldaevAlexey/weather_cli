import https from "https";
import { getKeyValue, TOKEN_DICTIONARY } from "./storage.service";

const getWeather = async (city) => {
    //const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}`;

    const token = await getKeyValue(TOKEN_DICTIONARY.token);
    if (!token) {
        throw new Error(
            "Не задан ключ к API, задайте его через команду -t [API_KEY]"
        );
    }

    const url = new URL("https://api.openweathermap.org/data/2.5/weather");
    url.searchParams.append("q", city);
    url.searchParams.append("appid", token);
    url.searchParams.append("lang", "ru");
    url.searchParams.append("usits", "metrics");

    https.get();
};
