import React from "react";

export const TOTAL_USER = 30;
export const USER_PER_PAGE = 5;
export const PAGE = TOTAL_USER/USER_PER_PAGE;
export const USER_AVATAR_URL = 'https://randomuser.me/api/portraits/med/men/18.jpg';
export const NAVIGATION_MENU = [
  {
      title: 'Beranda',
      path: '#',
      icon: undefined,
  },
  {
      title: 'Driver Management',
      path: '/driver-management',
      icon: undefined,
      isRoot: true,
  },
  {
      title: 'Pickup',
      path: '#',
      icon: undefined
  },
]