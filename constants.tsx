
import React from 'react';
import { CategoryType, NavItem } from './types';

export const NAV_ITEMS: NavItem[] = [
  {
    id: CategoryType.SUKATAN,
    title: 'سوكتن ڤلاجرن',
    description: 'رنچڠن ڤڠاجرن تاهونن دان اوبجيکتيف كوريكولوم كومڤريهينسيف جي.ڤي.اي.',
    icon: 'fa-scroll',
    color: 'text-cyan-400 border-cyan-500 hover:shadow-[0_0_20px_#00f3ff]'
  },
  {
    id: CategoryType.BUKU_TEKS,
    title: 'بوكو تيک‌س ديݢيتل',
    description: 'اکسيس كوليكسي بوكو تيک‌س جي.ڤي.اي. دالم فورمات ڤي.دي.اييف. اينتراکتيف.',
    icon: 'fa-book-open',
    color: 'text-pink-500 border-pink-500 hover:shadow-[0_0_20px_#ff00ff]'
  },
  {
    id: CategoryType.JAWI,
    title: 'ايجاءن جاوي اءي.اءي.',
    description: 'ترانسليتراسي رومي ك جاوي ڤينتر دڠن بنتوان كچردسن بواتن.',
    icon: 'fa-keyboard',
    color: 'text-green-400 border-green-500 hover:shadow-[0_0_20px_#39ff14]'
  },
  {
    id: CategoryType.SUMBER,
    title: 'سومبر ݢورو',
    description: 'باهن بنتوان مڠاجر (BBM) دان كيت ميديا اونتوق ڤنديديق.',
    icon: 'fa-chalkboard-teacher',
    color: 'text-yellow-400 border-yellow-500 hover:shadow-[0_0_20px_#ffd700]'
  }
];
