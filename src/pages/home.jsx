import { useEffect, useState } from "react";
import { FaHtml5, FaCss3Alt, FaJsSquare, FaReact } from "react-icons/fa";
import { SiDart, SiFlutter } from "react-icons/si";

export default function Home() {
  const [displayText, setDisplayText] = useState("");
  const fullText = "Hi, Selamat Datang di Website Carissaa!";
  const speed = 100;

  useEffect(() => {
    let i = 0;
    const typing = setInterval(() => {
      setDisplayText(fullText.slice(0, i));
      i++;
      if (i > fullText.length) {
        clearInterval(typing);
      }
    }, speed);

    return () => clearInterval(typing);
  }, []);

  return (
    <>
      <div className="container">
        <img src="/carissa.jpg" id="foto-profile" alt="Foto Carissa" />
        <h1>{displayText}</h1>
        <p>Haiii semuanyaa, kenalin aku Carisssaa</p>
        <p>Kenalan yuk sama aku</p>

        <nav>
          <a href="/">Beranda</a>
          <a href="/about">Isi</a>
          <a href="/project">Project</a>
          <a href="/contact">Kontak</a>
        </nav>
      </div>
    </>
  );
}