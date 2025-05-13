import React from 'react';
import Teacher from './Teacher';
import TutorRating from '../../Dashboard/TutorRating/TutorRating';

const Home = () => {
    return (
        <div>
          <Teacher></Teacher>

          <TutorRating></TutorRating>
        </div>
    );
};

export default Home;