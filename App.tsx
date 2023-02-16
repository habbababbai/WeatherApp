import { StyleSheet, Text, View } from "react-native";
import Searchbar from "./src/components/searchbar/searchbar";
import { Provider } from "react-redux";
import { store } from "./src/redux/store";
import Chart from "./src/components/chart/chart";


export default function App() {
    return (
        <Provider store={store}>
            <View style={styles.container}>
                <Searchbar></Searchbar>
                <Chart></Chart>
            </View>
        </Provider>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
});
