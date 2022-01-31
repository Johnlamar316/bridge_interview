import {ButtonBack, ButtonNext} from 'pure-react-carousel';
import './input-slide.css';
import {FormEvent} from 'react';
import {formatNumber} from '../../utils';

interface InputSlideProps {
  question: string;
  onValueChange: (value: string) => void;
  index: number;
  total: number;
  value: string[];
  setValue: (value: string) => void;
}
export const InputSlide = (props: InputSlideProps) => {
  const { question, onValueChange, index, total, value, setValue } = props;

  // FORMATTING THE INPUT STILL HAS MORE WORK TO BE DONE
  const onInput = (e: FormEvent<HTMLInputElement>) => {
    const target = e.target as HTMLInputElement;
    //resetting to unformatted string
    let intrinsicValue = target.value?.replace(/,/g, '') || '';

    const value = formatNumber(intrinsicValue);

    if (target.value?.trim() === '' || !target.value) {
      onValueChange('0');
      setValue('');
      return;
    }

    setValue(value);

    if (isNaN(Number(intrinsicValue))) {
      onValueChange('0');
      return;
    } else {
      onValueChange(intrinsicValue);
    }
  };

  const onBlur = (e: FormEvent<HTMLInputElement>) => {
    const target = e.target as HTMLInputElement;
    let intrinsicValue = target.value?.replace(/,/g, '') || '';
    if (isNaN(Number(intrinsicValue))) {
      onValueChange('0');
      setValue('');
      return;
    }
  };
  return (
    <div className={'-flex -w-100 -flex-center -flex-col -input-slide'}>
      <div className="-flex -h-100 -flex-between" style={{ width: '80vw' }}>
        <div className="-question-wrapper">
          <div className={'-flex -flex-a-center -flex-between'}>
            <ButtonBack className={'-input-btn'}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="11.621"
                height="20.243"
                viewBox="0 0 11.621 20.243"
              >
                <path
                  stroke={'var(--white)'}
                  fill={'none'}
                  strokeWidth={3}
                  strokeLinecap={'round'}
                  strokeLinejoin={'round'}
                  d="M9,5l8,8L9,21"
                  transform="translate(18.5 23.121) rotate(180)"
                />
              </svg>
            </ButtonBack>
            <div className="-question">
              <h2 className="-question-text">{question}</h2>
              <span>
                <b>{index + 1}</b> of <b>{total}</b>
              </span>
            </div>
            <ButtonNext className={'-input-btn'}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="11.621"
                height="20.243"
                viewBox="0 0 11.621 20.243"
              >
                <path
                  stroke={'var(--white)'}
                  fill={'none'}
                  strokeWidth={3}
                  strokeLinecap={'round'}
                  strokeLinejoin={'round'}
                  className="a"
                  d="M9,5l8,8L9,21"
                  transform="translate(-6.879 -2.879)"
                />
              </svg>
            </ButtonNext>
          </div>
        </div>
        <div className="-input-wrapper">
          <input
            placeholder={'Enter value'}
            value={value}
            type={'text'}
            onChange={onInput}
            onBlur={onBlur}
          />
        </div>
      </div>
    </div>
  );
};
