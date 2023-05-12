import React from 'react';

function Homepage() {
  return (
    <div>

        
      {/* Top Navigation Start */}
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="/AdminPanel">
          Zoo management system
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarTogglerDemo01"
          aria-controls="navbarTogglerDemo01"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
          <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
            <li className="nav-item">
              <a className="nav-link" href="/">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/attemptquestion">
                Take a Quiz
              </a>
            </li>
            <li className="nav-item active">
              <a className="nav-link" href="/events">
                <span className="sr-only">(current)</span>Events
              </a>
            </li>
          </ul>
          <div>
            <ul className="navbar-nav mr-auto mt-2 mt-lg-0"></ul>
          </div>
        </div>
      </nav>
      {/* Top Navigation End */}


    </div>
          

  );
}

export default Homepage;
