export const Accordion = ({ AccordionToggle, isOpenAccordion }) => {
  return (
    <div className="w-full max-w-md mx-auto p-4">
      <div className="border rounded-lg shadow-sm">
        {/* アコーディオンアイテム */}
        <div className="border-b last:border-b-0">
          <button
            className="w-full p-4 text-left flex justify-between items-center hover:bg-gray-50"
            onClick={() => {
              AccordionToggle();
            }}
          >
            <span className="font-medium">アコーディオン 1</span>
            <svg
              className="w-5 h-5 text-gray-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>
          {isOpenAccordion && (
            <div className="p-4 bg-gray-50">
              <p>アコーディオンの内容がここに入ります。</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
