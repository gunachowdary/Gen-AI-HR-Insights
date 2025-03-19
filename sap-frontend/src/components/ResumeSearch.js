import React, { useState } from 'react';
import axios from 'axios';

const ResumeSearch = () => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);

  const handleSearch = async () => {
    try {
      const response = await axios.get(`http://127.0.0.1:8000/search_resumes`, {
        params: { query }
      });
      setResults(response.data.results);
    } catch (error) {
      console.error("Error fetching results:", error);
    }
  };

  return (
    <div style={{ padding: "40px", textAlign: "center" }}>
      <h1>Gen-AI HR Insights</h1>
      <input
        type="text"
        placeholder="Search resumes..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        style={{ width: "400px", padding: "10px", fontSize: "16px" }}
      />
      <button onClick={handleSearch} style={{ padding: "10px 20px", marginLeft: "10px" }}>
        Search
      </button>

      <div style={{ marginTop: "30px" }}>
        {results.map((res, index) => (
          <div
            key={index}
            style={{
              border: "1px solid #ccc",
              borderRadius: "10px",
              padding: "20px",
              marginBottom: "20px",
              textAlign: "left",
              background: "#f9f9f9"
            }}
          >
            <h2>{res.name} - <span style={{ color: "#555" }}>{res.job}</span></h2>
            <p><strong>Skills:</strong> {res.skills}</p>
            <div dangerouslySetInnerHTML={{ __html: res.summary.replace(/\n/g, "<br/>") }} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ResumeSearch;
