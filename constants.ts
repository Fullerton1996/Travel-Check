
import type { Category } from './types';
import { SuitcaseIcon, SparklesIcon, PuzzlePieceIcon } from './components/icons';

export const PACKING_LIST: Category[] = [
  {
    id: 'clothes',
    name: 'Essential Clothing',
    icon: SuitcaseIcon,
    subCategories: [
      {
        id: 'tops',
        name: 'Tops',
        items: [
          { id: 'tshirts', name: 'T-shirts (4-5)', note: 'Neutral colors for layering.' },
          { id: 'longsleeve', name: 'Long-sleeve shirts (2-3)', note: 'Henley or casual button-down.' },
          { id: 'sweaters', name: 'Sweaters/Hoodies (1-2)', note: 'Lightweight, for layering.' },
          { id: 'jacket', name: 'Light Jacket', note: 'Windbreaker, denim, or bomber jacket.' },
        ]
      },
      {
        id: 'bottoms',
        name: 'Bottoms',
        items: [
          { id: 'jeans_chinos', name: 'Jeans/Chinos (2-3 pairs)', note: 'Versatile for day and night.' },
          { id: 'shorts', name: 'Shorts (1 pair)', note: 'Optional, for an unexpectedly warm day.' },
        ]
      },
      {
        id: 'footwear',
        name: 'Footwear',
        items: [
          { id: 'walking_shoes', name: 'Comfortable walking shoes', note: 'Most important item! Sneakers recommended.' },
          { id: 'dressier_shoes', name: 'Casual or dressier shoes', note: 'Loafers or chukka boots for evenings.' },
        ]
      },
      {
        id: 'accessories',
        name: 'Accessories',
        items: [
          { id: 'socks', name: 'Socks (5-7 pairs)', note: 'Pack extra pairs.' },
          { id: 'underwear', name: 'Underwear (5-7 pairs)', note: 'One for each day, plus spares.' },
          { id: 'hat', name: 'Hat', note: 'Baseball cap or beanie.' },
          { id: 'day_bag_clothes', name: 'Small backpack/messenger bag', note: 'For daily essentials.' },
        ]
      },
    ]
  },
  {
    id: 'toiletries',
    name: 'Toiletries (TSA Friendly)',
    icon: SparklesIcon,
    subCategories: [
      {
        id: 'hygiene',
        name: 'Personal Hygiene',
        items: [
          { id: 'toothbrush_paste', name: 'Toothbrush & Toothpaste', note: 'Travel-sized or solid tablets.' },
          { id: 'deodorant', name: 'Deodorant', note: 'Solid stick recommended.' },
          { id: 'shampoo_conditioner', name: 'Shampoo & Conditioner', note: 'Travel-sized, solid bars, or use hotel\'s.' },
          { id: 'body_wash', name: 'Body Wash/Soap', note: 'Travel-sized or bar soap.' },
          { id: 'face_wash', name: 'Face Wash', note: 'Travel-sized or solid cleanser.' },
          { id: 'razor_shaving', name: 'Razor & Shaving Cream', note: 'Travel-sized or solid soap.' },
        ]
      },
      {
        id: 'grooming_skincare',
        name: 'Grooming & Skincare',
        items: [
          { id: 'moisturizer', name: 'Moisturizer/Lotion', note: 'Decant into a travel bottle.' },
          { id: 'sunscreen', name: 'Sunscreen', note: 'Travel-sized tube or stick form.' },
          { id: 'lip_balm', name: 'Lip Balm', note: 'Essential for changing weather.' },
          { id: 'hair_products', name: 'Hair Styling Products', note: 'Ensure travel-sized containers.' },
        ]
      },
      {
        id: 'medication_first_aid',
        name: 'Medication & First Aid',
        items: [
          { id: 'prescriptions', name: 'Prescription Medications', note: 'In original containers.' },
          { id: 'pain_relievers', name: 'Pain Relievers', note: 'Ibuprofen or acetaminophen.' },
          { id: 'band_aids', name: 'Band-Aids/Blister Plasters', note: 'Crucial for walking-heavy trips.' },
        ]
      },
    ]
  },
  {
    id: 'other',
    name: 'Other Essentials',
    icon: PuzzlePieceIcon,
    subCategories: [
      {
        id: 'electronics',
        name: 'Electronics & Gadgets',
        items: [
          { id: 'power_bank', name: 'Portable Power Bank', note: 'A must-have for long days out.' },
          { id: 'charger_cables', name: 'Phone Charger & Cables', note: 'Don\'t forget them!' },
          { id: 'headphones', name: 'Headphones/Earbuds', note: 'For travel and downtime.' },
          { id: 'travel_adapter', name: 'Travel Adapter', note: 'If traveling internationally.' },
        ]
      },
      {
        id: 'health_wellness',
        name: 'Health & Wellness',
        items: [
          { id: 'first_aid_kit_small', name: 'Small First-Aid Kit', note: 'Antiseptic wipes, pain relievers etc.' },
          { id: 'hand_sanitizer', name: 'Hand Sanitizer', note: 'For public transport and meals.' },
          { id: 'water_bottle', name: 'Reusable Water Bottle', note: 'Stay hydrated and save money.' },
        ]
      },
      {
        id: 'practical_misc',
        name: 'Practical & Miscellaneous',
        items: [
          { id: 'day_bag_other', name: 'Day Bag or Backpack', note: 'To carry daily items.' },
          { id: 'sunglasses', name: 'Sunglasses', note: 'Fall sun can be bright.' },
          { id: 'umbrella', name: 'Compact Umbrella', note: 'For unexpected showers.' },
          { id: 'book_ereader', name: 'Book or E-reader', note: 'For plane/train journeys.' },
          { id: 'documents', name: 'Physical/Digital Copies of Documents', note: 'Passport, tickets, confirmations.' },
          { id: 'cash_cards', name: 'Cash and Credit/Debit Cards', note: 'A mix of payment methods.' },
        ]
      },
    ]
  }
];
