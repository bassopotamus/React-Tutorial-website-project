import React from 'react';
import Grid from '@material-ui/core/Grid';
import MainGridItem from './MainGridItem';
import GridItem from './GridItem';


export default function GridLayout(){

    return (
        <Grid container spacing={3}>
            <Grid item lg= {12} xs={12}>
                <MainGridItem />
            </Grid>

            <Grid item lg={6} xs={12}>
                <GridItem title="Excel Masterclass" image="https://cdn.pixabay.com/photo/2015/09/05/22/46/business-925900_1280.jpg" description="In this 6-level eDegree, you'll learn how to use Excel from the very basics all the way to VBA programming and machine learning. You'll also learn web automation, Python and Selenium." />
            </Grid>

            <Grid item lg={6} xs={12}>
                <GridItem title="Learn to Code and Get Hired" image="https://cdn.pixabay.com/photo/2021/01/21/14/44/laptop-5937580_1280.jpg" description="Do you need a better career? Do you want to become an employed software developer with a high paying job? Learn how to code and get hired in this coding interview questions course." />
            </Grid>

            <Grid item md={4} xs={12}>
                <GridItem title="3D Modeling Masterclass" image="https://cdn.pixabay.com/photo/2020/01/20/19/08/modelling-4781127_1280.jpg" description="In this 17-course bundle, you will build low poly and high poly 3D models. Anyone can learn the free digital art software Blender. You will also learn Unity and Adobe Photoshop." />
            </Grid>

            <Grid item md={4} xs={12}>
                <GridItem title="Business & Side Hustles" image="https://cdn.pixabay.com/photo/2020/12/31/17/39/man-5877068_1280.jpg" description="This five-level course will take you from no experience in business into a life of financial wisdom and entrepreneurship. You will learn from a successful CEO how to be profitable." />
            </Grid>

            <Grid item md={4} xs={12}>
                <GridItem title="Game Development Masterclass" image="https://cdn.pixabay.com/photo/2020/12/31/21/03/deer-5877407_1280.jpg" description="This bundle of 14 Unity courses will teach you how to build games from scratch. You will learn C#, Blender, Adobe Photoshop, and Unity machine learning with Python." />
            </Grid>

        </Grid>


    );

}