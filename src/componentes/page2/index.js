import React from 'react';
import { useHistory } from "react-router-dom";
import View from "./view";

function Index(){
    const history = useHistory();
    const arrivalData=history.location.state;
    const onClickButton = () => {

         history.goBack();
    }

    return (
        <View onClickButton={onClickButton} arrivalData={arrivalData} ></View>
        
      );
}

export default Index;