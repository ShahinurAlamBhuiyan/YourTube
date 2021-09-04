import React from 'react';
import './_app.scss';
import { Container } from 'react-bootstrap';
import HomeScreen from './components/screens/homeScreen/HomeScreen';
import Header from './components/shared/header/Header';
import Sidebar from './components/shared/sidebar/Sidebar';

const App = () => {
    return (
        <>
            <Header />
            <div className="appContainer">
                <Sidebar />
                <Container className="appMain" fluid>
                    <HomeScreen />
                </Container>
            </div>
        </>
    )
}

export default App