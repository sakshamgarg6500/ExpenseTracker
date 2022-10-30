import { View, StyleSheet } from "react-native";
import { GlobalStyles } from "../../constants/styles";

import ExpensesList from "./ExpensesList";
import ExpensesSummary from "./ExpensesSummary";

function ExpensesOutput({ expenses, expensesPeriod }) {
	const DUMMY_EXPENSES = [
		{
			id: "e1",
			description: "A pair of shoes",
			amount: 49.99,
			date: new Date("2022-02-05"),
		},
		{
			id: "e2",
			description: "A pair of trousers",
			amount: 19.99,
			date: new Date("2021-05-13"),
		},
		{
			id: "e3",
			description: "Charger",
			amount: 8,
			date: new Date("2022-07-08"),
		},
		{
			id: "e4",
			description: "Dinner",
			amount: 14,
			date: new Date("2022-10-29"),
		},
		{
			id: "e5",
			description: "Bottle",
			amount: 6,
			date: new Date("2022-05-19"),
		},
	];

	return (
		<View style={styles.container}>
			<ExpensesSummary expenses={DUMMY_EXPENSES} periodName={expensesPeriod} />
			<ExpensesList expenses={DUMMY_EXPENSES} />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		paddingHorizontal: 24,
		paddingTop: 24,
		paddingBottom: 0,
		flex: 1, //to take all the available space
	},
});

export default ExpensesOutput;
