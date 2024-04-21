import { faBrain, faFaceGrin, faHockeyPuck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const Logo = () => {
  return (
    <div className="text-3xl text-center py-4 font-heading">
      Hobby Blog
      <FontAwesomeIcon icon={faFaceGrin} className="text-2xl text-slate-400" />
    </div>
  );
};
