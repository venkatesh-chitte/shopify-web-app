
// import React from 'react';
// import { Link } from 'react-router-dom';

// function Header({ cartCount }) {
//   return (
//     <header className="header">
//       <div className="container">
//         <div className="header-wrapper">
//           <div className="logo">
//             <Link to="/">SHOPLANE</Link>
//           </div>
//           <nav className="nav">
//             <Link to="/" className="nav-link">CLOTHING</Link>
//             <Link to="/" className="nav-link">ACCESSORIES</Link>
//           </nav>
//           <div className="search">
//             <div className="search-container">
//               <input type="text" placeholder="Search for clothing and accessories" />
//               <div className="search-icon">
//                 <i className="fas fa-search"></i>
//               </div>
//             </div>
//           </div>
//           <div className="cart">
//             <Link to="/checkout" className="cart-icon">
//               <i className="fas fa-shopping-cart"></i>
//               {cartCount > 0 && <span className="cart-count">{cartCount}</span>}
//             </Link>
//           </div>
//           <div className="profile">
//             <img src="https://imgur.com/96OnkX7.png" alt="Profile" className="profile-img" />
//           </div>
//         </div>
//       </div>
//     </header>
//   );
// }

// export default Header;


import React from 'react';
import { Link } from 'react-router-dom';

function Header({ cartCount }) {
  return (
    <header className="header">
      <div className="container">
        <div className="header-wrapper">
          <div className="logo">
            <Link to="/">SHOPLANE</Link>
          </div>
          <nav className="nav">
            <Link to="/" className="nav-link">CLOTHING</Link>
            <Link to="/" className="nav-link">ACCESSORIES</Link>
          </nav>
          <div className="search">
            <div className="search-container">
              <div className="search-icon">
                <i className="fas fa-search"></i>
              </div>
              <input type="text" placeholder="Search for clothing and accessories" />
            </div>
          </div>
          <div className="cart">
            <Link to="/checkout" className="cart-icon">
              <i className="fas fa-shopping-cart"></i>
              {cartCount > 0 && <span className="cart-count">{cartCount}</span>}
            </Link>
          </div>
          <div className="profile">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkGb0KXZff72_aNYCOMxSo3wBXLUugcSQItw&s" alt="Profile" className="profile-img" />
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
