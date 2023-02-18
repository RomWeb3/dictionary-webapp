import "../styles/FontsModal.css";

function FontsModal({ setSelectedFont, toggleRotation, onClose }) {
  return (
    <div className="modal">
      <p
        onClick={() => {
          setSelectedFont("inter");
          onClose();
          toggleRotation();
        }}
        className="sans-serif"
      >
        Sans Serif
      </p>
      <p
        onClick={() => {
          setSelectedFont("lora");
          onClose();
          toggleRotation();
        }}
        className="serif"
      >
        Serif
      </p>
      <p
        onClick={() => {
          setSelectedFont("inconsolata");
          onClose();
          toggleRotation();
        }}
        className="mono"
      >
        Mono
      </p>
    </div>
  );
}

export default FontsModal;
