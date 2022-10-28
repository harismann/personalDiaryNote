import React from 'react';
import { Link, useActionData } from 'react-router-dom';
import { useParams, useNavigate } from 'react-router-dom';
import { AppDispatch, RootState } from '../../store/index';
import { getDiary } from '../../store/DiaryList/diarylist';
import { useDispatch } from 'react-redux';

import './detailpage.scss';

const Detailpage = () => {
  const navigate = useNavigate();
  const param = useParams();
  const dispatch = useDispatch<AppDispatch>();

  const handleEditButton = async (e: any) => {
    await dispatch(getDiary(param.id));
    console.log(param.id);
    navigate(`/editpage/${param.id}`);
  };

  return (
    <div className="post">
      <div className="container">
        <div className="content">
          <h3>sudah sewindu ku di dekatmu</h3>
          <span>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugiat
            commodi unde voluptate, non tenetur blanditiis expedita adipisci
            assumenda deserunt repellat, laborum, quos nam ducimus quam.
            Exercitationem dolore amet nihil error?
          </span>
        </div>
        <div className="info">
          <button onClick={handleEditButton} className="item">
            Edit
          </button>
          <button onClick={() => navigate('/archive')} className="item">
            Move to Archive
          </button>
          <button onClick={() => navigate(-1)} className="item">
            Back
          </button>
        </div>
      </div>
    </div>
  );
};

export default Detailpage;
