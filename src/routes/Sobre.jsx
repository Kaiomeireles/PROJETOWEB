function Sobre() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "2rem",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
      }}
    >
      <div
        style={{
          backgroundColor: "rgba(0,0,0,0.3)",
          padding: "2rem",
          borderRadius: "15px",
        }}
      >
        <h1 style={{ color: "white" }}>Sobre a nossa Loja de Instrumentos</h1>
        <p style={{ color: "white", textAlign: "justify" }}>
          Bem-vindo à nossa loja de instrumentos ! Somos especializados em
          fornecer uma variedade de instrumentos musicais de alta qualidade para
          atender às necessidades de músicos iniciantes e profissionais. Nossa
          equipe é composta por músicos apaixonados que estão sempre prontos
          para ajudar você a encontrar o instrumento perfeito. Venha nos visitar
          e descubra a música em você!
        </p>
      </div>
    </div>
  );
}

export default Sobre;
