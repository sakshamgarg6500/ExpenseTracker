import { useLayoutEffect } from "react";
import { Text } from "react-native";

function ManageExpense({ route, navigation }) {
	const editedExpenseId = route.params?.expenseId;
	const isEditing = !!editedExpenseId; //converts into boolean value

	useLayoutEffect(() => {
		navigation.setOptions({
			title: isEditing ? "Edit Expense" : "Add Expense",
		});
	}, [navigation, isEditing]);

	return <Text>Manage Expense Screen</Text>;
}

export default ManageExpense;
