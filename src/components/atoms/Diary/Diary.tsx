import React from 'react';
import { Link } from 'react-router-dom';

export interface IdiaryProps {
  id: number;
  name: string;
  userId: number;
  profilePic: string;
  desc: string;
  img: string;
}

const Diary: React.FC<{ items: IdiaryProps }> = (props) => {
  return (
    <div className="post">
      <div className="container">
        <div className="user">
          <div className="userInfo">
            <img src={props.items.profilePic} alt="" />
            <div className="details">
              <Link
                to={`/profile/${props.items.userId}`}
                style={{ textDecoration: 'none', color: 'inherit' }}
              >
                <span className="name">{props.items.name}</span>
              </Link>
              <span className="date">1 min ago</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Diary;
