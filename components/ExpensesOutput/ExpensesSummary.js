import { View, Text } from "react-native";

function ExpensesSummary({ expenses, periodName }) {
	const expensesSum = expenses.reduce((sum, expense) => {
		return sum + expense.amount;
	}, 0);
	//reduce is a method on an array which reduces multiple values in an array to a single value and then we have to mention the starting value too

	return (
		<View>
			<Text>{periodName}</Text>
			<Text>$ {expensesSum.toFixed(2)}</Text>
		</View>
	);
}

export default ExpensesSummary;
