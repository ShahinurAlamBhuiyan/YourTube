import React, { useState } from 'react';
import './_app.scss';
import { Container } from 'react-bootstrap';
import HomeScreen from './components/screens/homeScreen/HomeScreen';
import Header from './components/shared/header/Header';
import Sidebar from './components/shared/sidebar/Sidebar';

const App = () => {

    const [toggleSidebar, setToggleSidebar] = useState(false);

    const handleToggleSidebar = () => {
        setToggleSidebar((prevState) => !prevState)
    }

    return (
        <>
            <Header handleToggleSidebar={handleToggleSidebar} />
            <div className="appContainer">
                <Sidebar 
                    toggleSidebar={toggleSidebar}
                    handleToggleSidebar={handleToggleSidebar}
                    />
                <Container className="appMain" fluid>
                    <HomeScreen />
                </Container>
            </div>
        </>
    )
}

export default App