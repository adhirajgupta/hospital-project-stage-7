import React,{ Component } from "react";
import { Text } from "react-native-paper";
import { OneLiner } from "../../globalComponents/OneLiners";

export default class Pharmacy extends Component{
    render(){
        return(
            
            <Text>
                {OneLiner.pharmacy}
            </Text>

        )
    }
}