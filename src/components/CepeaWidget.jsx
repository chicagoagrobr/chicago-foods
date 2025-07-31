export default function CepeaWidget() {
  return (
    <div className="flex justify-center mt-8">
      <iframe
        title="Indicador Cepea"
        src="/cepea.html"
        width="420"
        height="150"
        style={{
          border: "none",
          backgroundColor: "#dbd6b2",
        }}
      />
    </div>
  );
}
