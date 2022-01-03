import React, { useContext } from 'react';
import PreferenceContext from '../../../context/preferences/preferenceContext';
import Preference from './Preference';
import HeadingThree from '../../../reusables/components/Headings/HeadingThree';
import Order from './Order';

const Preferences = () => {
  const context = useContext(PreferenceContext);

  const { preferences, readyToOrder } = context;

  function switchNaming(id) {
    if (id === 'coffeeStyles') return (id = 'Preferences');

    if (id === 'coffeeTypes') return (id = 'Bean Type');

    if (id === 'quantities') return (id = 'Quantity');

    if (id === 'grindTypes') return (id = 'Grind Option');

    if (id === 'deliveries') return (id = 'Deliveries');

    return id;
  }

  function applyStyling(index) {
    if (index === 0) {
      return 'pb-6 border-b border-gray';
    } else if (index === 4) {
      return 'pt-6 border-0';
    } else {
      return 'pt-6 pb-6 border-b border-gray';
    }
  }

  return (
    <section className="lg:flex lg:items-start lg:gap-32 mt-32">
      <aside className="hidden lg:block lg:w-64">
        <div className="flex flex-col capitalize">
          {preferences.map((item, index) => {
            return (
              <div
                key={index}
                className={`${applyStyling(index)} flex flex-row items-center gap-7 ${
                  item.isActive === true ? 'opacity-100' : 'opacity-40'
                }`}>
                <div className="font-display font-black text-2xl text-gray-dark">
                  0{parseInt(index) + 1}
                </div>
                <HeadingThree key={index}>
                  <span className="text-gray-dark">{switchNaming(item.id)}</span>
                </HeadingThree>
              </div>
            );
          })}
        </div>
      </aside>
      <main className="lg:w-3/4 relative flex flex-col gap-24 z-20">
        {preferences.map((preference, index) => {
          const { id, title, items, isArrowTilted, isCollapsed, isActive } = preference;
          return (
            <Preference
              key={index}
              reference={id}
              title={title}
              items={items}
              tilted={isArrowTilted}
              collapsed={isCollapsed}
              enabled={isActive}
            />
          );
        })}

        <div className="hidden lg:block">{readyToOrder && <Order />}</div>
      </main>
    </section>
  );
};

export default Preferences;
