import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import MainGridItem from './MainGridItem';

const useStyles = makeStyles(theme => ({

    secondRowFirstItem: {
        backgroundColor: 'green'
    },
    secondRowSecondItem: {
        backgroundColor: 'orange'
    },
    thirdRow: {
        backgroundColor: 'pink'
    }

}));

export default function GridLayout(){
    const classes = useStyles();

    return (
        <Grid container spacing={3}>
            <Grid item lg= {12} xs={12}>
                <MainGridItem />
            </Grid>

            <Grid item sm={6} xs={12}>
                <Typography className={classes.secondRowFirstItem}>
                    Second Row, First Item
                </Typography>
            </Grid>

            <Grid item sm={6} xs={12}>
                <Typography className={classes.secondRowSecondItem}>
                    Second Row, Second Item
                </Typography>
            </Grid>

            <Grid item sm={4} xs={12}>
                <Typography className={classes.thirdRow}>
                    Third Row
                </Typography>
            </Grid>

            <Grid item sm={4} xs={12}>
                <Typography className={classes.thirdRow}>
                    Third Row
                </Typography>
            </Grid>

            <Grid item sm={4} xs={12}>
                <Typography className={classes.thirdRow}>
                    Third Row
                </Typography>
            </Grid>

        </Grid>


    );

}