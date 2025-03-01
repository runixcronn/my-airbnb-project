import React, { useState } from 'react';

const Accordion = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="border-b border-gray-200">
      <button
        className="w-full flex justify-between items-center p-4 focus:outline-none transition-all duration-300 hover:bg-gray-100"
        onClick={toggleAccordion}
      >
        <span className="font-semibold text-lg">{title}</span>
        <span
          className={`transform transition-transform duration-300 ${
            isOpen ? 'rotate-180' : 'rotate-0'
          }`}
        >
          ▼
        </span>
      </button>
      <div
        className={`grid transition-all duration-300 ease-in-out ${
          isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
        }`}
      >
        <div className="overflow-hidden p-4">{children}</div>
      </div>
    </div>
  );
};

export default Accordion;
