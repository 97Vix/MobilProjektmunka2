import React, { useState } from "react";
import { View, FlatList, StyleSheet, Dimensions } from "react-native";
import AppNotification from "./AppNotification";
import AppFloatButton from "./AppFloatButton";
import AppNotificationForm from "./AppNotificationForm";
import { ScrollView } from "react-native-gesture-handler";

const windowHeight = Dimensions.get("window").height;

const AppNotificationList = () => {
  const [isAddOrEdit, editOrAddSwitch] = useState(false);
  const [NOTIFICATIONDATA, setNotification] = useState([
    {
      id: "1",
      title: "Matrica",
      startDate: "2021.11.10",
      endDate: "2021.12.10",
      notifDate: "2021.12.05",
    },
  ]);

  const editOrAdd = () => {
    editOrAddSwitch(!isAddOrEdit);
  };

  const deleteNotification = (myId) => {
    // const result = UPDATENOTIFICATIONDATA.find( ({ id }) => id === myId);

    let UPDATENOTIFICATIONDATA = [...NOTIFICATIONDATA];
    UPDATENOTIFICATIONDATA = UPDATENOTIFICATIONDATA.filter(function (obj) {
      return obj.id !== myId;
    });

    setNotification(UPDATENOTIFICATIONDATA);
  };

  const editNotification = (editNoti) => {
    let UPDATENOTIFICATIONDATA = [...NOTIFICATIONDATA];
    const foundIndex = UPDATENOTIFICATIONDATA.findIndex(
      (notif) => notif.id === editNoti.id
    );
    UPDATENOTIFICATIONDATA[foundIndex] = editNoti;
    setNotification(UPDATENOTIFICATIONDATA);
    editOrAdd();
  };


  const addNotification = (editNoti) => {
    let UPDATENOTIFICATIONDATA = [...NOTIFICATIONDATA];
    UPDATENOTIFICATIONDATA.push(editNoti);
    console.log(UPDATENOTIFICATIONDATA);
    setNotification(UPDATENOTIFICATIONDATA);
    editOrAdd();
  };

  const renderNotifications = ({ item }) => (
    <AppNotification
      id={item.id}
      title={item.title}
      delNot={deleteNotification}
      setNot={editOrAdd}
    />
  );

  return (
    <View>
      {!isAddOrEdit ? (
        <View>
          <FlatList
            data={NOTIFICATIONDATA}
            renderItem={renderNotifications}
            keyExtractor={(item) => item.id}
          />
          <View>
            <AppFloatButton method={editOrAdd} />
          </View>
        </View>
      ) : (
        <View>
          <AppNotificationForm addNotif={addNotification} editNotif={editNotification} />
          <View>
            <AppFloatButton method={editOrAdd} />
          </View>
        </View>
      )}
    </View>
  );
};

export default AppNotificationList;
