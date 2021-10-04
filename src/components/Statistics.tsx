import Counter from './Counter';
import './Statistics.css';

export default function Statistics() {
  const userNum = 350;
  const reviewNum = 21;
  const storeNum = 650;
  const duration = 3000;

  return (
    <div className="statistics_text_container fade_in">
      <div>
        <span className="bold">
          <Counter startNumber={0} endNumber={userNum} duration={duration} />만
          명
        </span>
        의 사용자
      </div>
      <div>
        <span className="bold">
          <Counter startNumber={0} endNumber={reviewNum} duration={duration} />
          만 개
        </span>
        의 리뷰
      </div>
      <div>
        <span className="bold">
          <Counter startNumber={0} endNumber={storeNum} duration={duration} />만
          개
        </span>
        의 저장
      </div>
    </div>
  );
}
