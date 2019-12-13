import React from 'react';

import {
    Paper,
    Typography,
    Button

} from "@material-ui/core";
function View(props) {
    const {
        onClickButton,
        arrivalData

    } = props;

    return (
        <Paper className="paper">
            <Typography gutterBottom component="p" >
               su nombres es: {arrivalData.name} y  su edad es {arrivalData.age}
            </Typography>
            <Button variant="contained" color="primary" onClick={() => onClickButton()} >Go to back</Button>
        </Paper>
    );
}

export default View;