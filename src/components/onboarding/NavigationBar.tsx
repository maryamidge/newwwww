import React from 'react';

interface NavigationBarProps {
  onContinue: () => void;
  isEnabled: boolean;
}

export const NavigationBar: React.FC<NavigationBarProps> = ({ onContinue, isEnabled }) => {
  return (
    <nav className="flex flex-col justify-center items-center gap-[34px] self-stretch relative" aria-label="Navigation">
      <button
        onClick={onContinue}
        disabled={!isEnabled}
        className={`flex h-12 justify-center items-center gap-2 shadow-[0_4px_4px_0_rgba(230,230,230,0.25)] absolute w-[358px] px-[162px] py-4 rounded-lg left-4 top-0 max-md:w-[calc(100%_-_32px)] max-md:left-4 transition-colors duration-200 ${
          isEnabled 
            ? 'bg-blue-500 hover:bg-blue-600 cursor-pointer' 
            : 'bg-[#E6E6E6] cursor-not-allowed'
        }`}
        aria-label="Continue to next step"
      >
        <div className={`text-center text-base font-bold leading-6 uppercase relative ${
          isEnabled ? 'text-white' : 'text-neutral-400'
        }`}>
          continue
        </div>
      </button>
      <footer className="flex flex-col items-start self-stretch absolute w-[390px] h-[34px] left-0 top-[82px]">
        <div className="flex flex-col items-start self-stretch relative">
          <div className="flex w-[430px] h-[34px] flex-col justify-end items-center relative pb-2">
            <div className="w-[154px] h-[5px] shrink-0 backdrop-blur-2xl relative bg-black rounded-[100px]" />
          </div>
        </div>
      </footer>
    </nav>
  );
};
