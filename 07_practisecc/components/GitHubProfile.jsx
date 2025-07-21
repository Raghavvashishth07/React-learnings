

import React, { useEffect, useState } from "react";

function GitHubProfile() {
  // State to hold user data fetched from GitHub
  const [userData, setUserData] = useState(null);

  // State to track if data is still loading
  const [loading, setLoading] = useState(false);

  // Current username being searched (default is 'octocat')
  const [username, setUsername] = useState("octocat");

  // Stores previously searched usernames
  const [history, setHistory] = useState([]);

  // Fetch GitHub user info whenever `username` is submitted
  const fetchGitHubUser = (user) => {
    setLoading(true);
    fetch(`https://api.github.com/users/${user}`)
      .then((res) => res.json())
      .then((data) => {
        setUserData(data);
        setLoading(false);

        // Update search history (if username is not already in the list)
        setHistory((prev) =>
          prev.includes(user) ? prev : [...prev, user]
        );
      })
      .catch((err) => {
        console.error("Error fetching GitHub user:", err);
        setLoading(false);
      });
  };

  // useEffect to fetch default user when component mounts
  useEffect(() => {
    fetchGitHubUser(username);
  }, []);

  // Reset handler
  const handleReset = () => {
    setUsername("");        // clear the input field
    setUserData(null);      // clear the fetched data
    setHistory([]);         // clear history
  };

  return (
    <div style={{ padding: "20px", maxWidth: "400px", margin: "auto", border: "1px solid #ccc", borderRadius: "8px" }}>
      <h2>🔍 GitHub Profile Finder</h2>

      {/* Input to type GitHub username */}
      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="Enter GitHub username"
        style={{ padding: "8px", width: "100%", marginBottom: "10px" }}
      />

      {/* Search Button */}
      <button
        onClick={() => fetchGitHubUser(username)}
        style={{ marginRight: "10px", padding: "5px 10px" }}
      >
        🔎 Search
      </button>

      {/* Reset Button */}
      <button
        onClick={handleReset}
        style={{ padding: "5px 10px", backgroundColor: "#f44336", color: "white" }}
      >
        🔄 Reset
      </button>

      {/* Loader while fetching data */}
      {loading && <p>⏳ Fetching data...</p>}

      {/* Display user data after fetching */}
      {userData && !loading && (
        <div style={{ marginTop: "20px", backgroundColor: "#f9f9f9", padding: "10px", borderRadius: "5px" }}>
          <img src={userData.avatar_url} alt="avatar" width={100} />
          <p><strong>Name:</strong> {userData.name || "N/A"}</p>
          <p><strong>Bio:</strong> {userData.bio || "N/A"}</p>
          <p><strong>Location:</strong> {userData.location || "N/A"}</p>
          <p><strong>Public Repos:</strong> {userData.public_repos}</p>
          <p><strong>Followers:</strong> {userData.followers}</p>
        </div>
      )}

      {/* Search History */}
      {history.length > 0 && (
        <div style={{ marginTop: "20px" }}>
          <h4>🕓 Search History:</h4>
          <ul>
            {history.map((user, idx) => (
              <li key={idx} style={{ cursor: "pointer", color: "blue" }}
                  onClick={() => fetchGitHubUser(user)}>
                {user}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default GitHubProfile;
