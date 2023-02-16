import { useState } from "react";
import { View, TextInput, Button, Text } from "react-native";
import { useAppSelector, useAppDispatch } from "../../redux/hooks";
import { changeVal } from "../features/searchbarSlice";

export default function Searchbar() {
    const [input, setInput] = useState("");
    const dispatch = useAppDispatch();

    return (
        <View>
            <TextInput
                placeholder="Type city here..."
                value={input}
                onChangeText={(value) => setInput(value)}
            ></TextInput>
            <Button
                title="Search"
                onPress={() => dispatch(changeVal(input))}
            ></Button>
        </View>
    );
}
