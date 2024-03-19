import React, { useEffect, useState } from 'react';
import '../css/Banderoll.css';

function Banderoll() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className='bandeBox'>
      <h1 
        id='bande'
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        F
      </h1>
      {isHovered && (
        <p id='note'>
          ❓Une note de F correspond au top 17% des logements français les plus énergivores
        </p>
      )}
      <p>📍 Votre habitation est au 76 rue du Petit Chasseur, 45 000 Orléans</p>
    </div>
  );
}

export default Banderoll;
