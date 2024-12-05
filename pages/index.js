export default function Home() {
  return (
    <div>
      {/* Cabeçalho */}
      <header style={{ backgroundColor: "#4CAF50", color: "white", padding: "10px 20px" }}>
        <div>
          <h1>EuroClean</h1>
        </div>
        <nav>
          <ul style={{ display: "flex", gap: "15px", listStyle: "none", margin: 0, padding: 0 }}>
            <li><a href="#about" style={{ color: "white", textDecoration: "none" }}>Sobre nós</a></li>
            <li><a href="#services" style={{ color: "white", textDecoration: "none" }}>Serviços</a></li>
            <li><a href="#contact" style={{ color: "white", textDecoration: "none" }}>Contato</a></li>
          </ul>
        </nav>
      </header>

      {/* Banner principal */}
      <section style={{ backgroundColor: "#ddd", textAlign: "center", padding: "50px 20px" }}>
        <h2>Especialistas em limpeza profissional</h2>
        <p>Lavagem de sofás, carpetes, colchões e muito mais!</p>
      </section>

      {/* Seção Sobre Nós */}
      <section id="about" style={{ padding: "20px" }}>
        <h2>Sobre Nós</h2>
        <p>A EuroClean oferece os melhores serviços de higienização com qualidade e rapidez.</p>
      </section>

      {/* Seção de Serviços */}
      <section id="services" style={{ padding: "20px" }}>
        <h2>Serviços</h2>
        <div>
          <h3>Lavagem de Sofás</h3>
          <p>Remoção de manchas e odores com produtos especializados.</p>
        </div>
        <div>
          <h3>Limpeza de Carpetes</h3>
          <p>Renove seu carpete com nosso serviço profissional.</p>
        </div>
      </section>

      {/* Formulário de Contato */}
      <section id="contact" style={{ padding: "20px" }}>
        <h2>Entre em contato</h2>
        <form style={{ display: "flex", flexDirection: "column", gap: "10px", maxWidth: "400px", margin: "auto" }}>
          <input type="text" placeholder="Seu Nome" required />
          <input type="email" placeholder="Seu Email" required />
          <input type="tel" placeholder="Seu Telefone" />
          <textarea placeholder="Sua Mensagem"></textarea>
          <button type="submit" style={{ backgroundColor: "#4CAF50", color: "white", border: "none", padding: "10px" }}>
            Enviar
          </button>
        </form>
      </section>

      {/* Rodapé */}
      <footer style={{ backgroundColor: "#333", color: "white", textAlign: "center", padding: "10px" }}>
        <p>&copy; 2024 EuroCl
