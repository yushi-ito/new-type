/* eslint-disable react/button-has-type */
import Sidebar from 'react-sidebar';

// eslint-disable-next-line react/function-component-definition
const SidebarMenu = () => (
      <Sidebar
        sidebar={
          <div style={{marginTop: '80px', textAlign: 'center'}}>
            <div style={{marginBottom: '7px', fontSize: '25px'}}>
                <a style={{color: '#FFF', textDecoration: 'none', fontWeight: 'bold'}} href='home'>home</a>
            </div>
            {/* <div style={{marginBottom: '7px', fontSize: '25px'}}><a style={{color: '#FFF', textDecoration: 'none', fontWeight: 'bold'}} href='aaas'>サイドバー</a></div>
            <div style={{marginBottom: '7px', fontSize: '25px'}}><a style={{color: '#FFF', textDecoration: 'none', fontWeight: 'bold'}} href='aaas'>サイドバー</a></div> */}
          </div>
        }
        open
        docked
        styles={{ sidebar: { background: "#FFD700", minWidth: '200px'} }}
      />
    )

export default SidebarMenu;