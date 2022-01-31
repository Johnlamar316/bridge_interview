import {ButtonFirst} from 'pure-react-carousel'
import './feedback.css';

interface FeedbackProps {
  restart: () => void;
}
export const Feedback = (props: FeedbackProps) => {
  const { restart } = props;
  return (
    <div className={'-flex -feedback -w-100 -flex-center -flex-col'}>
      <p>
        Thank you for using the Bridge Sales Enablement Agency calculator. A
        representative will be in touch with you soon.
      </p>
      <ButtonFirst
        className={'-restart-btn -btn -flex -flex-center'}
        onClick={restart}
      >
        <span>Restart</span>
      </ButtonFirst>
    </div>
  );
};
