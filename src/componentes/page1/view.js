import React from 'react';
import { FormData } from './model';
import "./style.css"
import {
    Paper,
    TextField,
    Button

} from "@material-ui/core";


function View(props) {
    const {
        onClickButton
        
    }= props;
    return (
        <Paper className="paper">
            {FormData.map((field, index) => {
                return (
                    <TextField key={index}
                        id={field.id}
                        value={field.value}
                        label={field.label}
                        /*onChange={() => }*/>
                    </TextField>
                );
            })}
            <Button variant="contained" color="primary" onClick={() =>onClickButton()} >boton</Button>
        </Paper>
    );
}

export default View;
