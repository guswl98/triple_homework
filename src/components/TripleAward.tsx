import { strings } from 'constants/strings';
import '../styles/TripleAward.css';

export default function TripleAward() {
  return (
    <div className="award_logo fade_in">{strings.currentYear}년 5월 기준</div>
  );
}
