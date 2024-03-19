import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Dpe() {
  const [dpeData, setDpeData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://dpe-api-service-dev-xfyprtzkyq-ew.a.run.app/trouve_info/2362E0868302S', {
          headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJjb2RhX3NjaG9vbF9zdHVkZW50IiwiZXhwIjoxNzEwODYxMzc3fQ.-Z8hy3HDNF2YK8HDC_J3tLmuP2ROyj6gqNNthPh6TUs'
          }
        });
        setDpeData(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Erreur lors de la récupération des données DPE :', error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <div>Chargement en cours...</div>;
  }

  return (
    <div>
      {dpeData && (
        <div>
          <h2>Message: {dpeData.Message}</h2>
          <h3>Détails du DPE :</h3>
          <ul>
            <li>
              <p>Perdition de renouvellement d'air : {dpeData.deperdition_renouvellement_air}</p>
              <p>Perdition des murs : {dpeData.deperdition_mur}</p>
              <p>Perdition du plancher bas : {dpeData.deperdition_plancher_bas}</p>
              <p>Perdition du plancher haut : {dpeData.deperdition_plancher_haut}</p>
              <p>Perdition du pont thermique : {dpeData.deperdition_pont_thermique}</p>
              <p>Perdition des menuiseries : {dpeData.deperdition_menuiserie}</p>
              <p>Score DPE : {dpeData.score_dpe}</p>
              <p>Classe DPE : {dpeData.classe_dpe}</p>
              <p>Score GES : {dpeData.score_ges}</p>
              <p>Classe GES : {dpeData.classe_ges}</p>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default Dpe;
