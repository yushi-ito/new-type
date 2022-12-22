import SidebarMenu from 'components/organisms/sidebar/sidebar';
import Header from 'components/organisms/header/header';
import styled from 'styled-components';
import ground from '../../image/field.png';

// eslint-disable-next-line react/function-component-definition
const Home = () => {
    const Wrapper = styled.div`
      display: flex;
    `;

    const AppMain = styled.header`
      margin-top: 70px;
      margin-left: 210px;
      height: 80%;
      width: 60%;
    `;

    const ImgBox = styled.header`
      background-image: url('ground');
    `;

    return (
        <Wrapper>
          <AppMain>
            <ImgBox />lolololo
          </AppMain>
        </Wrapper>
    )
}

export default Home;
