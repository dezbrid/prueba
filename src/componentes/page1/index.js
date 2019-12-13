import React from 'react';
import View from './view';

function index(){
    return (
       <View onClickButton={onClickButton}></View>
      );
}

const onClickButton=()=>{
    console.log('llego');
}
export default index;
