const { useState } = React;

function App() {
  const [dropdownVisible, setDropdownVisible] = useState(false);

  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };

  return (
    <div>
      <nav className="navbar">
        <div className="left">
          <div className="nav-item fwd">
            <span>FWD</span>
          </div>
          <button className="nav-item become-insider">
            Become
            <br />
            Insider
          </button>
          <div className="nav-item build-my-fit">
            Build My
            <br />
            Fit
          </div>
        </div>
        <div className="center">
          <div className="search-bar">
            <img
              src="https://via.placeholder.com/20"
              alt="AI Face"
              className="ai-face"
            />
            <input type="text" placeholder="Search" />
            <div className="search-features">
              <img src="https://via.placeholder.com/20" alt="Color Wheel" />
              <img
                src="https://via.placeholder.com/20"
                alt="Mic"
                className="mic"
              />
            </div>
          </div>
        </div>
        <div className="right">
          <img src="https://via.placeholder.com/20" alt="Bell" />
          <img src="https://via.placeholder.com/20" alt="Heart" />
          <img src="https://via.placeholder.com/20" alt="Shopping Bag" />
        </div>
      </nav>
      <button className="dropdown-button" onClick={toggleDropdown}>
        Show Dropdown
      </button>
      {dropdownVisible && (
        <div className="dropdown">
          <p>Search according to the trending shorts:</p>
          <ul>
            <li>Most Viewed Shorts This Week</li>
            <li>Most Liked Shorts This Week</li>
          </ul>
        </div>
      )}
      <div className="content">
        <div className="image-grid">
          <img src="https://via.placeholder.com/200" alt="Image 1" />
          <img src="https://via.placeholder.com/200" alt="Image 2" />
          <img src="https://via.placeholder.com/200" alt="Image 3" />
          <img src="https://via.placeholder.com/200" alt="Image 4" />
        </div>
      </div>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
