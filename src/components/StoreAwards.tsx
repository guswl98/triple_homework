import { strings } from 'constants/strings';
import '../styles/StoreAwards.css';

export default function StoreAwards() {
  return (
    <div className="store_awards fade_in">
      <div className="store_img play_store_img bold">
        <span>
          {strings.playStoreAwardYear} 구글 플레이스토어 <br />
          올해의 앱 최우수상 수상
        </span>
      </div>
      <div className="store_img app_store_img bold">
        <span>
          {strings.appStoreAwardYear} 애플 앱스토어 <br />
          오늘의 여행앱 선정
        </span>
      </div>
    </div>
  );
}
