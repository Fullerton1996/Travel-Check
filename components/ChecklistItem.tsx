
import React from 'react';
import type { ChecklistItem as ChecklistItemType } from '../types';

interface ChecklistItemProps {
  item: ChecklistItemType;
  isChecked: boolean;
  onToggle: () => void;
}

const ChecklistItem: React.FC<ChecklistItemProps> = ({ item, isChecked, onToggle }) => {
  return (
    <li className="flex items-start">
      <label className="flex items-start cursor-pointer group">
        <div className="flex items-center h-6">
          <input
            type="checkbox"
            checked={isChecked}
            onChange={onToggle}
            className="hidden"
          />
          <div
            className={`w-5 h-5 rounded-md border-2 flex-shrink-0 transition-all duration-200
            ${isChecked 
              ? 'bg-blue-600 border-blue-600' 
              : 'bg-gray-200 dark:bg-gray-700 border-gray-300 dark:border-gray-600 group-hover:border-blue-500'}`}
          >
            {isChecked && (
              <svg className="w-full h-full text-white fill-current" viewBox="0 0 16 16">
                <path d="M12.207 4.793a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0l-2-2a1 1 0 011.414-1.414L6.5 9.086l4.293-4.293a1 1 0 011.414 0z" />
              </svg>
            )}
          </div>
        </div>
        <div className="ml-3">
          <span className={`font-medium transition-colors duration-200 ${isChecked ? 'text-gray-500 dark:text-gray-400 line-through' : 'text-gray-800 dark:text-gray-200'}`}>
            {item.name}
          </span>
          {item.note && (
             <p className={`text-sm transition-colors duration-200 ${isChecked ? 'text-gray-400 dark:text-gray-500 line-through' : 'text-gray-600 dark:text-gray-400'}`}>
               {item.note}
             </p>
          )}
        </div>
      </label>
    </li>
  );
};

export default ChecklistItem;
