import React from 'react';

type SectionType = 'pomodoro' | 'short break' | 'long break';

interface PomodoroSwitchProps {
  activeSection: SectionType;
  setActiveSection: React.Dispatch<React.SetStateAction<SectionType>>;
}

const PomodoroSwitch: React.FC<PomodoroSwitchProps> = ({
  activeSection,
  setActiveSection,
}) => {
  const sections: SectionType[] = ['pomodoro', 'short break', 'long break'];

  return (
    <div className="bg-gray-900 p-2 rounded-full flex items-center">
      {sections.map((section) => (
        <button
          key={section}
          onClick={() => setActiveSection(section)}
          className={`
            px-6 py-4 rounded-full text-sm font-medium transition-all duration-300 ease-in-out
            ${
              activeSection === section
                ? 'bg-[#F87070] text-[#1E213F]'
                : 'text-[#6F76B9] hover:text-white'
            }
          `}
        >
          {section}
        </button>
      ))}
    </div>
  );
};

export default PomodoroSwitch;
