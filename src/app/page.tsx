export default function Page() {
  return (
    <div
      style={{
        height: "100vh",
        width: "100vw",
        padding: 0,
        margin: 0,
        overflow: "hidden",
      }}
    >
      <iframe
        src="/game/index.html"
        style={{
          height: "100%",
          width: "100%",
          border: "none",
        }}
        title="My Game"
      />
    </div>
  );
}

