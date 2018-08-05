import './App.css';
import React from 'react'
import { List, Label, Container, Grid, Image } from 'semantic-ui-react'

const ListExampleBulletedSimple = () => (

    <div className="List-container">


    <List  divided  relaxed>
        <List.Item  href='https://github.com/AndrewRot/Seinfeld-Data-Analysis'>
            <List.Header className="List-spacing">
                <Container textAlign='left'>Seinfeld Analysis</Container>
            </List.Header>
                <Container textAlign='right'>
                    <Label color='blue' horizontal> Data Science  </Label>
                    <Label color='blue' horizontal>  Web  </Label>
                </Container>
        </List.Item>
        <br/>

        <List.Item href='https://github.com/AndrewRot/labs-android'>
            <List.Header className="List-spacing">
                <Container textAlign='left'>Labs App</Container>
            </List.Header>

            <Container textAlign='right'>
                <Label color='blue' horizontal> React-Native </Label>
                <Label color='blue' horizontal> Mobile </Label>
            </Container>
        </List.Item>
        <br/>


        <List.Item href='https://github.com/Ksbugbee/local.land'>
            <List.Header className="List-spacing">
                <Container textAlign='left'>Local.Land</Container>
            </List.Header>
            <Container textAlign='right'>
                <Label color='blue' horizontal> Social Media </Label>
                <Label color='blue' horizontal> Web </Label>
            </Container>
        </List.Item>
        <br/>

        <List.Item href='https://github.com/AndrewRot/Fantasy-EPL-Data-Viz'>
            <List.Header className="List-spacing">
                <Container textAlign='left'>Fantasy Soccer Visualizer</Container>
            </List.Header>
            <Container textAlign='right'>
                <Label color='blue' horizontal> Web </Label>
            </Container>
        </List.Item>
        <br/>

        <List.Item href='https://github.com/AndrewRot/Leaderboards'>
            <List.Header className="List-spacing">
                <Container textAlign='left'>Leaderboards</Container>
            </List.Header>
            <Container textAlign='right'>
                <Label color='blue' horizontal> Web </Label>
            </Container>
        </List.Item>
        <br/>

        <List.Item href='https://github.com/5jen/CS3733_team10'>
            <List.Header className="List-spacing">
                <Container textAlign='left'>PiNavigator</Container>
            </List.Header>
            <Container textAlign='right'>
                <Label color='blue' horizontal> Java </Label>
            </Container>
        </List.Item>
        <br/>


    </List>

    </div>



)

export default ListExampleBulletedSimple

