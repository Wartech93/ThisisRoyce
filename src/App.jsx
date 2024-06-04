import { Outlet } from 'react-router-dom';
import Nav from './components/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import LogoImage from '../public/background.JPG';

const sectionStyle = {
   backgroundImage: `${LogoImage}`
}

// In our main App component, we are rendering only single instances of Header and Navbar and several instances of Card
function App() {
  return (
    <div style={sectionStyle}className="bg-secondary min-vh-100">
       <Nav />
      <main className="mx-3" />
        <Outlet />
      </div>
  );
}

export default App;
