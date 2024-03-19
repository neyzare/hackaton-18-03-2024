import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Dpe() {
  const [dpeData, setDpeData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://dpe-api-service-dev-xfyprtzkyq-ew.a.run.app/calcul_dpe/2362E0868302S', {
          headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJjb2RhX3NjaG9vbF9zdHVkZW50IiwiZXhwIjoxNzEwODQ2NzY0fQ.jYcQyVa3JyJSyg-xQfXBEZqm0Mvp8Vri9Gtl1CFWUPY'
          }
        });
        setDpeData(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching DPE data:', error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      {dpeData && (
        <div>
          <h2>Message: {dpeData.Message}</h2>
          <h3>Scenarios:</h3>
          <ul>
            {dpeData.Scenarios.map((scenario, index) => (
              <li key={index}>
                <p>Ancienne note DPE: {scenario.Ancienne_note}</p>
                <p>Nouvelle note DPE: {scenario.Nouvelle_note}</p>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default Dpe;
