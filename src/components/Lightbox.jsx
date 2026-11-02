// Full-screen viewer shown when you click a picture. Click anywhere (or press Esc) to close.
export default function Lightbox({ src, onClose }) {
  return (
    <div className={`lb${src ? " on" : ""}`} onClick={onClose}>
      {src && <img src={src} alt="" />}
    </div>
  );
}
