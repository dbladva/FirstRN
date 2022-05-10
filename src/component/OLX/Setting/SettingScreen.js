import {View, Text, Button} from 'react-native';
import React from 'react';

export default function SettingScreen({navigation}) {
  return (
    <View>
      <Button
        title="Hello"
        onPress={() => {
          navigation.openDrawer();
        }}
      />

      <Text>SettingScreen</Text>
    </View>
  );
}
