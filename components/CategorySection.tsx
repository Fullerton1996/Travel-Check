
import React from 'react';
import type { Category } from '../types';
import ChecklistItem from './ChecklistItem';

interface CategorySectionProps {
  category: Category;
  checkedItems: Record<string, boolean>;
  onToggle: (itemId: string) => void;
}

const CategorySection: React.FC<CategorySectionProps> = ({ category, checkedItems, onToggle }) => {
  const CategoryIcon = category.icon;
  return (
    <section className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden transition-colors duration-300">
      <div className="p-6">
        <div className="flex items-center mb-6">
          <CategoryIcon className="w-8 h-8 text-blue-600 dark:text-blue-400 mr-4" />
          <h2 className="text-2xl font-bold text-gray-800 dark:text-white">{category.name}</h2>
        </div>
        <div className="space-y-6">
          {category.subCategories.map(subCategory => (
            <div key={subCategory.id}>
              <h3 className="text-lg font-semibold text-gray-700 dark:text-gray-300 mb-3 border-b border-gray-200 dark:border-gray-700 pb-2">{subCategory.name}</h3>
              <ul className="space-y-3">
                {subCategory.items.map(item => (
                  <ChecklistItem
                    key={item.id}
                    item={item}
                    isChecked={!!checkedItems[item.id]}
                    onToggle={() => onToggle(item.id)}
                  />
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategorySection;
