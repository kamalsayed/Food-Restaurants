import {createStackNavigator } from "react-navigation-stack";
import { createAppContainer} from "react-navigation";
import SearchScreen from "./src/screens/SearchScreen";
import ResultShowScreen from "./src/screens/ResultShowScreen";

const navigator = createStackNavigator(
  {
    Search: SearchScreen,
    ResultShow : ResultShowScreen
  },

    {
      initialRouteName: 'Search',
      defaultNavigationOptions:{
        title:'Business App'
      }  
    }

);

export default createAppContainer(navigator);












/*
Yelp API

Client ID

JvhxnWjlcC9EDtLUpoy8JA
API Key

pJYqRzDl1j_7hkjdOxJK7DSAnzw7qWxG8PtRGuEhQ-NsBDx0GNYG1xEk8XHTYgzLhU_L2ilijcq2ObGBG8uTRnHaIhwQZV8ajj4Xhf-5Zj2N-0MdKGewpTC8U06wY3Yx


*/