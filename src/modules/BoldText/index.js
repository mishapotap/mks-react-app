import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { COLORS } from "../../../constants";

const BoldText = ({ data: text }) => {
	return (
		<View style={{marginBottom: 25}}>
			<Text style={styles.text}>{text}</Text>
		</View>
	);
};

const styles = StyleSheet.create({
	text: {
		// text
		fontWeight: "700",
		fontSize: 15,
		lineHeight: 34,
		letterSpacing: 1,
		color: COLORS.white
	}
});

export default {
	name: "BoldText",
	Component: BoldText,
};
