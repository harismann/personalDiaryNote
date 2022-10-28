import React from 'react';
import { Link } from 'react-router-dom';

const NotFoundPage = () => {
  return (
    <div>
      <img
        src="https://media.istockphoto.com/photos/which-way-to-go-road-sign-picture-id649236630"
        alt="page not found"
      />
      <p style={{ textAlign: 'center' }}>
        <Link to="/">Go to Home </Link>
      </p>
    </div>
  );
};
export default NotFoundPage;
