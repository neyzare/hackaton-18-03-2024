import React, { useEffect } from 'react';
import '../css/Banderoll.css'

function Banderoll() {
  useEffect(() => {
    const handleMouseMove = () => {
      const bnd = document.querySelector("#bande");
      bnd.style.width = "300px";
    };

    const bnd = document.querySelector("#bande");
    bnd.addEventListener('mousemove', handleMouseMove);

    return () => {
      bnd.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <>
      <div>
        <h1 id='bande'>F</h1>
        {/* <p>Une note de F correspond au top 17% des logements français les plus énergivores</p> */}
      </div>
      
    </>
    
  )
  
}
// const bnd = document.querySelector("#bande")

// bnd.addEventListener('mousemove', 
//   ()=> {this.style.fontsize = "200px"}
// )

// bnd.onmousemove = function(){
//   this.style.fontsize = "200px"
// }

// bnd.onmouseleave = function(){
//   this.style.fontsize = "100px"
// }

export default Banderoll