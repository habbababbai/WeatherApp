import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

//  Few interafces neeeded for taking API call JSON file
interface WeatherData {
    city: City;
    list: HourData[];
}
interface HourData {
    main: Temperatures,
    dt_txt: string,
}
interface Temperatures {
    temp: number;
}
interface City {
    country: string;
    name: string;
}

//  I've decided to use RTK Query as this approach seems most modern for API fetching

export const weatherApi = createApi({
    reducerPath: "weatherApi",
    baseQuery: fetchBaseQuery({
        //  Base url is declared
        //  Below we can easily make new endpoints and use them in app
        baseUrl: "https://api.openweathermap.org/data/2.5/",
    }),
    endpoints: (builder) => ({
        //  This endpoint gets city's weather forecast by taking it's name and asking API for data
        getWeatherByCity: builder.query<WeatherData, string>({
            query: (name) =>
                `forecast?q=${name}&appid=bad46dfee1ae1125ec4faf31e63449de&units=metric`,
        }),
    }),
});
export const { useGetWeatherByCityQuery } = weatherApi;
