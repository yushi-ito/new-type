/* eslint-disable arrow-body-style */
import styled from 'styled-components';
import SidebarMenu from 'components/organisms/Sidebar/Sidebar';
import RightBarMenu from 'components/organisms/Rightbar/Rightbar';
import Header from 'components/organisms/Header/Header';
import Home from "./pages/Home/Home";

// eslint-disable-next-line react/function-component-definition
const App = () => {
    const Body = styled.div`
        margin: 0;
    `;

    const AppMain = styled.div`
        margin-top: 90px;
        margin-left: 15%;
        width: 60%;
    `;


    return (
        <Body>
            <Header />
            <SidebarMenu />
            <AppMain>
                <Home />
            </AppMain>
            <RightBarMenu />
        </Body>
    )
}

export default App;
