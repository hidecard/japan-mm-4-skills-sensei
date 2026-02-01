
import React from 'react';
import { SkillName } from '../types';

interface SkillCardProps {
  name: SkillName;
  icon: string;
  color: string;
  isSelected: boolean;
  onClick: () => void;
}

export const SkillCard: React.FC<SkillCardProps> = ({ name, icon, color, isSelected, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`relative overflow-hidden group transition-all duration-300 p-4 rounded-2xl flex flex-col items-center justify-center space-y-3 ${
        isSelected 
          ? `${color} text-white shadow-lg scale-105 ring-4 ring-offset-2 ring-slate-200` 
          : 'bg-white text-slate-600 hover:bg-slate-50 border border-slate-200 shadow-sm'
      }`}
    >
      <div className={`w-12 h-12 rounded-xl flex items-center justify-center text-xl transition-colors ${isSelected ? 'bg-white/20' : 'bg-red-600 text-white'}`}>
        <i className={`fa-solid ${icon}`}></i>
      </div>
      <span className="font-bold text-sm tracking-wide">{name}</span>
    </button>
  );
};
