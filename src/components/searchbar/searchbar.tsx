import { View, TextInput, Button } from "react-native";

export default function Searchbar() {
    return (
        <View>
            <TextInput placeholder="Type city here..."></TextInput>
            <Button title="Search"></Button>
        </View>
    );
}
