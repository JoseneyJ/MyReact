export default function Footer() {
  return (
    <div
      className="container"
      style={{
        textAlign: "center",
        marginTop: "100px",
        position: "fixed",
        top: "60dvh",
        marginLeft: "100px",
      }}
    >
      <p>
        Github:<a href="https://github.com/JoseneyJ">JoseneyJ</a>
      </p>

      <p>
        E-Mail:
        <a href="mailto:joseneyjeanpierre@yahoo.com">
          {" "}
          Click here to send me an email!{" "}
        </a>
      </p>
      <p>
        Linkedin:{" "}
        <a href="https://www.linkedin.com/in/joseney-jean-pierre/">
          Joseney Jean Pierre
        </a>
      </p>
    </div>
  );
}
