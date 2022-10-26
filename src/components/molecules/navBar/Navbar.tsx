import './navbar.scss';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import WbSunnyOutlinedIcon from '@mui/icons-material/WbSunnyOutlined';
import LogoutIcon from '@mui/icons-material/Logout';
import GridViewOutlinedIcon from '@mui/icons-material/GridViewOutlined';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
// import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
// import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
// import { AuthContext } from "../../../context/authContext";

const Navbar = () => {
  const currentUser = localStorage.getItem('tokenUser');

  const clickHandler = () => {
    localStorage.clear();
  };

  return (
    <div className="navbar">
      <div className="left">
        <Link to="/" style={{ textDecoration: 'none' }}>
          <span>DiaryNotes</span>
        </Link>
        <HomeOutlinedIcon />
        <GridViewOutlinedIcon />
        <div className="search">
          <SearchOutlinedIcon />
          <input type="text" placeholder="Search..." />
        </div>
      </div>
      <div className="right">
        {/* <PersonOutlinedIcon /> */}
        <Link
          to="/login"
          style={{ textDecoration: 'none' }}
          onClick={clickHandler}
        >
          <LogoutIcon />
        </Link>
        <NotificationsOutlinedIcon />
        <div className="user">
          <img
            src="https://media.istockphoto.com/photos/logout-picture-id508451098?s=612x612"
            alt=""
          />
          <span>yourusername</span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
