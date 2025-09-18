import React, { useState } from 'react';
import axios from 'axios';

function QueryInterface() {
  const [query, setQuery] = useState('');
  const [file, setFile] = useState(null);
  const [results, setResults] = useState([]);
  const [expanded, setExpanded] = useState({});

  const handleQueryChange = (e) => setQuery(e.target.value);
  const handleFileChange = (e) => setFile(e.target.files[0]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('query', query);
    if (file) formData.append('file', file);
    const response = await axios.post('/api/query', formData);
    setResults(response.data.results);
  };

  const toggleExpand = (idx) => {
    setExpanded((prev) => ({ ...prev, [idx]: !prev[idx] }));
  };

  return (
    <div>
      <h2>Unified Query Interface</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" value={query} onChange={handleQueryChange} placeholder="Type your question..." />
        <input type="file" onChange={handleFileChange} />
        <button type="submit">Search</button>
      </form>
      <div>
        <h3>Results</h3>
        <ul>
          {results.map((result, idx) => (
            <li key={idx}>
              {result.citation ? (
                <span>
                  <a href={result.citation} target="_blank" rel="noopener noreferrer">{result.text}</a>
                  <button onClick={() => toggleExpand(idx)} style={{marginLeft: '8px'}}>
                    {expanded[idx] ? 'Hide Details' : 'Show Details'}
                  </button>
                  {expanded[idx] && result.metadata && (
                    <div style={{marginTop: '4px', padding: '4px', border: '1px solid #ccc'}}>
                      <strong>Source:</strong> {result.citation}<br/>
                      <strong>Metadata:</strong> {JSON.stringify(result.metadata)}
                    </div>
                  )}
                </span>
              ) : (
                <span>{result.text}</span>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default QueryInterface;
