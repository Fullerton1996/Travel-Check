
import React, { useState, useMemo, useEffect } from 'react';
import { PACKING_LIST } from './constants';
import type { Category } from './types';
import CategorySection from './components/CategorySection';
import ProgressBar from './components/ProgressBar';
import Header from './components/Header';
import { ResetIcon } from './components/icons';

const App: React.FC = () => {
  const [packingList, setPackingList] = useState<Category[]>(() => {
    try {
      const savedList = localStorage.getItem('packingList');
      return savedList ? JSON.parse(savedList) : PACKING_LIST;
    } catch (error) {
      console.error('Error loading packing list from localStorage', error);
      return PACKING_LIST;
    }
  });

  const [checkedItems, setCheckedItems] = useState<Record<string, boolean>>(() => {
    try {
      const saved = localStorage.getItem('checkedItems');
      return saved ? JSON.parse(saved) : {};
    } catch (error) {
      console.error('Error reading from localStorage', error);
      return {};
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem('packingList', JSON.stringify(packingList));
    } catch (error) {
      console.error('Error saving packing list to localStorage', error);
    }
  }, [packingList]);

  const handleToggle = (itemId: string) => {
    const newCheckedItems = { ...checkedItems, [itemId]: !checkedItems[itemId] };
    setCheckedItems(newCheckedItems);
    localStorage.setItem('checkedItems', JSON.stringify(newCheckedItems));
  };
  
  const handleReset = () => {
    setCheckedItems({});
    localStorage.removeItem('checkedItems');
    setPackingList(PACKING_LIST);
    localStorage.removeItem('packingList');
  };

  const handleAddItem = (subCategoryId: string, itemName: string) => {
    if (!itemName.trim()) return;

    const newItem = {
      id: `custom-${Date.now()}`,
      name: itemName.trim(),
    };

    setPackingList(currentList => {
      const newList = JSON.parse(JSON.stringify(currentList));
      for (const category of newList) {
        const subCategory = category.subCategories.find(sub => sub.id === subCategoryId);
        if (subCategory) {
          subCategory.items.push(newItem);
          break;
        }
      }
      return newList;
    });
  };

  const handleRemoveItem = (itemId: string) => {
    setPackingList(currentList => {
      const newList = JSON.parse(JSON.stringify(currentList));
      for (const category of newList) {
        for (const subCategory of category.subCategories) {
          const itemIndex = subCategory.items.findIndex(item => item.id === itemId);
          if (itemIndex > -1) {
            subCategory.items.splice(itemIndex, 1);
          }
        }
      }
      return newList;
    });

    if (checkedItems[itemId]) {
      const newCheckedItems = { ...checkedItems };
      delete newCheckedItems[itemId];
      setCheckedItems(newCheckedItems);
      localStorage.setItem('checkedItems', JSON.stringify(newCheckedItems));
    }
  };


  const { totalItems, checkedCount } = useMemo(() => {
    let total = 0;
    packingList.forEach(category => 
      category.subCategories.forEach(sub => total += sub.items.length)
    );
    const checked = Object.values(checkedItems).filter(Boolean).length;
    return { totalItems: total, checkedCount: checked };
  }, [checkedItems, packingList]);
  
  const progress = totalItems > 0 ? (checkedCount / totalItems) * 100 : 0;

  return (
    <div className="min-h-screen font-sans text-gray-800 dark:text-gray-200 transition-colors duration-300">
      <div className="container mx-auto max-w-4xl p-4 sm:p-6 md:p-8">
        <Header />
        
        <div className="sticky top-0 bg-slate-100/80 dark:bg-gray-900/80 backdrop-blur-sm z-10 py-4 mb-6">
          <div className="flex justify-between items-center mb-2">
            <h2 className="text-lg font-semibold text-gray-700 dark:text-gray-300">Packing Progress</h2>
             <button
              onClick={handleReset}
              className="flex items-center text-sm text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 font-medium transition-colors"
            >
              <ResetIcon className="w-4 h-4 mr-1" />
              Reset All
            </button>
          </div>
          <ProgressBar progress={progress} />
          <p className="text-right text-sm text-gray-600 dark:text-gray-400 mt-1">{checkedCount} / {totalItems} items packed</p>
        </div>

        <main className="space-y-8">
          {packingList.map((category: Category) => (
            <CategorySection
              key={category.id}
              category={category}
              checkedItems={checkedItems}
              onToggle={handleToggle}
              onAddItem={handleAddItem}
              onRemoveItem={handleRemoveItem}
            />
          ))}
        </main>
        
        <footer className="text-center mt-12 text-sm text-gray-500 dark:text-gray-400">
          <p>Have a fantastic trip to NYC, Boston & Salem!</p>
        </footer>
      </div>
    </div>
  );
};

export default App;
