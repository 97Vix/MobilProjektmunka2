import "react-native-gesture-handler";

import React, { useState } from "react";

import { Picker } from "@react-native-picker/picker";

const CustomizedPicker = ({handler, interval, selected}) => {

  const [Enable, setEneble] = useState(selected);

  return (
      <Picker
        selectedValue={Enable}
        onValueChange={(itemValue, itemIndex) => { 
          handler(itemValue);
          setEneble(itemValue); 
        }}
        style={{ height: 25 }}
        mode="dropdown" // Android only
      >
      {   
          interval.map((item, index)=> (
            <Picker.Item label={item} value={item} key={index} />
          ))
      }
      </Picker>
  );
}

export default CustomizedPicker;