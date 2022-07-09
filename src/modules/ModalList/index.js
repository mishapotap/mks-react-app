import React from "react";
import { View, StyleSheet, Image, Text } from "react-native";
import { COLORS } from "../../../constants";

const ModuleList = ({ data }) => {
	return (
		<View style={styles.wrapper}>
            {data.title && <Text style={styles.title}>{data.title}</Text>}
            {data.content.map((item) => (
                <View key={item.id} style={styles.item}>
                    <Text style={styles.number}>{item.id}.</Text>
                    <Text style={styles.name}>{item.name}</Text>
                </View>
            ))}
		</View>
	);
};

const styles = StyleSheet.create({
    wrapper: {
        marginBottom: 25,
    },
    title: {
        marginBottom: 25,
        // text
        fontWeight: '700',
        fontSize: 15,
        lineHeight: 34,
        letterSpacing: 1,
        color: COLORS.white,
    },
    item: {
        flexDirection: "row",
        // justifyContent: "space-between",
    },
    number: {
        flex: 1,
         // text
         fontWeight: '700',
         fontSize: 13,
         lineHeight: 25,
         letterSpacing: 0.9,
         color: "#3C70BE",
    },
    name: {
        flex: 15,
        // text
        fontWeight: '400',
        fontSize: 13,
        lineHeight: 25,
        letterSpacing: 0.9,
        color: COLORS.white,
    },
});

export default {
	name: "ModuleList",
	Component: ModuleList,
};
