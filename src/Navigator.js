import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'

import Login from './Screens/Login'
import Home from './Screens/Home'
import Statistic from './Screens/Statistic'
import Manage from './Screens/Manage'
import Cart from './Screens/Cart'
import DetailProducts from './Components/DetailProducts'
import UpdateCart from './Components/UpdateCart'
import AddCart from './Screens/AddCart'

const MainNavigator = createStackNavigator({
  
  Home,
  Statistic,
  Manage,
  Cart,
  DetailProducts,
  UpdateCart,
  Login,
  AddCart,
  DetailProducts
}, {  

  headerMode: 'none',
  initialRouteName: 'Login'
})

export default createAppContainer(MainNavigator)