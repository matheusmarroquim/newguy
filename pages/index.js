export default function Home() {
  return (
    <div>
      {/* Cabeçalho */}
      <header
        style={{
          backgroundColor: "#4CAF50",
          color: "white",
          padding: "10px 20px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <h1>EuroClean</h1>
        <nav>
          <ul
            style={{
              display: "flex",
              gap: "15px",
              listStyle: "none",
              margin: 0,
              padding: 0,
            }}
          >
            <li>
              <a href="#about" style={{ color: "white", textDecoration: "none" }}>
                Sobre nós
              </a>
            </li>
            <li>
              <a href="#services" style={{ color: "white", textDecoration: "none" }}>
                Serviços
              </a>
            </li>
            <li>
              <a href="#contact" style={{ color: "white", textDecoration: "none" }}>
                Contato
              </a>
            </li>
          </ul>
        </nav>
      </header>

      {/* Banner principal */}
      <section
        style={{
          backgroundImage: "url('/img/banner.jpg')"          ,
          height: "400px",
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          color: "white",
          textAlign: "center",
        }}
      >
        <h1 style={{ fontSize: "3rem", fontWeight: "bold" }}>
          Bem-vindo à EuroClean
        </h1>
        <p style={{ fontSize: "1.5rem" }}>
          Especialistas em limpeza e higienização profissional
        </p>
      </section>

      {/* Seção Sobre Nós */}
      <section
        id="about"
        style={{ padding: "50px", textAlign: "center", backgroundColor: "#f5f5f5" }}
      >
        <h2>Sobre Nós</h2>
        <p>A EuroClean oferece os melhores serviços de higienização com qualidade e rapidez.</p>
      </section>

      {/* Seção de Serviços */}
      <section id="services" style={{ padding: "50px", textAlign: "center" }}>
        <h2>Nossos Serviços</h2>
        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
            flexWrap: "wrap",
          }}
        >
          <div style={{ width: "30%", margin: "10px", textAlign: "center" }}>
            <img
              src="/img/sofa-cleaning.jpg"
              alt="Lavagem de Sofás"
              style={{ width: "100%", borderRadius: "10px" }}
            />
            <h3>Lavagem de Sofás</h3>
            <p>Remoção de manchas e odores com produtos especializados.</p>
          </div>
          <div style={{ width: "30%", margin: "10px", textAlign: "center" }}>
            <img
              src="/img/carpet-cleaning.jpg"
              alt="Limpeza de Carpetes"
              style={{ width: "100%", borderRadius: "10px" }}
            />
            <h3>Limpeza de Carpetes</h3>
            <p>Renove seu carpete com nosso serviço profissional.</p>
          </div>
        </div>
      </section>

      {/* Formulário de Contato */}
      <section
        id="contact"
        style={{
          padding: "50px",
          backgroundColor: "#f5f5f5",
          textAlign: "center",
        }}
      >
        <h2>Entre em contato</h2>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            alert("Mensagem enviada com sucesso!");
          }}
          style={{ maxWidth: "500px", margin: "auto" }}
        >
          <input
            type="text"
            placeholder="Seu Nome"
            required
            style={{
              width: "100%",
              padding: "10px",
              margin: "10px 0",
              borderRadius: "5px",
              border: "1px solid #ccc",
            }}
          />
          <input
            type="email"
            placeholder="Seu Email"
            required
            style={{
              width: "100%",
              padding: "10px",
              margin: "10px 0",
              borderRadius: "5px",
              border: "1px solid #ccc",
            }}
          />
          <textarea
            placeholder="Sua Mensagem"
            style={{
              width: "100%",
              padding: "10px",
              margin: "10px 0",
              borderRadius: "5px",
              border: "1px solid #ccc",
            }}
          ></textarea>
          <button
            type="submit"
            style={{
              backgroundColor: "#4CAF50",
              color: "white",
              padding: "10px 20px",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
            }}
          >
            Enviar
          </button>
        </form>
      </section>

      {/* Rodapé */}
      <footer
        style={{
          backgroundColor: "#333",
          color: "white",
          textAlign: "center",
          padding: "10px",
        }}
      >
        <p>&copy; 2024 EuroClean. Todos os direitos reservados.</p>
      </footer>

      {/* Botão flutuante para WhatsApp */}
      <a
        href="https://wa.me/SEU_NUMERO"
        target="_blank"
        style={{
          position: "fixed",
          bottom: "20px",
          right: "20px",
          backgroundColor: "#25D366",
          color: "white",
          padding: "15px 20px",
          borderRadius: "50%",
          textAlign: "center",
          fontSize: "20px",
          boxShadow: "0 2px 5px rgba(0,0,0,0.3)",
          textDecoration: "none",
        }}
      >
        💬
      </a>
    </div>
  );
}

