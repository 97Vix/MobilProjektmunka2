import React, {useState} from "react";
import { View, FlatList } from "react-native";
import AppNotification from "./AppNotification";

const AppNotificationList = () => {
  const [NOTIFICATIONDATA, setNotification] = useState([
    {
      id: "1",
      title: "Matrica",
      startDate: "2021.11.10",
      endDate: "2021.12.10",
      notifDate: "2021.12.05",
    },
    {
      id: "2",
      title: "Matrica2",
      startDate: "2021.11.10",
      endDate: "2021.12.10",
      notifDate: "2021.12.05",
    },
    {
      id: "3",
      title: "Matrica3",
      startDate: "2021.11.10",
      endDate: "2021.12.10",
      notifDate: "2021.12.05",
    },
  ]);

  const NotificationHandler = (mod, myId) => {

    const UPDATENOTIFICATIONDATA = [...NOTIFICATIONDATA];
    const result = UPDATENOTIFICATIONDATA.find( ({ id }) => id === myId);

    if(mod==="set"){

    }
    else {
      
    }

    setNotification(UPDATENOTIFICATIONDATA);
  };

  const renderNotifications = ({ item }) => (
    <AppNotification
      id = {item.id}
      title={item.title}
      setNot={NotificationHandler}
    />
  );

  return (
      <FlatList
        data={NOTIFICATIONDATA}
        renderItem={renderNotifications}
        keyExtractor={(item) => item.id}
      />
  );
};

export default AppNotificationList;
