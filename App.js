
import * as React from 'react';
import { Button, View, Text, Image, ScrollView, StyleSheet, StatusBar, Dimensions, ActivityIndicator } from 'react-native';
import { NavigationContainer, getFocusedRouteNameFromRoute } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import 'expo-dev-client';
import AsyncStorage from '@react-native-async-storage/async-storage'
import { AuthContext } from './components/AuthContext/context'
import FirstPageComponent from './components/startPages/FirstPage'
import AuthorizationComponent from './components/startPages/Authorization';
import RegistrationComponent from './components/startPages/Registration';
import LoginComponent from './components/startPages/Login';
import RecuestComponent from './components/startPages/Recuest';
import ForgetPasswordComponent from './components/startPages/ForgetPassword';
import NewPasswordComponent from './components/startPages/NewPassword';
import AcceptEmilComponent from './components/startPages/AcceptEmil';
import ListDarkPageComponent from './components/lists/ListDarkPage';
import CostumerPageComponent from './components/Customer/CustomerPage'


const Tab = createBottomTabNavigator();


function FirstPage({ navigation }) {
  return (
    <FirstPageComponent navigation={navigation} />
  );
}

function Authorization({ navigation }) {
  return (
    <AuthorizationComponent navigation={navigation} />
  );
}

function Recuest({ navigation }) {
  return (
    <RecuestComponent navigation={navigation} />
  );
}

function Registration({ navigation }) {
  return (
    <RegistrationComponent navigation={navigation} />
  );
}

function Login({ navigation }) {
  return (
    <LoginComponent navigation={navigation} />
  );
}

function ForgetPassword({ navigation }) {
  return (
    <ForgetPasswordComponent navigation={navigation} />
  )
}

function NewPassword({ navigation }) {
  return (
    <NewPasswordComponent navigation={navigation} />
  )
}

function AcceptEmil({ navigation }) {
  return (
    <AcceptEmilComponent navigation={navigation} />
  )
}

function ListDarkPage({ navigation }) {
  return (
    <ListDarkPageComponent navigation={navigation} />
  )
}

function CostumerPage({ navigation }) {
  return (
    <CostumerPageComponent navigation={navigation} />
  )
}


const tabBarStyle = {
  height: 90,
  backgroundColor: 'white',
  elevation: 0,
  borderTopColor: 'white',
  width: Dimensions.get('window').width - 50,
  marginTop: 0,
  marginRight: 'auto',
  marginBottom: 0,
  marginLeft: 'auto',
}








export default function App() {

  const [isLoading, setIsLoading] = React.useState(true);
  const [userToken, setUserToken] = React.useState(null);


  const initialLoginState = {
    isLoading: true,
    userToken: null,
  };


  const loginReducer = (prevState, action) => {
    switch (action.type) {
      case 'RETRIEVE_TOKEN':
        return {
          ...prevState,
          userToken: action.userToken,
          isLoading: false,
        };
      case 'LOGIN':
        return {
          ...prevState,
          userToken: action.userToken,
          isLoading: false,
        };
      case 'LOGOUT':
        return {
          ...prevState,
          userToken: null,
          isLoading: false,
        };
      case 'REGISTER':
        return {
          ...prevState,
          userToken: action.userToken,
          isLoading: false,
        };
    }
  };

  const [loginState, dispatch] = React.useReducer(loginReducer, initialLoginState);

  const authContext = React.useMemo(() => ({
    signIn: async (foundUser, callback) => {
      // setIsLoading(true); 
      const userToken = String(foundUser.userToken);

      try {
        await AsyncStorage.setItem('userToken', userToken);
        console.log('userToken', userToken)
      } catch (e) {
        console.log(e);
      }
      dispatch({ type: 'LOGIN', userToken: userToken });
      callback();
    },
    signOut: async (callback) => {
      try {
        await AsyncStorage.removeItem('userToken');

        setIsLoading(false);

      } catch (e) {
        console.log(e);
      }
      dispatch({ type: 'LOGOUT' });
      callback();
    },
    signUp: () => {
      // setIsLoading(false); 
    }
  }), []);


  // Проверка при входе в приложение. 

  React.useEffect(() => {
    setTimeout(async () => {
      let userToken;
      userToken = null;
      try {
        userToken = await AsyncStorage.getItem('userToken');
        console.log(userToken, 'userToken');
        setIsLoading(false);
        console.log('test')

      } catch (e) {
        console.log(e);
      }
      dispatch({ type: 'RETRIEVE_TOKEN', userToken: userToken });
    }, 2000);
  }, []);




  if (isLoading) {
    return (
      <AuthContext.Provider value={authContext}>
        <NavigationContainer>
          <Tab.Navigator
            initialRouteName="FirstPage"
            screenOptions={({ route }) => ({
              tabBarShowLabel: false,
              headerShown: false,
              tabBarActiveTintColor: '#2EB6A5',
              tabBarInactiveTintColor: 'gray',
              tabBarStyle: tabBarStyle,

            })}
          >
            <Tab.Screen name="FirstPage" component={FirstPageComponent}
              options={({ route }) => ({
                tabBarButton: () => null,
                tabBarStyle: { display: 'none' }
              })}
            />

          </Tab.Navigator>
        </NavigationContainer>
      </AuthContext.Provider>
    );
  }




  return (
    <AuthContext.Provider value={authContext}>
      <StatusBar animated={true} backgroundColor={'#17171F'} />
      <NavigationContainer>
        <Tab.Navigator
          initialRouteName="Authorization"
          screenOptions={({ route }) => ({
            tabBarShowLabel: false,
            headerShown: false,
            tabBarActiveTintColor: '#2EB6A5',
            tabBarInactiveTintColor: 'gray',
            tabBarStyle: tabBarStyle,

          })}
        >
          <Tab.Screen name="Authorization" component={AuthorizationComponent}
            options={({ route }) => ({
              tabBarButton: () => null,
              tabBarStyle: { display: 'none' }
            })}
          />
          <Tab.Screen name="Recuest" component={RecuestComponent}
            options={({ route }) => ({
              tabBarButton: () => null,
              tabBarStyle: { display: 'none' }
            })}
          />

          <Tab.Screen name="Login" component={LoginComponent}
            options={({ route }) => ({
              tabBarButton: () => null,
              tabBarStyle: { display: 'none' }
            })}
          />
          <Tab.Screen name="Registration" component={RegistrationComponent}
            options={({ route }) => ({
              tabBarButton: () => null,
              tabBarStyle: { display: 'none' }
            })}
          />
          <Tab.Screen name='ForgetPassword' component={ForgetPasswordComponent}
            options={({ route }) => ({
              tabBarButton: () => null,
              tabBarStyle: { display: 'none' }
            })}
          />
          <Tab.Screen name='NewPassword' component={NewPasswordComponent}
            options={({ route }) => ({
              tabBarButton: () => null,
              tabBarStyle: { display: 'none' }
            })}
          />
          <Tab.Screen name='AcceptEmil' component={AcceptEmilComponent}
            options={({ route }) => ({
              tabBarButton: () => null,
              tabBarStyle: { display: 'none' }
            })}
          />
          <Tab.Screen name='ListDarkPage' component={ListDarkPageComponent}
            options={({ route }) => ({
              tabBarButton: () => null,
              tabBarStyle: { display: 'none' }
            })}
          />
          <Tab.Screen name='CostumerPage' component={CostumerPageComponent}
            options={({ route }) => ({
              tabBarButton: () => null,
              tabBarStyle: { display: 'none' }
            })}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </AuthContext.Provider>


  );

  // return (
  //   <AuthContext.Provider value={authContext}>
  //     <StatusBar animated={true} backgroundColor={'#17171F'}/>
  //     <NavigationContainer>
  //       <Tab.Navigator
  //         initialRouteName="Authorization"
  //         screenOptions={({ route }) => ({
  //           tabBarShowLabel: false,
  //           headerShown: false,
  //           tabBarActiveTintColor: '#2EB6A5',
  //           tabBarInactiveTintColor: 'gray',
  //           tabBarStyle: tabBarStyle,

  //         })}
  //       >
  //         <Tab.Screen name="Registration" component={registerRootComponent}
  //           options={({ route }) => ({
  //             tabBarButton: () => null,
  //             tabBarStyle: { display: 'none' }
  //           })}
  //         />
  //       </Tab.Navigator>
  //     </NavigationContainer>
  //   </AuthContext.Provider>
  // );
}
