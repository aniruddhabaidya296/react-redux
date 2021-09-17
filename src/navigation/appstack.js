import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { ContactsScreen, HomeScreen,UsersScreen } from "../screens";

const { Navigator, Screen } = createStackNavigator();

const App = props => {
  return (
    <Navigator>
      <Screen name="home" component={HomeScreen} />
      <Screen name="contacts" component={ContactsScreen} />
      <Screen name="users" component={UsersScreen} />
    </Navigator>
  );
};

export default App;
