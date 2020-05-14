import React from 'react';
import './profile.css';
import img from "./../img/logo.jpg";


import { withAuthorization } from '../Session';

const ProfilPage = () => (
<div id='profile-page'>
  <div>
        <h2 align="center">PROFIL</h2>
        <div>
          <img id="img" src={img} alt="img" height="auto" width="500" />
        </div><br/>
            <div className="row">
              </div>
              <div className="col-md-8 kertas-biodata">
                <div className="biodata" align="center">
                    <div className="card">
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
                    </div>
                </div>
              </div>
            </div>
        <footer id='footer'>
        <address>
          Link Github <a href="https://github.com/izmirtais">IzmirTais</a> <br/>
        </address>
        </footer> 
      </div>
  );

  const condition = authUser => !!authUser;

  export default withAuthorization(condition)(ProfilPage);