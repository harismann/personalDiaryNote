import './leftbar.scss';
import ArchiveIcon from '@mui/icons-material/Archive';
import RestoreIcon from '@mui/icons-material/Restore';
import { Link } from 'react-router-dom';

const LeftBar = () => {
  return (
    <div className="leftBar">
      <div className="container">
        <div className="menu">
          <Link to="/" style={{ textDecoration: 'none' }}>
            <div className="user">
              <RestoreIcon />
              <span>Recents</span>
            </div>
          </Link>
          <Link to="/archive" style={{ textDecoration: 'none' }}>
            <div className="user">
              <ArchiveIcon />
              <span>Archive</span>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LeftBar;
