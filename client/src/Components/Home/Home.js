import React from 'react';
import './Home.css';
import noimage from '../assets/img/noimage.jpg'

const Home = () => {
  const student = {
    name: 'Your Name ',
    age: '20',
    university: 'Example University',
    bio: 'A passionate computer science student with interests in web development, AI, and data science.'
  };

  return (
    <div className="profile-container">
      <div className="profile-header">
        <img src={noimage} alt="" className="profile-picture" />
        <h1>{student.name}</h1>
      </div>
      <div className="profile-details">
        <p><strong>Age: </strong> {student.age}</p>
        <p><strong>Major: </strong> {student.major}</p>
        <p><strong>University: </strong> {student.university}</p>
        <p><strong>Bio: </strong> {student.bio}</p>
      </div>
    </div>
  );
};

export default Home;
