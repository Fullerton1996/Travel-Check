
import React, { useState, useMemo } from 'react';
import { PACKING_LIST } from './constants';
import type { Category } from './types';
import CategorySection from './components/CategorySection';
import ProgressBar from './components/ProgressBar';
import Header from './components/Header';
import { ResetIcon } from './components/icons';

const App: React.FC = () => {
  const [checkedItems, setCheckedItems] = useState<Record<string, boolean>>(() => {
    try {
      const saved = localStorage.getItem('checkedItems');
      return saved ? JSON.parse(saved) : {};
    } catch (error) {
      console.error('Error reading from localStorage', error);
      return {};
    }
  });

  const handleToggle = (itemId: string) => {
    const newCheckedItems = { ...checkedItems, [itemId]: !checkedItems[itemId] };
    setCheckedItems(newCheckedItems);
    localStorage.setItem('checkedItems', JSON.stringify(newCheckedItems));
  };
  
  const handleReset = () => {
    setCheckedItems({});
    localStorage.removeItem('checkedItems');
  };

  const { totalItems, checkedCount } = useMemo(() => {
    let total = 0;
    PACKING_LIST.forEach(category => 
      category.subCategories.forEach(sub => total += sub.items.length)
    );
    const checked = Object.values(checkedItems).filter(Boolean).length;
    return { totalItems: total, checkedCount: checked };
  }, [checkedItems]);
  
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
              Reset
            </button>
          </div>
          <ProgressBar progress={progress} />
          <p className="text-right text-sm text-gray-600 dark:text-gray-400 mt-1">{checkedCount} / {totalItems} items packed</p>
        </div>

        <main className="space-y-8">
          {PACKING_LIST.map((category: Category) => (
            <CategorySection
              key={category.id}
              category={category}
              checkedItems={checkedItems}
              onToggle={handleToggle}
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
