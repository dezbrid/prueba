import React, { useState } from 'react';


import "../style.css"
import {
    Paper,
    TextField,
    Button

} from "@material-ui/core";



function View(props) {
    
    const {
        onClickButton
        
    }= props;

    const [field, setField] = useState({
        fieldName: '',
        fieldAge: '',
    });

    const updateField = e => {
        setField({
            ...field,
            [e.target.name]: e.target.value
        });

    };
    

    return (
        <Paper className="paper">

            <TextField
                name={"fieldName"}
                value={field.fieldName}
                label={"Name"}
                onChange={updateField} />

            <TextField
                name={"fieldAge"}
                value={field.fieldAge}
                label={"Age"}
                onChange={updateField} />


            <Button variant="contained" color="primary" onClick={() => onClickButton(field.fieldName, field.fieldAge)} >Go to page2</Button>
        </Paper>
    );
}

export default View;
