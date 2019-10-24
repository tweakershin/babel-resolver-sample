import React, { Component } from "react";
import { Text, View } from "react-native";

import SampleComponent from "@components/SampleComponent";

export default class SampleContainer extends Component {
  render() {
    return (
      <View>
        <SampleComponent />
        <Text> textInComponent </Text>
      </View>
    );
  }
}
