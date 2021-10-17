import React from 'react';
import {
    LineChart
  } from "react-native-chart-kit";
import { Dimensions } from "react-native";

const data = {
    labels: ["January", "February", "March", "April", "May", "June"],
    datasets: [
      {
        data: [20, 45, 28, 80, 99, 43],
        color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`, // optional
        strokeWidth: 2 // optional
      }
    ],
    legend: ["Fogyasztás"] // optional

  };

const chartConfig = {
    color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
    strokeWidth: 200
};

const screenWidth = Dimensions.get("window").width;

export default function AppChart () {

    return (
        <LineChart
            data={data}
            width={screenWidth*0.58}
            height={256}
            verticalLabelRotation={30}
            chartConfig={chartConfig}
            bezier
        />
    );
}