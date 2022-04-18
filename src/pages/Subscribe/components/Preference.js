import React, { useContext } from 'react';
import PreferenceContext from '../../../context/preferences/preferenceContext';
import HeadingThree from '../../../reusables/components/Headings/HeadingThree';
import Paragraph from '../../../reusables/components/Paragraphs/Paragraph';
import PropTypes from 'prop-types';

const Preference = ({ reference, title, items, tilted, collapsed, enabled }) => {
  const context = useContext(PreferenceContext);

  const {
    togglePreference,
    selectPreference,
    customizeOrder,
    foldAllElements,
    colors,
    chooseCoffeeStyle,
    chooseCoffeeType,
    chooseQuantity,
    chooseGrindOption,
    chooseDeliveryFrequency,
    orderSummary,
  } = context;

  const { SELECTED_CARD_COLOR } = colors;

  return (
    <article
      id={reference}
      className={`flex flex-col items-center gap-8 transition-[height] ${
        collapsed ? 'max-h-100' : 'max-h-0'
      } duration-500 ease-in-out ${
        enabled ? 'pointer-events-auto' : 'pointer-events-none'
      }`}>
      <div
        onClick={() => {
          togglePreference(reference);
        }}
        className="relative w-full flex justify-between items-center z-10">
        <div className="w-3/4">
          <HeadingThree>
            <span className="text-gray">{title}</span>
          </HeadingThree>
        </div>

        <span className="text-green-650">
          <i
            className={`fas fa-chevron-up transition transform scale-125 
            duration-200 ease-in-out ${tilted ? 'rotate-180' : 'rotate-0'}`}></i>
        </span>
      </div>

      <div
        onClick={(e) => {
          const nextElem = e.currentTarget.parentElement.nextSibling;

          const currentElem = e.currentTarget.parentElement;

          nextElem ? customizeOrder(nextElem.id, currentElem.id) : foldAllElements();

          function apply(operation) {
            typeof operation === 'function' &&
              Array.from(e.currentTarget.children).map((x) => {
                x.classList.contains(SELECTED_CARD_COLOR) &&
                  operation(x.children[0].innerText);

                return x;
              });
          }

          if (reference === 'coffeeStyles') {
            apply(chooseCoffeeStyle);
          } else if (reference === 'coffeeTypes') {
            apply(chooseCoffeeType);
          } else if (reference === 'quantities') {
            apply(chooseQuantity);
          } else if (reference === 'grindTypes') {
            apply(chooseGrindOption);
          } else if (reference === 'deliveries') {
            apply(chooseDeliveryFrequency);

            orderSummary();
          }
        }}
        className={`relative flex flex-col md:flex-row gap-4 md:gap-2 lg:gap-6 transition transform 
       scale-y-100 ${
         !collapsed && '-translate-y-10 opacity-0 pointer-events-none'
       } duration-200 ease-in-out -z-1`}>
        {items.map((item, index) => (
          <div
            key={index}
            className="p-6 lg:px-7 lg:pt-8 bg-gray-smooth flex flex-col 
            items-start gap-4 rounded-lg h-[fit-content] hover:text-orange-pale"
            onClick={(e) => {
              const elem = e.currentTarget;
              const parent = e.currentTarget.parentElement.childNodes;

              selectPreference(elem, parent);
            }}>
            <HeadingThree>
              <span className="text-blue-dark">{item.type}</span>
            </HeadingThree>
            <Paragraph>
              <span className="text-blue-dark">{item.info}</span>
            </Paragraph>
          </div>
        ))}
      </div>
    </article>
  );
};

Preference.propTypes = {
  reference: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  items: PropTypes.array.isRequired,
  tilted: PropTypes.bool.isRequired,
  collapsed: PropTypes.bool.isRequired,
  enabled: PropTypes.bool.isRequired,
};

export default Preference;
