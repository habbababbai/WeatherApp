import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

interface WeatherData {
    data: HourData[];
}
interface HourData {
    temp: string;
    dt_txt: string;
}

export const weatherApi = createApi({
    reducerPath: "weatherApi",
    baseQuery: fetchBaseQuery({ baseUrl: "api.openweathermap.org/data/2.5/" }),
    endpoints: (builder) => ({
        getWeatherByCity: builder.query<WeatherData, string>({
            query: (name) =>
                `forecast?=q${name}&appid=${process.env.API_KEY}&units=metric`,
        }),
    }),
});
export const { useGetWeatherByCityQuery } = weatherApi;
