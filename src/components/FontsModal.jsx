import "../styles/FontsModal.css";

function FontsModal({ onSelect }) {
  return (
    <div className="modal">
      <p onClick={() => onSelect("inter")} className="sans-serif">
        Sans Serif
      </p>
      <p onClick={() => onSelect("lora")} className="serif">
        Serif
      </p>
      <p onClick={() => onSelect("inconsolata")} className="mono">
        Mono
      </p>
    </div>
  );
}

export default FontsModal;
