import './rightbar.scss';
import { Link } from 'react-router-dom';
import { Pagination, Stack } from '@mui/material';
import { CenterFocusStrong } from '@mui/icons-material';

const RightBar = () => {
  return (
    <div className="rightBar">
      <div className="container">
        <div className="item">
          <h3>
            <span>Recent Diary Notes</span>
          </h3>
          <Link style={{ textDecoration: 'none' }} to="/">
            <div className="user">
              <div className="userInfo">
                {/* <img
                src="https://images.pexels.com/photos/4881619/pexels-photo-4881619.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt=""
              /> */}
                <p>
                  <span>hari pertama menuliskan diary ini</span>
                </p>
              </div>
              <span>created : 1 min ago</span>
            </div>
          </Link>
          <hr />
          <Link style={{ textDecoration: 'none' }} to="/">
            <div className="user">
              <div className="userInfo">
                {/* <img
                src="https://images.pexels.com/photos/4881619/pexels-photo-4881619.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt=""
              /> */}
                <p>
                  <span>hari pertama menuliskan diary ini</span>
                </p>
              </div>
              <span>created : 1 min ago</span>
            </div>
          </Link>
          <hr />
          <Link style={{ textDecoration: 'none' }} to="/">
            <div className="user">
              <div className="userInfo">
                {/* <img
                src="https://images.pexels.com/photos/4881619/pexels-photo-4881619.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt=""
              /> */}
                <p>
                  <span>hari pertama menuliskan diary ini</span>
                </p>
              </div>
              <span>created : 1 min ago</span>
            </div>
          </Link>
          <hr />
          <Link style={{ textDecoration: 'none' }} to="/">
            <div className="user">
              <div className="userInfo">
                {/* <img
                src="https://images.pexels.com/photos/4881619/pexels-photo-4881619.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt=""
              /> */}
                <p>
                  <span>hari pertama menuliskan diary ini</span>
                </p>
              </div>
              <span>created : 1 min ago</span>
            </div>
          </Link>
          <hr />
          <Link style={{ textDecoration: 'none' }} to="/">
            <div className="user">
              <div className="userInfo">
                {/* <img
                src="https://images.pexels.com/photos/4881619/pexels-photo-4881619.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt=""
              /> */}
                <p>
                  <span>hari pertama menuliskan diary ini</span>
                </p>
              </div>
              <span>created : 1 min ago</span>
            </div>
          </Link>
          <hr />
          <div className="user">
            <div className="userInfo">
              {/* <img
                src="https://images.pexels.com/photos/4881619/pexels-photo-4881619.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt=""
              /> */}
              <p>
                <span>hari ini sunggu melelahkan bestie</span>
              </p>
            </div>
            <span>1 min ago</span>
          </div>
          <hr />
          <div className="user">
            <div className="userInfo">
              {/* <img
                src="https://images.pexels.com/photos/4881619/pexels-photo-4881619.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt=""
              /> */}
              <p>
                <span>kurang lebih harusnya sama sih ini ya</span>
              </p>
            </div>
            <span>1 min ago</span>
          </div>
          <hr />
          <div className="user">
            <div className="userInfo">
              {/* <img
                src="https://images.pexels.com/photos/4881619/pexels-photo-4881619.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt=""
              /> */}
              <p>
                <span>kamu harus bisa broku</span>
              </p>
            </div>
            <span>1 min ago</span>
          </div>
          <hr />
          <div className="user">
            <div className="userInfo">
              {/* <img
                src="https://images.pexels.com/photos/4881619/pexels-photo-4881619.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt=""
              /> */}
              <p>
                <span>Jane Doe</span> changed their cover picture
              </p>
            </div>
            <span>1 min ago</span>
          </div>
          <hr />
          <Stack
            spacing={2}
            sx={{
              padding: 4,
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <Pagination count={10} variant="outlined" shape="rounded" />
          </Stack>
        </div>
      </div>
    </div>
  );
};

export default RightBar;
