import React from "react";
import './artikel.css';

const Post = (props) => {
    return (
        <div className="artikel">
            <div className="gambar-artikel">
                <img src="http://placeimg.com/80/80/sport" alt="Gambar Tumbnail Artikel"/>
            </div>
            <div className="konten-artikel">
                <div className="judul-artikel">{props.judul}</div>
                <p className="isi-artikel">{props.isi}</p>
                <button id="button" type="submit"
                onClick={() => { if (window.confirm('Apakah anda yakin menghapus artikel ini ?'))props.hapusArtikel(props.idArtikel)}}>
                    Hapus
                    </button>
            </div>
        </div>
    )
}

export default Post;