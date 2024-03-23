// // Preloader.js

// import React from 'react';
// import './Preloader.css';

// const Preloader = () => {
//   return (
//     <div className="text-preloader-overlay">
//       <p className="text-preloader-text">P K</p>
//     </div>
//   );
// }

// export default Preloader;



import React, { useState, useEffect } from 'react';
import './Preloader.css';

const Preloader = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); 

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`text-preloader-overlay ${loading ? '' : 'hidden'}`}>
      <p className="text-preloader-text">Loading...</p>
    </div>
  );
}

export default Preloader;
