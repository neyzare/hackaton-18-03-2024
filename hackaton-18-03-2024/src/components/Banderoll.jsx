import React, { useEffect, useState } from 'react';
import '../css/Banderoll.css';

function Banderoll() {
  const [isHovered, setIsHovered] = useState(false);

  

  return (
    <div className='bandeBox'>
      <h1 id='bande'>F</h1>
      <p>📍 Votre habitation est au 76 rue du Petit Chasseur, 45 000 Orléans</p>
    </div>
  );
}

export default Banderoll;
