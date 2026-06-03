import { useState } from "react";

export default function DropdownFilter({ label, options }) {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState(label);

  return (
    <div className="w-fit relative h-8">
      <div className="h-full select">
        <button
          type="button"
          onClick={() => setOpen((value) => !value)}
          className="w-full bg-[#101315] h-full text-white p-3 rounded-lg flex justify-between items-center border border-gray-700"
        >
          <span className="text-gray-400 w-full whitespace-nowrap text-start">{selected}</span>
          <span className={`fa-solid fa-angle-up text-gray-400 text-sm arrow transition-all duration-200 ${open ? "rotate" : ""}`} />
        </button>
      </div>
      <div
        className={`w-full mt-2 bg-[#101315] border border-gray-700 rounded-lg z-50 overflow-hidden transition-all duration-200 absolute ${
          open ? "opacity-100 scale-100 pointer-events-auto h-auto" : "h-0 opacity-0 scale-95 pointer-events-none"
        }`}
      >
        {options.map((option) => (
          <button
            key={option}
            type="button"
            onClick={() => {
              setSelected(option);
              setOpen(false);
            }}
            className={`option p-2 hover:bg-gray-950/70 rounded w-full cursor-pointer text-start ${selected === option ? "active" : ""}`}
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  );
}
