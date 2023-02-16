import { View, Text, StyleSheet } from "react-native";
import { BarChart } from "react-native-chart-kit";
import { useAppSelector, useAppDispatch } from "../../redux/hooks";
import { useGetWeatherByCityQuery } from "../features/fetchWeather";

export default function Chart() {
    const cityName = useAppSelector((state) => state.searchbar.value);
    const { data, error, isFetching, isLoading } =
        useGetWeatherByCityQuery(cityName);

    // Initially there is no data to be shown
    //  So the app returns empty Text
    if (!data) return <Text></Text>;

    // In case of empty string put in input message is shown
    if (cityName === "") return <Text>Please enter valid City name</Text>;

    //  In case of API throwing error back message saying that city is not found
    //  is shown
    if (error) return <Text>City not found</Text>;

    //  While API is being fetched Loading info is shown
    if (isFetching || isLoading) return <Text>...Loading...</Text>;

    //  Chart config
    const chartConfig = {
        color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
        strokeWidth: 1, // optional, default 3
        barPercentage: 0.1,
        useShadowColorFromDataset: false, // optional
    };

    //  Data populating chart
    const chartData = {
        labels: [
            //  For labels I've decided to take every forth label
            //  to clear view a bit
            ...data.list
                .filter((element, index) => {
                    return index % 4 === 0;
                })
                //  Then these are split and spliced so only hour shows
                .map((item) => {
                    return item.dt_txt.split(" ")[1].slice(0, 2);
                }),
        ],
        datasets: [
            {
                //  Data set containing every temperature from API
                data: [...data.list.map((item) => item.main.temp)],
            },
        ],
    };

    if (cityName && data.city.name) {
        return (
            <View>
                <Text style={styles.title}>
                    {data.city.name} {data.city.country}
                </Text>
                <View>
                    <BarChart
                        chartConfig={chartConfig}
                        yAxisLabel=""
                        yAxisSuffix="℃"
                        data={chartData}
                        width={400}
                        height={500}
                    ></BarChart>
                </View>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    title: {
        textAlign: "center",
        fontWeight: "bold",
        fontSize: 24,
        paddingBottom: 20,
        paddingTop: 20,
    },
});
