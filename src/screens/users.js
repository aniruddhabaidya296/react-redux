import React from "react";
import { View, Text, StyleSheet, Dimensions, Linking } from "react-native";
import { FlatList, TouchableOpacity } from "react-native-gesture-handler";
const { width } = Dimensions.get("screen");
import { useSelector } from "react-redux";

const Users = props => {
  const usersReducer = useSelector(abc => {
    console.log("useSelector", abc.usersReducer.users.length);
    return abc.usersReducer;
  });
  ``;
  console.log("usersReducer: ", usersReducer.users.length);

  return (
    <View style={styles.container}>
      <View style={styles.titleStyle}>
        <Text>USERS</Text>
      </View>
      <FlatList
        data={usersReducer.users}
        renderItem={({ item }) =>
          <View style={styles.itemContainer}>
            <Text>
              Name: {item.name}
              {"\n"}
              Phone: {item.phone}
              {"\n"}
              Company: {item.company.name}
            </Text>
          </View>}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    margin: 10,
    flex: 1,
    borderWidth: 0.5,
    borderRadius: 18,
    paddingHorizontal: 30,
    paddingVertical: 10,
    backgroundColor: "#ADD8E6"
    // justifyContent: "center",
    // alignItems: "center"
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  titleStyle: {
    padding: 10,
    // backgroundColor: "#ccc",
    // width: width / 1.05,
    marginVertical: 10,
    alignItems:"center"
  }
});

export default Users;
