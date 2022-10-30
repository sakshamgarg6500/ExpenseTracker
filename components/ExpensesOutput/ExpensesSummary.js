import { View, Text, StyleSheet } from "react-native";
import { GlobalStyles } from "../../constants/styles";

function ExpensesSummary({ expenses, periodName }) {
	const expensesSum = expenses.reduce((sum, expense) => {
		return sum + expense.amount;
	}, 0);
	//reduce is a method on an array which reduces multiple values in an array to a single value and then we have to mention the starting value too

	return (
		<View style={styles.container}>
			<Text style={styles.period}>{periodName}</Text>
			<Text style={styles.sum}>$ {expensesSum.toFixed(2)}</Text>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		padding: 13,
		marginBottom: 6,
		backgroundColor: GlobalStyles.colors.primary700,
		borderRadius: 6,
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
	},
	period: {
		fontSize: 15,
		color: "white",
	},
	sum: {
		fontSize: 16,
		fontWeight: "bold",
		color: GlobalStyles.colors.primary50,
	},
});

export default ExpensesSummary;
