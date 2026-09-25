const Header = ({ titulo, subtitle }) => {
  return (
    <header >
      <h1 style={{
        flex: 1,
        padding: "24px",
        borderRadius: "8px",
        backgroundColor: "#0080ff",
        textAlign: "center"
      }}>{titulo}</h1>
      <h2>{subtitle}</h2>
    </header>
  );
}

export default Header;