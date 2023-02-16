import { View, Text } from "react-native";
import { useAppSelector, useAppDispatch } from "../../redux/hooks";
import { useGetWeatherByCityQuery } from "../features/fetchWeather";

export default function Chart() {
    const cityName = useAppSelector((state) => state.searchbar.value);
    const { data, error, isLoading } = useGetWeatherByCityQuery(cityName);

    if (!data || !cityName) return <Text>Please input city's name above</Text>;

    if (isLoading) return <Text>...Loading...</Text>;

    console.log(data);

    if (cityName && data) {
        return (
            <View>
                <Text>
                    {data.city.name} {data.city.country}
                </Text>
                <View>
                    {data.list.map((item) => {
                        return (
                            <Text key={item.dt_txt}>
                                Hour: {item.dt_txt} Temperature:{" "}
                                {item.main.temp}℃
                            </Text>
                        );
                    })}
                </View>
            </View>
        );
    }
}
