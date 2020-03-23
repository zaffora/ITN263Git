import 'react-native-gesture-handler';
import React from 'react';
import { Component } from 'react';
import {
  StyleSheet,
  Button,
  View,
  Text,
  Alert,
  ScrollView,
  SafeAreaView,
  Image,
  TextInput,
  KeyboardAvoidingView
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

var count = 1;

function Separator() {
  return <View style={styles.separator} />;
}

function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>

      <Image source={require('./assets/SickSurveyHome.png')} style={{ width: 340, height: 90 }} />

      <Text>Welcome to the Patient Survey!</Text>

      <Button
        title="Go to Survey"
        onPress={() => navigation.navigate('Survey')}
      />
    </View>
  );
}

class SurveyScreen extends Component {

  //state object
  constructor() {
    super();
    this.state = {
      feeling: '',
      name: '',
      birth: '',
      sex: '',
      family: ''
    };
  }

  clearHandler() {
    this.setState({
      feeling: '',
      name: '',
      birth: '',
      sex: '',
      family: ''
    });
  }
  render() {
    return (
      <SafeAreaView style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <ScrollView>
          <KeyboardAvoidingView>

            <Image source={require('./assets/SickSurveyEmojies.png')} style={{ width: 400, height: 75 }} />

            <Text>How do you feel?</Text>

            <TextInput
              style={styles.formFields}
              placeholder="0 - 10"
              placeholderTextColor="grey"
              onChangeText={feeling => this.setState({ feeling })}
              value={this.state.feeling}

            />

            <Separator />

            <Text>Your Name:</Text>

            <TextInput
              style={styles.formFields}
              placeholder="Name: First Last"
              placeholderTextColor="grey"
              onChangeText={name => this.setState({ name })}
              value={this.state.name}
            />

            <Separator />

            <Text>Your Birthday:</Text>

            <TextInput
              style={styles.formFields}
              placeholder="MM/DD/YYYY"
              placeholderTextColor="grey"
              onChangeText={birth => this.setState({ birth })}
              value={this.state.birth}
            />

            <Separator />

            <Text>Sex:</Text>

            <TextInput
              style={styles.formFields}
              placeholder="Male / Female"
              placeholderTextColor="grey"
              onChangeText={sex => this.setState({ sex })}
              value={this.state.sex}
            />

            <Separator />

            <Text>Do you have a family physician?:</Text>

            <TextInput
              style={styles.formFields}
              placeholder="Yes / No"
              placeholderTextColor="grey"
              onChangeText={family => this.setState({ family })}
              value={this.state.family}
            />

          </KeyboardAvoidingView>
        </ScrollView>

        <Separator />

        <Button
          title="Submit and View Summery"
          onPress={() => this.props.navigation.navigate('Summery')}
        />
        <Button
          title="Clear Text"
          onPress={() => this.clearHandler.bind(this)}

        />
            
        <Button
            title="Cancel Form"
        />
              
      </SafeAreaView>
    );
  }
}

function SummeryScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>

      <Text>Number of patients seen: {count++}</Text>


      <Button
        title="Go back to Home"
        onPress={() => navigation.popToTop()}
      />
    </View>
  );
}

const Stack = createStackNavigator();

const styles = StyleSheet.create({
  mainView: {
    flexDirection: 'column',
    marginTop: 30,
    backgroundColor: '#C3FFBA'
  },
  
  button: {
    width: 50,
    height: 50,
    backgroundColor: 'red'
  },

  formFields: {
    marginTop: 30,
    marginLeft: 15,
    marginRight: 15,
    padding: 5,
    borderWidth: 1
  },

  separator: {
    marginVertical: 8,
    borderBottomColor: '#737373',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
})


function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Survey" component={SurveyScreen} />
        <Stack.Screen name="Summery" component={SummeryScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
