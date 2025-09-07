// FIX: Import `ElementType` from 'react' to fix "Cannot find namespace 'React'" error.
import type { ElementType } from 'react';

export interface ChecklistItem {
  id: string;
  name: string;
  note?: string;
}

export interface SubCategory {
  id: string;
  name: string;
  items: ChecklistItem[];
}

export interface Category {
  id: string;
  name: string;
  // FIX: Use the imported `ElementType` instead of `React.ElementType`.
  icon: ElementType;
  subCategories: SubCategory[];
}
