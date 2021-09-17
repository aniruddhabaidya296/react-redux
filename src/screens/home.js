import React, { useState } from "react";
import { View, Text, StyleSheet, PermissionsAndroid } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import * as Contacts from "react-native-contacts";
import { useEffect } from "react/cjs/react.development";
import { useDispatch, useSelector } from "react-redux";
import * as contactEvents from "../redux/contacts_redux/events";
import * as userEvents from "../redux/users_redux/user_events";

const Home = props => {
  const [contacts, setContacts] = useState([]);

  const contactsReducer = useSelector(abc => {
    console.log("useSelector", abc.contactsReducer.contacts.length);
    return abc.contactsReducer;
  });

  const usersReducer = useSelector(abc => {
    console.log("useSelector", abc.usersReducer.users.length);
    return abc.usersReducer;
  });

  const dispatch = useDispatch();

  const fetchContactsAsync = async () => {
    // check for contacts permission
    console.log("Permission check begins...");
    const status = await PermissionsAndroid.check(
      PermissionsAndroid.PERMISSIONS.READ_CONTACTS
    );
    console.log({ status });
    let finalStatus = status;
    if (finalStatus != true) {
      console.log("Permission not granted");
      const status = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.READ_CONTACTS,
        {
          title: "Please grant the contacts permission to continue",
          message: "This app needs access to your contacts ",
          buttonNeutral: "Ask Me Later",
          buttonNegative: "Cancel",
          buttonPositive: "OK"
        }
      );
      finalStatus = status;
    }

    // if (finalStatus != "true") return;

    const data = await Contacts.getAll();

    console.log("Data fetched..");

    setContacts(data);
    console.log("contacts: ", contacts);

    // Save Contacts To Redux
    dispatch(contactEvents.updateContactsEvent(data));

    //Get number of users
    dispatch(userEvents.getUsersEvent());
  };

  useEffect(() => {
    fetchContactsAsync();
  }, []);

  return (
    <View style={styles.container}>
      <Text>Home Screen</Text>
      <TouchableOpacity
        onPress={() => {
          dispatch(contactEvents.showContactsEvent(contacts, contacts));
          props.navigation.navigate("contacts");
        }}
        style={styles.btn}
      >
        <Text style={{ color: "#fff" }}>Contacts</Text>
      </TouchableOpacity>
      <Text>
        {contactsReducer.contacts.length}
      </Text>
      <TouchableOpacity
        onPress={() => {
          dispatch(userEvents.getUsersEvent());
          props.navigation.navigate("users");
        }}
        style={styles.btn}
      >
        <Text style={{ color: "#fff" }}>User List</Text>
      </TouchableOpacity>
      <Text>
        {usersReducer.users.length}
      </Text>
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
    marginVertical: 10,
    backgroundColor: "rgba(81,135,185,1)",
    padding: 10,
    paddingHorizontal: 20,
    borderRadius: 10
  }
});

// const mapStateToProps = state => state;
// const mapDispatchToProps = dispatch => ({
//   updateContacts: contacts=> dispatch({type: Types.UPDATE_CONTACTS,payload: contacts})
// });

// const connectComponent = connect(mapStateToProps, mapDispatchToProps);
export default Home;
