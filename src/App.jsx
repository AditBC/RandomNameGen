import React, { useState } from 'react';
import { generateName } from './nameGenerator';
import './App.css';

function App() {
  const [ageGroup, setAgeGroup] = useState('adult');
  const [nationality, setNationality] = useState('us');
  const [name, setName] = useState('');
  const [showSettings, setShowSettings] = useState(false);
  const [includeFirstName, setIncludeFirstName] = useState(true);
  const [includeLastName, setIncludeLastName] = useState(true);

  const handleGenerateName = () => {
    const generatedName = generateName(
      ageGroup,
      nationality,
      includeFirstName,
      includeLastName
    );
    setName(generatedName);
  };

  const toggleSettings = () => {
    setShowSettings(!showSettings);
  };

  return (
    <div className="app-container">
      <nav className="top-nav">
        <div className="nav-brand">Quanto</div>
        <div className="nav-buttons">
          <button>Home</button>
          <button>About</button>
          <button>Services</button>
          <button>Contact</button>
        </div>
      </nav>

      <div className="App">
        <h1>Random Name Generator</h1>
        <div className="controls">
          <div className="control-group dropdown">
            <label htmlFor="ageGroup">Age Group:</label>
            <select
              id="ageGroup"
              value={ageGroup}
              onChange={(e) => setAgeGroup(e.target.value)}
            >
              <option value="adult">Adult</option>
              <option value="child">Child</option>
              <option value="senior">Senior</option>
            </select>
          </div>

          <div className="control-group dropdown">
            <label htmlFor="nationality">Nationality:</label>
            <select
              id="nationality"
              value={nationality}
              onChange={(e) => setNationality(e.target.value)}
            >
              <option value="us">US</option>
              <option value="uk">UK</option>
              <option value="fr">France</option>
              <option value="de">Germany</option>
            </select>
          </div>

          <button className="settings-icon" onClick={toggleSettings}>
            ⚙️
          </button>
        </div>

        {showSettings && (
          <div className="settings">
            <label>
              <input
                type="checkbox"
                checked={includeFirstName}
                onChange={(e) => setIncludeFirstName(e.target.checked)}
              />
              First Name
            </label>
            <label>
              <input
                type="checkbox"
                checked={includeLastName}
                onChange={(e) => setIncludeLastName(e.target.checked)}
              />
              Last Name
            </label>
          </div>
        )}

        <button className="generate-button" onClick={handleGenerateName}>
          Generate Name
        </button>

        {name && <div className="result">Generated Name: {name}</div>}
      </div>
    </div>
  );
}

export default App;
