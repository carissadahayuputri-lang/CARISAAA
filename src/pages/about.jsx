import React from "react";

export default function About() {
  return (
    <div className="container">
      <h1>Tentang Aku</h1>
      <div className="about-text">
        <p>
          Hai haii, aku Carissa biasa dipanggil Caris, Risa, atau bisa dipanggil Carissa juga. 
          Aku lahir di Malang, 14 Desember 2009.
        </p>
        <p>
          Hobi ku saat ini yaitu membaca buku, mendengarkan musik, menonton drakor, jogging 
          dan of course memasak hehe.
        </p>
        <p>
          Aku punya idola favorit dan orang favoritku. Aku suka Park Jisung dari NCT Dream 
          dannn... ada dehh 
        </p>
        <p>
          Aku suka lagu <i>Everything U Are</i> dari Hindia dan juga <i>Bergema Sampai Selamanya</i> 
          dari Nadhif Basalamah.
        </p>
        <p>
          Hal yang paling tidak aku sukai itu orang yang suka bohong, orang yang tidak menepati janji, 
          dan aku juga takut sama kecoa
        </p>
      </div>
      <nav>
        <a href="/">Beranda</a>
        <a href="/about">Isi</a>
        <a href="/contact">Kontak</a>
      </nav>
    </div>
  );
}
