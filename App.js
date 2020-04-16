import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack'

import Login from './components/login';
import Chat from './screens/chat';

const Navigator = createStackNavigator({
   
  Login:Login,
  Chat:Chat,

},
{
  headerMode: "none"
})

export default createAppContainer(Navigator);

