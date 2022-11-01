import { useNavigation } from "@react-navigation/native";
import { Pressable, Text, View, StyleSheet } from "react-native";
import { GlobalStyles } from "../../constants/styles";
import { getFormattedDate } from "../../util/date";

function ExpenseItem({ id, description, amount, date }) {
	const navigation = useNavigation();

	function expensePressHandler() {
		navigation.navigate("ManageExpense", {
			expenseId: id,
		});
	}

	return (
		<Pressable
			onPress={expensePressHandler}
			style={({ pressed }) => pressed && styles.pressed}
		>
			<View style={styles.expenseItem}>
				<View>
					<Text style={[styles.textBase, styles.description]}>
						{description}
					</Text>
					<Text style={styles.textBase}>{getFormattedDate(date)}</Text>
				</View>

				<View style={styles.amountContainer}>
					<Text style={styles.amount}>${amount.toFixed(2)}</Text>
				</View>
			</View>
		</Pressable>
	);
}

const styles = StyleSheet.create({
	expenseItem: {
		padding: 10,
		marginVertical: 10,
		marginHorizontal: 5,
		backgroundColor: GlobalStyles.colors.primary50,
		flexDirection: "row",
		justifyContent: "space-between",
		borderRadius: 6,
		elevation: 3,
		shadowColor: GlobalStyles.colors.gray500,
		shadowRadius: 4,
		textShadowOffset: { width: 1, height: 1 },
		shadowOpacity: 0.15,
	},
	textBase: {
		// color: GlobalStyles.colors.primary50,
	},
	description: {
		fontSize: 14,
		marginBottom: 6,
		// fontWeight: "bold",
	},
	amountContainer: {
		paddingHorizontal: 12,
		paddingVertical: 4,
		backgroundColor: "white",
		justifyContent: "center",
		alignItems: "center",
		borderRadius: 5,
		minWidth: 80,
	},
	amount: {
		color: GlobalStyles.colors.primary500,
		fontWeight: "bold",
	},
	pressed: {
		opacity: 0.75,
	},
});

export default ExpenseItem;
