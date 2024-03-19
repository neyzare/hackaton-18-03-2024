import React, { useEffect, useState } from 'react';
import '../css/Banderoll.css';

function Banderoll() {
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const handleMouseMove = () => {
      const bnd = document.querySelector("#bande");
      bnd.style.width = "300px";
    };

    const handleMouseLeave = () => {
      const bnd = document.querySelector("#bande");
      bnd.style.width = "fit-content";
    };

    const bnd = document.querySelector("#bande");
    bnd.addEventListener('mouseenter', handleMouseMove);
    bnd.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      bnd.removeEventListener('mouseenter', handleMouseMove);
      bnd.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <div className='bandeBox'>
      <h1 id='bande'>F</h1>
      <p>📍 Votre habitation est au 76 rue du Petit Chasseur, 45 000 Orléans</p>
    </div>
  );
}

export default Banderoll;
