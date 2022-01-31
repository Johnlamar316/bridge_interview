import {CheckboxSelect} from '../checkbox-select';
import './product-selection.css';
import React, {ChangeEvent, Dispatch, SetStateAction} from 'react';
import {ButtonNext} from 'pure-react-carousel';
import {SELECTIONS} from '../../constants';

interface ProductSelectionProps {
  values: string[];
  setSelections: SetStateAction<Dispatch<any>>;
}
export const ProductSelection = (props: ProductSelectionProps) => {
  const { values: selections, setSelections } = props;

  const onSelection = (
    value: Record<string, any>,
    event: ChangeEvent<HTMLInputElement>
  ) => {
    if (value.checked) {
      setSelections((prevState) => {
        const newState = [...prevState, value.name];
        return newState;
      });
    } else {
      setSelections((prevState) => {
        const newState = prevState.filter((item: string) => item !== value.name);
        return newState;
      });
    }
  };

  const getTotalEstimate = () => {
    const value = SELECTIONS.reduce((acc, curr) => {
      if (selections.includes(curr.name)) {
        return acc + curr.estimate;
      }
      return acc;
    }, 0).toFixed(2);
    return parseFloat(value);
  };

  return (
    <div className={'-flex -w-100 -flex-center -flex-col'}>
      <div className="-selection-container -h-100">
        {SELECTIONS.map((selection) => (
          <CheckboxSelect
            key={selection.name}
            inputProps={{
              name: selection.name
            }}
            estimate={`£${selection.estimate}`}
            label={selection.label}
            onChange={onSelection}
            checked={selections.includes(selection.name)}
          />
        ))}
        <div />
        <div className="-total-estimate -flex -flex-between -flex-a-center">
          <span>Total</span>
          <span className="-total-value">£ {getTotalEstimate()}</span>
        </div>
        <div className="-w-100 -h-100 -flex -flex-center">
          <ButtonNext className="-continue -flex -flex-between -flex-center">
            <div className="-flex -flex-between -flex-center -w-100">
              <span>Continue</span>
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="28"
                  height="28"
                  viewBox="0 0 28 28"
                >
                  <g transform="translate(-575 298) rotate(-90)">
                    <circle
                      className="a"
                      cx="14"
                      cy="14"
                      r="14"
                      fill={'var(--white)'}
                      transform="translate(298 603) rotate(180)"
                    />
                    <path
                      className="b"
                      d="M5,0l5,8H0Z"
                      fill={'var(--red)'}
                      transform="translate(289 594) rotate(180)"
                    />
                  </g>
                </svg>
              </div>
            </div>
          </ButtonNext>
        </div>
      </div>
    </div>
  );
};
