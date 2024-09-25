import { useState } from 'react';

const Tabs = ({ tabs = [] }) => {
  const [activeTab, setActiveTab] = useState(0);


  return (
    <div className="w-full mx-auto mt-10">
      <div className="flex border-b border-gray-200">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            className={`py-2 mr-2 lg:mr-6 text-xl focus:outline-none font-bold tracking-widest flex flex-col gap-1 ${activeTab === tab.id
                ? 'border-b-2 border-primary text-primary'
                : 'text-gray-500'
              }`}
            onClick={() => setActiveTab(tab.id)}
          >
            {tab.label}
            <span className='text-[16px] text-left'>{tab.price}</span>
          </button>
        ))}
      </div>
      <div className="py-4">
        {tabs[activeTab].content}
      </div>
    </div>
  );
};

export default Tabs;
