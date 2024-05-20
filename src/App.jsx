import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React from 'react';
import './App.css';
import LogHome from './action/pages/login_section/LogHome';
import Payment from './action/pages/login_section/Payment';
import Result from './action/pages/login_section/Result';
import Courses from './action/pages/login_section/Courses';

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route exact path="/" element={<LogHome />} />
          <Route path="/results" element={<Result />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/payment" element={<Payment />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;





// import { BrowserRouter as Routes, Route } from 'react-router-dom';
// import React from 'react';
// import './App.css';
// // import StartPage from './action/pages/StartPage';
// import LogHome from './action/pages/login_section/LogHome';
// import Payment from './action/pages/login_section/Payment';
// import Result from './action/pages/login_section/Result';
// import Courses from './action/pages/login_section/Courses';

// function App() {
//   return (
//     <div>
//       <BrowserRouter>
//         <Routes>
//           <Route exact path="/" element={<LogHome />} /> 
//           <Route path="/results" element={<Result />} /> 

//           <Route path="/courses" element={<Courses />} /> 

//           <Route path="/payment" element={<Payment />} /> 

//           {/* <Route path='/results' component={Result} />
//           <Route path='/payment' component={Payment} />
//           <Route path='/courses' component={Courses} /> */}
//         </Routes>
//       </BrowserRouter>
//     </div>
//   );
// }

// export default App;
