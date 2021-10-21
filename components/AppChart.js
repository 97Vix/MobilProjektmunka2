import React from 'react';
import {
    LineChart
  } from "react-native-chart-kit";
import { Dimensions } from "react-native";



const chartConfig = {
    color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
    strokeWidth: 200
};

const screenWidth = Dimensions.get("window").width;

export default function AppChart ({chartData}) {

    return (
        <LineChart
            data={chartData}
            width={screenWidth*0.58}
            height={256}
            verticalLabelRotation={30}
            chartConfig={chartConfig}
            bezier
        />
    );
}