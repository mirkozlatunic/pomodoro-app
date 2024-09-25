import React from 'react';

type SettingsProps = {
  open: boolean;
  onClose: () => void;
};

const Settings: React.FC<SettingsProps> = ({ open, onClose }) => {
  return (
    <div
      className={`fixed inset-0 flex justify-center items-center transition-colors ${
        open ? 'visible bg-black/20' : 'invisible'
      }`}
      onClick={onClose}
    >
      <div
        className={`bg-white rounded-2xl shadow p-8 transition-all max-w-md w-full ${
          open ? 'scale-100 opacity-100' : 'scale-110 opacity-0'
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className="absolute top-8 right-8 py-1 px-2 border-none rounded-md text-gray-600 hover:bg-gray-50 hover:text-gray-800 text-sm"
          onClick={onClose}
        >
          X
        </button>
        <h2 className="text-2xl font-bold text-[#161932] pb-8">Settings</h2>
        <div>Text</div>
      </div>
    </div>
  );
};

export default Settings;
