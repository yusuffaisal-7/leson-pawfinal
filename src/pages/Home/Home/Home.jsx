import React from 'react';
import Teacher from './Teacher';
import TutorRating from '../../Dashboard/TutorRating/TutorRating';
import Banner from './Banner';
import ExploreAbout from './ExploreAbout';

const Home = () => {
    return (
        <div className='pt-20'>
          <Banner></Banner>
          <ExploreAbout></ExploreAbout>
          <Teacher></Teacher>

          <TutorRating></TutorRating>
        </div>
    );
};

export default Home;