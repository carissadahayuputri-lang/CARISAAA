export default function Project() {
  return (
    <div className="container">
      <h1>Project & Skill Ngoding</h1>
      <p>Berikut beberapa project dan skill ngoding yang aku kuasai.</p>
      <section id="project">
        <h2>Project</h2>
        <ul>
          <li>Website Portofolio</li>
          <li>Aplikasi Flutter UKK</li>
        </ul>
      </section>
      <section id="skill">
        <h2>Skill Ngoding</h2>
        <div className="skill-container">
          <div className="skill-item">
            <img src="logohtml.jpg" alt="HTML" className="logo" />
            <p>HTML</p>
          </div>
          <div className="skill-item">
            <img src="logocss.jpg" alt="CSS" className="logo" />
            <p>CSS</p>
          </div>
          <div className="skill-item">
            <img src="logodart.jpg" alt="Dart" className="logo" />
            <p>Dart</p>
          </div>
          <div className="skill-item">
            <img src="logoflutterr.jpg" alt="Flutter" className="logo" />
            <p>Flutter</p>
          </div>
        </div>
      </section>
      <nav>
        <a href="/home">Kembali ke Beranda</a>
      </nav>
    </div>
  );
}
