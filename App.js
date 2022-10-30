import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";

//IMPORTING COMPONENTS
import ManageExpense from "./screens/ManageExpense";
import RecentExpenses from "./screens/RecentExpenses";
import AllExpenses from "./screens/AllExpenses";

import { GlobalStyles } from "./constants/styles";

const Stack = createNativeStackNavigator(); //this object gives us access to two components
//1. the navigator component
//2. a component to register screens
const Bottomtabs = createBottomTabNavigator();

function ExpensesOverview() {
	return (
		<Bottomtabs.Navigator
			screenOptions={{
				headerStyle: { backgroundColor: GlobalStyles.colors.primary700 },
				headerTintColor: "white",
				tabBarStyle: { backgroundColor: GlobalStyles.colors.primary700 },
				tabBarActiveTintColor: GlobalStyles.colors.accent500,
			}}
		>
			<Bottomtabs.Screen
				name="RecentExpenses"
				component={RecentExpenses}
				options={{
					title: "Recent Expenses",
					tabBarLabel: "Recent Expenses",
					tabBarIcon: ({ color, size }) => (
						<Ionicons name="hourglass" size={size} color={color} />
					),
				}}
			/>
			<Bottomtabs.Screen
				name="AllExpenses"
				component={AllExpenses}
				options={{
					title: "All Expenses",
					tabBarLabel: "All Expenses",
					tabBarIcon: ({ color, size }) => (
						<Ionicons name="calendar" size={size} color={color} />
					),
				}}
			/>
		</Bottomtabs.Navigator>
	);
}

export default function App() {
	return (
		<>
			<StatusBar style="auto" />
			<NavigationContainer>
				<Stack.Navigator>
					{/* the top screen will be loaded first when the app starts */}
					<Stack.Screen
						name="ExpensesOverview"
						component={ExpensesOverview}
						options={{ headerShown: false }}
						//this header does not need to be shown
					/>
					<Stack.Screen name="ManageExpense" component={ManageExpense} />
				</Stack.Navigator>
			</NavigationContainer>
		</>
	);
}
