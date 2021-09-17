import React from "react";
import { View, Text, StyleSheet, Dimensions, Linking } from "react-native";
import { FlatList, TouchableOpacity } from "react-native-gesture-handler";
const { width } = Dimensions.get("screen");
import { useDispatch, useSelector } from "react-redux";


const Contacts = props => {
  const contactsReducer = useSelector(abc => {
    console.log("useSelector", abc.contactsReducer.contacts.length);
    return abc.contactsReducer;
  });

  console.log("reducer: ", contactsReducer.contacts.length);

  return (
    <View style={styles.container}>
      <Text>Contacts Screen</Text>
      <Text>
        {contactsReducer.contacts.length}
      </Text>
      <FlatList
        data={contactsReducer.contacts}
        renderItem={({ item }) =>
          <TouchableOpacity
            onPress={() => Linking.openURL(`tel:${item.number}`)}
            style={styles.btn}
          >
            <Text>
              {item.displayName}
            </Text>
          </TouchableOpacity>}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  btn: {
    padding: 10,
    backgroundColor: "#ccc",
    width: width / 1.05,
    marginVertical: 10
  }
});

export default Contacts;
