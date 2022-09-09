import { useEffect } from "react";

function Popup({ isOpen, onClose, children, background }) {
  useEffect(() => {
    const handleCloseByEsc = (e) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleCloseByEsc);
    }

    return () => {
      document.removeEventListener("keydown", handleCloseByEsc);
    };
  }, [isOpen, onClose]);

  return (
    <div
      className={`popup popup_background_${background} ${isOpen && "popup_is-open"}`}
    >
      {children}
    </div>
  );
}
export default Popup;
