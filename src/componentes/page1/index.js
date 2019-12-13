import React from 'react';
import { useHistory } from "react-router-dom";
import View from "./view";

function Index() {
    const history = useHistory();
    const onClickButton = (name, age) => {
        console.log('llego ' + name + ' y ' + age);
        //history.location={pathname:"/page2",state: { nam: "name" }}
        history.push({
            pathname: '/page2',
            state: { name, age }
        });

    }

    return (
        <View onClickButton={onClickButton} ></View>

    );
}

export default Index;