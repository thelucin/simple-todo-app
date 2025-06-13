import { useState, useEffect, useRef } from "react";

export const ContextMenu = ({ items, taskId, children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const menuRef = useRef(null);

  const handleContextMenu = (e) => {
    e.preventDefault();
    setPosition({ x: e.clientX, y: e.clientY });
    setIsOpen(true);
  };

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  return (
    <div onContextMenu={handleContextMenu} style={{ width: "100%" }}>
      {children}

      {isOpen && (
        <div
          ref={menuRef}
          style={{
            position: "fixed",
            top: position.y,
            left: position.x,
            backgroundColor: "var(--color-bg)",
            border: "1px solid #ccc",
            borderRadius: "4px",
            boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)",
            zIndex: 1000,
          }}
        >
          <ul style={{ listStyle: "none", margin: 0, padding: 0 }}>
            {items.map((item, index) => (
              <li
                key={index}
                style={{
                  padding: "8px 16px",
                  cursor: "pointer",
                  whiteSpace: "nowrap",
                }}
                onClick={() => {
                  item.action(taskId);
                  setIsOpen(false);
                }}
              >
                {item.label}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};
