import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

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

export const weatherApi = createApi({
    reducerPath: "weatherApi",
    baseQuery: fetchBaseQuery({
        baseUrl: "https://api.openweathermap.org/data/2.5/",
    }),
    endpoints: (builder) => ({
        getWeatherByCity: builder.query<WeatherData, string>({
            query: (name) =>
                `forecast?q=${name}&appid=bad46dfee1ae1125ec4faf31e63449de&units=metric`,
        }),
    }),
});
export const { useGetWeatherByCityQuery } = weatherApi;
