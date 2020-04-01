import React from 'react';
import logo from './logo.svg';
import './index.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
  useRouteMatch,
  Redirect,
  useHistory,
  useLocation
} from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <div className="nav">
            <ul>
              <li><Link to="/beranda">Beranda</Link></li>
              <li><Link to="/complete">Drama Complete</Link></li>
              <li><Link to="/ongoing">Drama Ongoing</Link></li>
              <li><Link to="/genre">Genre</Link></li>
              <li><Link to="/profil">Profil</Link></li>
              <AuthButton/>
            </ul>

            <Switch>
              <Route path="/beranda">
                <Beranda/>
              </Route>
              <Route  path="/complete">
                <Complete/>
              </Route>
              <PremiumRoute path="/ongoing">
                <Ongoing/>
              </PremiumRoute>
              <Route path="/login">
                <Login/>
              </Route>
              <Route path="/genre">
                <Genres/>
              </Route>
              <Route path="/profil">
                <Profil/>
              </Route>
            </Switch>
        </div>
      </div>
    </Router>
  );
}

const fakeAuth = {
  isAuthenticated: false,
  authenticate(cb) {
    fakeAuth.isAuthenticated = true;
    setTimeout(cb, 100);
  },
  signout(cb) {
    fakeAuth.isAuthenticated = false;
    setTimeout(cb, 100);
  }
};

function AuthButton() {
  let history = useHistory();
  return fakeAuth.isAuthenticated ? (
    <p>
      Selamat! Anda Bisa Menikmati Drama Ongoing{" "}
      <button
        onClick={() => {
          fakeAuth.signout(() => history.push("/ongoing"));
        }}
      >
        Sign Out
      </button>
    </p>
  ) : (
    <p></p>
  );
}

// kegunaan fungsi ini adalah sebagai halaman(konten) di situs yang aktif.
function Beranda() {
  return (
    <div className="container">
    <div>
      <h2 align="center">DRAKOR VIBES</h2>
      <div>
          <img src={require("./img/logo.jpg")} alt="" width="800" height="auto"></img>
      </div><br/>
      <h4>Selamat Datang ! website ini berisi tentang beberapa list rekomendasi dan sinopsis drama korea.</h4>
      </div>
    </div>
  );
}

function Complete() {
  return (
    <div>
      <h2 align='center'>Sinopsis Drama Complete</h2><br/>
      <div className="container-fluid">
        <div className="row">
          <div className = "col-lg-3 col-md-4 col-sm-6 col-xs-12">
            <div>
              <img src={require("./img/goblin.jpg")} alt="" width="300" height="auto"></img>
              <p className='Caption'>Goblin</p>
              <p1>"Goblin", Seri drama yang menceritakan mengenai seorang pria bernama Kim Shin yang merupakan sosok goblin atau peri yang ditugaskan sebagai peri pelindung nyawa.</p1><br/>
            </div>
          </div>

          <div className = "col-lg-3 col-md-4 col-sm-6 col-xs-12">
            <div>
              <img src={require("./img/letsfight.jpg")} alt="" width="300" height="auto"></img>
              <p className='Caption'>Let's Fight Ghost</p>
              <p1>"Let’s Fight Ghost", Seri drama bergenre komedi dan menceritakan tentang kehidupan bersama hantu dan pengusir setan yang hidup di sebuah apartemen dengan pasangan nya.</p1>
            </div>
          </div>

          <div className = "col-lg-3 col-md-4 col-sm-6 col-xs-12">
            <div>
              <img src={require("./img/spy.jpg")} alt="" width="300" height="435"></img>
              <p className='Caption'>Spy</p>
              <p1>"Spy", bercerita tentang kehidupan seorang mata-mata di BIN  bernama Sun-woo, serta sang ibu bernama Hye-Rim, yang merupakan seorang mantan anggota mata-mata di Korea Utara.</p1>
            </div>
          </div>

          <div className = "col-lg-3 col-md-4 col-sm-6 col-xs-12">
            <div>
              <img src={require("./img/priest.jpg")} alt="" width="300" height="430"></img>
              <p className='Caption'>Priest</p>
              <p1>“Priest”, menceritakan tentang kisah pengusiran setan. Dalam drama ini, Yeon Woo Jin dan Park Yong Woo sebagai tim yang membantu seseorang yang terkena gangguan eksorsisme.</p1>
            </div>
          </div>

          <div className = "col-lg-3 col-md-4 col-sm-6 col-xs-12">
            <div><br/>
              <img src={require("./img/rugal.jpg")} alt="" width="300" height="430"></img>
              <p className='Caption'>Rugal</p>
              <p1>"Rugal", Menceritakan seorang detektif elit bernama Kang Ki Bum (Choi Jin Hyuk) yang sedang menyelidiki organisasi kriminal Argos. Saat Ki Bum kembali ke rumahnya, ia mendapati anak dan istrinya terbunuh dan menemukan pria bertopeng di rumahnya.</p1>
            </div>
          </div>

          <div className = "col-lg-3 col-md-4 col-sm-6 col-xs-12">
            <div><br/>
              <img src={require("./img/vagabond.jpg")} alt="" width="300" height="430"></img>
              <p className='Caption'>Vagabond</p>
              <p1>"Vagabond", Drama ini menceritakan seseorang yang mencari tahu kebenaran tentang sebuah kecelakaan pesawat yang menimpa keponakannya dan warga sipil sebanyak 200 orang meninggal dunia. Cha Dal Gun pun bertekad untuk bisa memecahkan masalah tersebut.</p1>
            </div>
          </div>

          <div className = "col-lg-3 col-md-4 col-sm-6 col-xs-12">
            <div><br/>
              <img src={require("./img/onceagain.jpg")} alt="" width="300" height="430"></img>
              <p className='Caption'>Once Again</p>
              <p1>“Once Again”, akan menceritakan kisah perceraian berantakan yang mengguncang keluarga Song, yang terdiri dari ayah yang kikir, ibu yang lucu namun materialistis, dan empat anak mereka yang sudah dewasa, yang tidak pernah memiliki hari yang damai.</p1>
            </div>
          </div>

          <div className = "col-lg-3 col-md-4 col-sm-6 col-xs-12">
            <div><br/>
              <img src={require("./img/hybyemama.jpg")} alt="" width="300" height="430"></img>
              <p className='Caption'>Hi Bye, Mama!</p>
              <p1>"Hi Bye, Mama!", mengisahkan tentang seorang perempuan bernama Cha Yu Ri (Kim Tae Hee). Yang mana, meninggal dunia setelah kecelakaan tragis menimpanya 5 tahun lalu. Cha Yu Ri meninggalkan suami, Jo Kang Hwa (Lee Kyu Hyung) dan anak perempuannya.</p1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Login(){
  let history = useHistory();
  let location = useLocation();

  let { from } = location.state || { from: { pathname: "/ongoing" } };
  let login = () => {
    fakeAuth.authenticate(() => {
      history.replace(from);
    });
  };
  
  return(
    <div className="container">
    <div>
          <h2 align="center">Login terlebih dahulu untuk menikmati "Drama Ongoing"</h2><br/>
          <button className="info" onClick={login}>Log in</button> {" "}
    </div>
    </div>
  );
}

function Ongoing() {
  return (
    <div>
      <h2 align='center'>Sinopsis Drama Ongoing</h2><br/>
      <div className="container-fluid">
        <div className="row">
          <div className = "col-lg-3 col-md-4 col-sm-6 col-xs-12">
            <div>
              <img src={require("./img/rugal.jpg")} alt="" width="300" height="auto"></img>
              <p className='Caption'>Rugal</p>
              <p1>"Rugal", Menceritakan seorang detektif elit bernama Kang Ki Bum (Choi Jin Hyuk) yang sedang menyelidiki organisasi kriminal Argos. Saat Ki Bum kembali ke rumahnya, ia mendapati anak dan istrinya terbunuh dan menemukan pria bertopeng di rumahnya.</p1>
            </div>
          </div>

          <div className = "col-lg-3 col-md-4 col-sm-6 col-xs-12">
            <div>
              <img src={require("./img/hyena.jpg")} alt="" width="300" height="auto"></img>
              <p className='Caption'>Hyena</p>
              <p1>"Hyena", Menceritakan dua orang pengacara hebat bernama Yoon Hee Jae (Ju Ji Hon) dan juga Jung Geum Ja (Kim Hye Soo). Mereka bekerja 1% untuk masyarakat teratas dan mereka menggunakan hukum sebagai sebuah senjata untuk bertahan hidup.</p1>
            </div>
          </div>

          <div className = "col-lg-3 col-md-4 col-sm-6 col-xs-12">
            <div>
              <img src={require("./img/onceagain.jpg")} alt="" width="300" height="425"></img>
              <p className='Caption'>Once Again</p>
              <p1>“Once Again”, akan menceritakan kisah perceraian berantakan yang mengguncang keluarga Song, yang terdiri dari ayah yang kikir, ibu yang lucu namun materialistis, dan empat anak mereka yang sudah dewasa, yang tidak pernah memiliki hari yang damai.</p1>
            </div>
          </div>

          <div className = "col-lg-3 col-md-4 col-sm-6 col-xs-12">
            <div>
              <img src={require("./img/repeat.jpg")} alt="" width="300" height="430"></img>
              <p className='Caption'>365: Repeat The Year</p>
              <p1>"365: Repeat The Year", Mengisahkan tentang kehidupan 10 orang yang melakukan perjalanan waktu, pada waktu 1 tahun yang lalu. Mereka punya kesempatan menata ulang kehidupan, tetapi dibalik itu terdapat kasus misterius terjadi yang dapat mengancam kehidupan mereka.</p1>
            </div>
          </div>

          <div className = "col-lg-3 col-md-4 col-sm-6 col-xs-12">
            <div><br/>
              <img src={require("./img/nobody.jpg")} alt="" width="300" height="430"></img>
              <p className='Caption'>Nobody Knows</p>
              <p1>"Nobody Knows", Menceritakan seorang perempuan bernama Cha Young Jin. Ia kehilangan teman perempuannya 19 tahun yang lalu karena suatu kasus pembunuhan berantai. Setelah kejadian itu, Cha Young menjadi trauma, namun suatu sebuah kejadian yang membuatnya menjadi orang yang tegar.</p1>
            </div>
          </div>

          <div className = "col-lg-3 col-md-4 col-sm-6 col-xs-12">
            <div><br/>
              <img src={require("./img/hospital.jpg")} alt="" width="300" height="430"></img>
              <p className='Caption'>Hospital Playlist</p>
              <p1>"Hospital Playlist" adalah sebuah drama tentang chemistry persahabatan lima karakter yang saling memahami hanya melalui tatapan mata. Mereka menjalani hidup dengan cara sederhana tetapi istimewa dan menjadi saksi kelahiran serta kematian dari banyak nyawa di sebuah rumah sakit.</p1>
            </div>
          </div>

          <div className = "col-lg-3 col-md-4 col-sm-6 col-xs-12">
            <div><br/>
              <img src={require("./img/thecursed.jpg")} alt="" width="300" height="430"></img>
              <p className='Caption'>The Cursed</p>
              <p1>"The Cursed" adalah drama thriller misteri tentang reporter Im Jin Hee (Uhm Ji Won) yang memiliki rasa keadilan yang tinggi dan sedang berusaha mengungkap kebenaran di balik perusahaan IT terbesar di negara di Korea, yakni Forest.</p1>
            </div>
          </div>

          <div className = "col-lg-3 col-md-4 col-sm-6 col-xs-12">
            <div><br/>
              <img src={require("./img/hybyemama.jpg")} alt="" width="300" height="430"></img>
              <p className='Caption'>Hi Bye, Mama!</p>
              <p1>"Hi Bye, Mama!", mengisahkan tentang seorang perempuan bernama Cha Yu Ri (Kim Tae Hee). Yang mana, meninggal dunia setelah kecelakaan tragis menimpanya 5 tahun lalu. Cha Yu Ri meninggalkan suami, Jo Kang Hwa (Lee Kyu Hyung) dan anak perempuannya.</p1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Genres() {
// path untuk link induk
// url untuk membuat link atau anak induk
  let { path, url } = useRouteMatch();
  return (
    <div className="container">
      <h2>Genre</h2>
      <h3>Pilih kesukaan anda</h3>
      <div className="container">
        <Link to={`${url}/Action`}>Action </Link><br/>
      </div>
      <div>
          <Link to={`${url}/Horor`}>Horor </Link><br/>
      </div>
      <div>
        <Link to={`${url}/Fantasy`}>Fantasy </Link><br/>
      </div>
      <div>
        <Link to={`${url}/Comedy`}>Comedy </Link><br/>
      </div>

      <Switch>
      <Route exact path={path}>
      </Route>
      <Route path={`${path}/:genreId`}>
      <Genre/>
      </Route>
      </Switch>
    </div>
  );
}

function Genre(){
  let { genreId } = useParams();

  return(
    <div>
      <h2>{genreId}</h2>
    </div>
  );
}

function PremiumRoute({ children, ...rest }) {
  return (
    <Route
      {...rest}
      render={({ location }) =>
        fakeAuth.isAuthenticated ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location }
            }}
          />
        )
      }
    />
  );
}

function Profil() {
  return(
  <div className="container">
  <div>
    <body>
        <h2 align="center">PROFIL</h2>
            <div class='row'>
              <div class="col-md-3">
                <div class = "foto">
                  <img src={require("./img/profil.jpg")} alt="" width="300" height="auto"></img>
                </div>
              </div>
              <div class="col-md-8 kertas-biodata">
                <div class="biodata">
                  <table width="100%" border="0"> 
                    <div class="card">
                      <table class="table">
                        <tbody>
                          <tr>
                            <th scope="row"></th>
                            <th>Nama</th>
                            <td>:</td>
                            <td>Izmir Ta'is Khasna Lugazi</td>
                          </tr>
                          <tr>
                            <th scope="row"></th>
                            <th>TTL</th>
                            <td>:</td>
                            <td>Lumajang, 28 Agustus 1998</td>
                          </tr>
                          <tr>
                            <th scope="row"></th>
                            <th>Jenis Kelamin</th>
                            <td>:</td>
                            <td>Perempuan</td>
                          </tr>
                          <tr>
                            <th scope="row"></th>
                            <th>Alamat</th>
                            <td>:</td>
                            <td>Jl. Mastrip Gg. Bulog Sukowiryo, Bondowoso, Jawa Timur</td>
                          </tr>
                          <tr>
                            <th scope="row"></th>
                            <th>No. Hp</th>
                            <td>:</td>
                            <td>082232928684</td>
                          </tr>
                          <tr>
                            <th scope="row"></th>
                            <th>Status</th>
                            <td>:</td>
                            <td>Mahasiswa</td>
                            <td></td>
                          </tr>
                          <tr>
                            <th scope="row"></th>
                            <th>Hobi</th>
                            <td>:</td>
                            <td>Olahraga</td>
                          </tr>
                          <tr>
                            <th scope="row"></th>
                            <th>Email</th>
                            <td>:</td>
                            <td>izmirtais28@gmail.com</td>
                          </tr>
                          <tr>
                            <th scope="row"></th>
                            <th>Github</th>
                            <td>:</td>
                            <td>izmirtais</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </table>
                </div>
              </div>
            </div>
        </body>
        <footer>
          <p>izmirtais28@gmail.com</p>
        </footer> 
      </div>
    </div>
  );
}

export default App;
