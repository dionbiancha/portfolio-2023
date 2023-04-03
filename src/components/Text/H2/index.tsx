function H2({ text }: string) {
  return (
    <h2
      style={{
        fontSize: "50px",
        fontWeight: 700,
        textAlign: "center",
        marginTop: "100px",
      }}
    >
      {text}
    </h2>
  );
}

export default H2;
