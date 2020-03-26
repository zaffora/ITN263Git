import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={{ fontSize: '40px', fontWeight: 'bold', textAlign: 'center'}}>
        # ITN263Git
      </Text>
      <Text>

      </Text>
      <Text>
        group git project
      </Text>
      <Text>

      </Text>
      <Text style={{textAlign: 'center'}}>
        This is just a small class project to build a React-Native app using Git
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
