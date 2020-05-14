import React from 'react';
import './landing.css'
import img from "./../img/logo.jpg";

const Landing = () => (
  <div className="container">
    <div>
      <h1 id='h1-landing' align="center">DRAKOR VIBES</h1>
      <div>
      <img id="img" src={img} alt="img" height="auto" width="800" />
      </div><br/>
      <h3 id='h3-landing'>Selamat Datang ! Drakor Vibes adalah website yang berisi sedikit sinopsis Drama Korea. 
      Website ini akan membantu anda untuk membaca terlebih dahulu sebelum menonton sebuah drama korea. 
      Website ini juga memberikan ruang kepada netizen untuk sharing dan merekomendasikan atau menceritakan sebuah drama korea yang belum kami update. </h3>
      </div>
    </div>
);

export default Landing;