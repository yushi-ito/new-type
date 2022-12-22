// import SidebarMenu from 'components/organisms/sidebar/sidebar';
// import Header from 'components/organisms/header/header';
import styled from 'styled-components';

// eslint-disable-next-line react/function-component-definition
const Home = () => {
    const Wrapper = styled.div`
    text-align: center;
    `;

    const AppHeader = styled.header`
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: calc(10px + 2vmin);
    color: white;
    `;

    return (
        <Wrapper>
          <AppHeader />
        </Wrapper>
    )
}

export default Home;
