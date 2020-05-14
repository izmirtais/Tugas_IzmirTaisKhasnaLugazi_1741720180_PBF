import React from 'react';
import './home.css';
import img1 from "./../img/goblin.jpg";
import img2 from "./../img/letsfight.jpg";
import img3 from "./../img/spy.jpg";
import img4 from "./../img/priest.jpg";
import img5 from "./../img/rugal.jpg";
import img6 from "./../img/vagabond.jpg";
import img7 from "./../img/onceagain.jpg";
import img8 from "./../img/hybyemama.jpg";
import img9 from "./../img/repeat.jpg";


import { withAuthorization } from '../Session';

function HomePage (){
  return (
  <div  id='h1-home'>
  <h1 align='center'>Sinopsis Drama Complete</h1><br/>
  <div className="grid-item">
  <div className="grid-container">
  <div className="row">
  <div className="container-fluid">
        <img id="img" src={img1} alt="img" width="300" height="auto" />
        </div><br/>
        <div>
          <p className='Caption'>Goblin</p>
          <p>"Goblin", Seri drama yang menceritakan mengenai seorang pria bernama 
            Kim Shin yang merupakan sosok goblin atau peri yang ditugaskan sebagai peri pelindung nyawa.</p><br/>
        </div>
      </div>
      <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12">
      <div>
          <img id="img" src={img2} alt="img" width="300" height="auto" />
        </div><br/>
        <div>
          <p id='p' className='Caption'>Let's Fight Ghost</p>
          <p id='p' >"Let’s Fight Ghost", Seri drama bergenre komedi dan menceritakan tentang kehidupan bersama hantu dan 
          pengusir setan yang hidup di sebuah apartemen dengan pasangan nya.</p>
        </div>
        </div>


      <div className = "col-lg-3 col-md-4 col-sm-6 col-xs-12">
      <div>
          <img id="img" src={img3} alt="img" width="300" height="435" />
        </div><br/>
        <div>
          <p id='p' className='Caption'>Spy</p>
          <p id='p'>"Spy", bercerita tentang kehidupan seorang mata-mata di BIN  bernama Sun-woo, serta sang ibu bernama Hye-Rim, yang merupakan seorang mantan anggota mata-mata di Korea Utara.</p>
        </div>
      </div>

      <div className = "col-lg-3 col-md-4 col-sm-6 col-xs-12">
      <div>
          <img id="img" src={img4} alt="img" width="300" height="430" />
        </div><br/>
        <div>
          <p id='p' className='Caption'>Priest</p>
          <p id='p' >“Priest”, menceritakan tentang kisah pengusiran setan. Dalam drama ini, Yeon Woo Jin dan Park Yong Woo sebagai tim yang membantu seseorang yang terkena gangguan eksorsisme.</p>
        </div>
      </div>

      <div className = "col-lg-3 col-md-4 col-sm-6 col-xs-12">
      <div>
          <img id="img" src={img5} alt="img" width="300" height="430" />
        </div><br/>
        <div>
          <p id='p' className='Caption'>Rugal</p>
          <p id='p' >"Rugal", Menceritakan seorang detektif elit bernama Kang Ki Bum (Choi Jin Hyuk) yang sedang menyelidiki organisasi kriminal Argos. Saat Ki Bum kembali ke rumahnya, ia mendapati anak dan istrinya terbunuh dan menemukan pria bertopeng di rumahnya.</p>
        </div>
      </div>

      <div className = "col-lg-3 col-md-4 col-sm-6 col-xs-12">
      <div>
          <img id="img" src={img6} alt="img" width="300" height="430" />
        </div><br/>
        <div>
          <p id='p' className='Caption'>Vagabond</p>
          <p id='p' >"Vagabond", Drama ini menceritakan seseorang yang mencari tahu kebenaran tentang sebuah kecelakaan pesawat yang menimpa keponakannya dan warga sipil sebanyak 200 orang meninggal dunia. Cha Dal Gun pun bertekad untuk bisa memecahkan masalah tersebut.</p>
        </div>
      </div>

      <div className = "col-lg-3 col-md-4 col-sm-6 col-xs-12">
      <div>
          <img id="img" src={img7} alt="img" width="300" height="430" />
        </div><br/>
        <div>
          <p id='p' className='Caption'>Once Again</p>
          <p id='p' >“Once Again”, akan menceritakan kisah perceraian berantakan yang mengguncang keluarga Song, yang terdiri dari ayah yang kikir, ibu yang lucu namun materialistis, dan empat anak mereka yang sudah dewasa, yang tidak pernah memiliki hari yang damai.</p>
        </div>
      </div>

      <div className = "col-lg-3 col-md-4 col-sm-6 col-xs-12">
      <div>
          <img id="img" src={img8} alt="img" width="300" height="430" />
        </div><br/>
        <div>
          <p id='p' className='Caption'>Hi Bye, Mama!</p>
          <p id='p' >"Hi Bye, Mama!", mengisahkan tentang seorang perempuan bernama Cha Yu Ri (Kim Tae Hee). Yang mana, meninggal dunia setelah kecelakaan tragis menimpanya 5 tahun lalu. Cha Yu Ri meninggalkan suami, Jo Kang Hwa (Lee Kyu Hyung) dan anak perempuannya.</p>
        </div>
      </div>

      <div className = "col-lg-3 col-md-4 col-sm-6 col-xs-12">
      <div>
          <img id="img" src={img9} alt="img" width="300" height="430" />
        </div><br/>
        <div>
          <p id='p' className='Caption'>365: Repeat The Year</p>
          <p id='p' >"365: Repeat The Year", Mengisahkan tentang kehidupan 10 orang yang melakukan perjalanan waktu, pada waktu 1 tahun yang lalu. Mereka punya kesempatan menata ulang kehidupan, tetapi dibalik itu terdapat kasus misterius terjadi yang dapat mengancam kehidupan mereka.</p>
        </div>
      </div>
    </div>
    </div>
    </div>
  );
}

const condition = authUser => !!authUser;

export default withAuthorization(condition)(HomePage);