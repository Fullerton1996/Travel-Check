
import React, { useState } from 'react';
import { PlusIcon } from './icons';

interface AddItemFormProps {
  subCategoryId: string;
  onAddItem: (subCategoryId: string, itemName: string) => void;
}

const AddItemForm: React.FC<AddItemFormProps> = ({ subCategoryId, onAddItem }) => {
  const [itemName, setItemName] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (itemName.trim()) {
      onAddItem(subCategoryId, itemName.trim());
      setItemName('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex items-center gap-2 mt-4">
      <input
        type="text"
        value={itemName}
        onChange={(e) => setItemName(e.target.value)}
        placeholder="Add a new item..."
        className="flex-grow bg-gray-100 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md py-1.5 px-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors"
        aria-label="New item name"
      />
      <button
        type="submit"
        className="flex-shrink-0 bg-blue-600 hover:bg-blue-700 text-white font-bold p-2 rounded-md transition-colors disabled:bg-gray-400 dark:disabled:bg-gray-600 disabled:cursor-not-allowed"
        disabled={!itemName.trim()}
        aria-label="Add item"
      >
        <PlusIcon className="w-4 h-4" />
      </button>
    </form>
  );
};

export default AddItemForm;
