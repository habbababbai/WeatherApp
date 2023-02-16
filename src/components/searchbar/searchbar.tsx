import { useState } from "react";
import {
    View,
    TextInput,
    Button,
    Text,
    Keyboard,
    StyleSheet,
} from "react-native";
import { useAppSelector, useAppDispatch } from "../../redux/hooks";
import { changeVal } from "../../features/searchbarSlice";

//  Searchbar component
//  it has a string state, that on button click is pushed to redux store
//  and later is fetched by the API
export default function Searchbar() {
    const [input, setInput] = useState("");
    const dispatch = useAppDispatch();

    return (
        <View>
            <TextInput
                placeholder="Type city here..."
                value={input}
                onChangeText={(value) => setInput(value)}
                style={styles.input}
            ></TextInput>
            <Button
                title="Search"
                onPress={() => {
                    dispatch(changeVal(input));
                    Keyboard.dismiss();
                }}
            ></Button>
        </View>
    );
}

const styles = StyleSheet.create({
    input: {
        borderRadius: 10,
        borderWidth: 0.5,
        height: 25,
        width: 200,
        textAlign: "center",
    },
});
