
import React from 'react';
import type { ChecklistItem as ChecklistItemType } from '../types';
import { TrashIcon } from './icons';

interface ChecklistItemProps {
  item: ChecklistItemType;
  isChecked: boolean;
  onToggle: () => void;
  onRemove: (itemId: string) => void;
}

const ChecklistItem: React.FC<ChecklistItemProps> = ({ item, isChecked, onToggle, onRemove }) => {
  return (
    <li className="flex items-start justify-between group">
      <label className="flex items-start cursor-pointer flex-grow pr-2">
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
      <button
        onClick={() => onRemove(item.id)}
        className="flex-shrink-0 p-1 rounded-full text-gray-400 dark:text-gray-500 hover:bg-red-100 dark:hover:bg-red-900/50 hover:text-red-600 dark:hover:text-red-400 opacity-0 group-hover:opacity-100 transition-all focus:opacity-100 focus:outline-none focus:ring-2 focus:ring-red-500"
        aria-label={`Remove ${item.name}`}
      >
        <TrashIcon className="w-4 h-4" />
      </button>
    </li>
  );
};

export default ChecklistItem;
