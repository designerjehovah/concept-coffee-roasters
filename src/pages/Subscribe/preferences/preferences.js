const preferences = [
  {
    id: 'coffeeStyles',
    title: 'How do you drink your coffee?',
    items: [
      {
        type: 'Capsule',
        info: 'Compatible with Nespresso systems and similar brewers',
      },
      {
        type: 'Filter',
        info: 'For pour over or drip methods like Aeropress, Chemex, and V60',
      },
      {
        type: 'Espresso',
        info: 'Dense and finely ground beans for an intense, flavorful experience',
      },
    ],
    isArrowTilted: true,
    isCollapsed: true,
    isActive: true,
  },
  {
    id: 'coffeeTypes',
    title: 'What type of coffee?',
    items: [
      {
        type: 'Single Origin',
        info: 'Distinct, high quality coffee from a specific family-owned farm',
      },
      {
        type: 'Decaf',
        info: 'Just like regular coffee, except the caffeine has been removed',
      },
      {
        type: 'Blended',
        info: 'Combination of two or three dark roasted beans of organic coffees',
      },
    ],
    isArrowTilted: false,
    isCollapsed: false,
    isActive: false,
  },
  {
    id: 'quantities',
    title: 'How much would you like?',
    items: [
      {
        type: '250g',
        info: 'Perfect for the solo drinker. Yields about 12 delicious cups.',
      },
      {
        type: '500g',
        info: 'Perfect option for a couple. Yields about 40 delectable cups.',
      },
      {
        type: '1000g',
        info: 'Perfect for offices and events. Yields about 90 delightful cups.',
      },
    ],
    isArrowTilted: false,
    isCollapsed: false,
    isActive: false,
  },
  {
    id: 'grindTypes',
    title: 'Want us to grind them?',
    items: [
      {
        type: 'Wholebean',
        info: 'Best choice if you cherish the full sensory experience',
      },
      {
        type: 'Filter',
        info: 'For drip or pour-over coffee methods such as V60 or Aeropress',
      },
      {
        type: 'Cafetiére',
        info: 'Course ground beans specially suited for french press coffee',
      },
    ],
    isArrowTilted: false,
    isCollapsed: false,
    isActive: false,
  },
  {
    id: 'deliveries',
    title: 'How often should we deliver?',
    items: [
      {
        type: 'Every week',
        info: '$14.00 per shipment. Includes free first-class shipping.',
      },
      {
        type: 'Every 2 Weeks',
        info: '$17.25 per shipment. Includes free priority shipping.',
      },
      {
        type: 'Every month',
        info: '$22.50 per shipment. Includes free priority shipping.',
      },
    ],
    isArrowTilted: false,
    isCollapsed: false,
    isActive: false,
  },
];

export default preferences;
