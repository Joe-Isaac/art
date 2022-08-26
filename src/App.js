import { Menu } from 'antd';
import './App.css';
import {Link, Outlet} from 'react-router-dom';
import 'antd/dist/antd.css'

function App() {
  return (
    <div>
      {/* <img alt='painting background' src='https://www.gn.com/-/media/Images/Page-content-pictures/Legal/Cookie-policy.jpg?h=400&w=2560&la=en&hash=CA125F333E49101BDA01EACB31CB2F78D037EA64'/> */}
    <div>
      <Menu mode='horizontal' style={{marginLeft: '35%', fontFamily: 'arial'}}>
        <Menu.Item><Link to='./Graffiti'><strong>Graffiti</strong></Link></Menu.Item>
        <Menu.Item><Link to='./Illustrations'><strong>Illustrations</strong></Link></Menu.Item>
        <Menu.Item><Link to='./Paintings'><strong>Paintings</strong></Link></Menu.Item>
        <Menu.Item><Link to='./WaterColors'><strong>WaterColors</strong></Link></Menu.Item>
      </Menu>
      <div style={{width: '100%', marginLeft: '50%', marginTop:'5%'}}><Outlet/></div>
    </div>
      </div>
  );
}

export default App;
