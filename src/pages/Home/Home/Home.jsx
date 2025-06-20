// ;
// import Teacher from './Teacher';
// import Banner from './Banner';
// import HowItWorks from './HowItWorks';
// import WhyChooseUs from './WhyChooseUs';
// import SuccessStories from './SuccessStories';
// import Message from './Message';
// import ManageStories from '../../Dashboard/ManageStories/ManageStories';



// const Home = () => {
//     return (
//         <div className='w-full'>
//           <Banner></Banner>
//           <HowItWorks></HowItWorks>
//           <div className="w-full px-4">
//             <Teacher></Teacher>
//             <WhyChooseUs></WhyChooseUs>
//             <SuccessStories></SuccessStories>
//             <Message></Message>
//           </div>
//         </div>
//     );
// };

// export default Home;

// import React from 'react';
// import Teacher from './Teacher';
// import TutorRating from '../../Dashboard/TutorRating/TutorRating';
// import Banner from './Banner';
// import SuccessStories from './SuccessStories';
// import Message from './Message';
// import ManageStories from '../../Dashboard/ManageStories/ManageStories';
// import HowItWorks from './HowItWorks';
// import WhyChooseUs from './WhyChooseUs';
// import WhatIsLesonPaw from './WhatIsLesonPaw';

// const Home = () => {
//     return (
//         <div className='w-full'>
//           <Banner></Banner>
//           <WhatIsLesonPaw></WhatIsLesonPaw>
//           <HowItWorks></HowItWorks>
//           <div className="w-full px-4">
//             <Teacher></Teacher>
//             <WhyChooseUs></WhyChooseUs>
//             <SuccessStories></SuccessStories>
//             <Message></Message>
//           </div>
//         </div>
//     );
// };

// export default Home;


import React from 'react';
import Teacher from './Teacher';
import TutorRating from '../../Dashboard/TutorRating/TutorRating';
import Banner from './Banner';
import SuccessStories from './SuccessStories';
import Message from './Message';
import ManageStories from '../../Dashboard/ManageStories/ManageStories';
import HowItWorks from './HowItWorks';
import WhyChooseUs from './WhyChooseUs';
import WhatIsLesonPaw from './WhatIsLesonPaw';

const Home = () => {
    return (
        <div className='w-full'>
          <Banner></Banner>
          <WhatIsLesonPaw></WhatIsLesonPaw>
          <HowItWorks></HowItWorks>
          <div className="w-full px-4">
            <Teacher></Teacher>
            <WhyChooseUs></WhyChooseUs>
            <SuccessStories></SuccessStories>
            <Message></Message>
          </div>
        </div>
    );
};

export default Home;