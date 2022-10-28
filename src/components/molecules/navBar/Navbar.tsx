/* eslint-disable react-hooks/exhaustive-deps */
import './navbar.scss';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import LogoutIcon from '@mui/icons-material/Logout';
import GridViewOutlinedIcon from '@mui/icons-material/GridViewOutlined';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import { Link } from 'react-router-dom';
import { AppDispatch, RootState } from '../../../store/index';
import { useForm, SubmitHandler } from 'react-hook-form';
import { search } from '../../../store/DiaryList/diarylist';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';

// import { AuthContext } from "../../../context/authContext";

type SearchValue = {
  search: string;
};
const Navbar = () => {
  // const currentUser = localStorage.getItem('tokenUser');
  const dispatch = useDispatch<AppDispatch>();

  const clickHandler = () => {
    localStorage.clear();
  };

  const { register, watch } = useForm<SearchValue>();
  const watchSearch = watch('search');

  useEffect(() => {
    dispatch(search(watchSearch));
  }, [watchSearch, dispatch]);

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
          <input {...register('search')} placeholder="Search..." />
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
