import { Menu } from 'antd';
import './App.css';
import {Link, Outlet} from 'react-router-dom';
import 'antd/dist/antd.css';



function App() {

  return (
      
    <div>
      <Menu mode='horizontal' style={{marginLeft: '35%', fontFamily: 'arial'}}>
        <Menu.Item key={'graffiti'}><Link to='./Graffiti'><strong>Graffiti</strong></Link></Menu.Item>
        <Menu.Item key={'illustrations'}><Link to='./Illustrations'><strong>Illustrations</strong></Link></Menu.Item>
        <Menu.Item key={'paintings'}><Link to='./Paintings'><strong>Paintings</strong></Link></Menu.Item>
        <Menu.Item key={'waterColors'}><Link to='./WaterColors'><strong>WaterColors</strong></Link></Menu.Item>
      </Menu>
      <div style={{marginTop:'5%'}}><Outlet/></div>
    </div>
  );
}

export default App;