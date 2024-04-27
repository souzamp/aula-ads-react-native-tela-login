import React from "react";
import { View, Text } from "react-native";

export default function Link() {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text style={{ fontSize: 24, fontWeight: "bold"}}>Listar os links</Text>
        </View>
    );
}