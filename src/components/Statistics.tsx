import Counter from './common/Counter';
import '../styles/Statistics.css';

export default function Statistics() {
  const userNum = 350;
  const reviewNum = 21;
  const storeNum = 650;

  const getDuration = (startNumber: number, endNumber: number): number => {
    return (endNumber - startNumber).toString().length * 800;
  };

  const userDuration: number = getDuration(0, userNum);
  const reviewDuration: number = getDuration(0, reviewNum);
  const storeDuration: number = getDuration(0, storeNum);

  return (
    <div className="statistics_text_container fade_in">
      <div>
        <span className="bold">
          <Counter
            startNumber={0}
            endNumber={userNum}
            duration={userDuration}
          />
          만 명
        </span>
        의 사용자
      </div>
      <div>
        <span className="bold">
          <Counter
            startNumber={0}
            endNumber={reviewNum}
            duration={reviewDuration}
          />
          만 개
        </span>
        의 리뷰
      </div>
      <div>
        <span className="bold">
          <Counter
            startNumber={0}
            endNumber={storeNum}
            duration={storeDuration}
          />
          만 개
        </span>
        의 저장
      </div>
    </div>
  );
}
