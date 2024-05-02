import { faBrain, faFaceGrin, faHockeyPuck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const Logo = () => {
  return (
    <div className="text-3xl text-center py-4 font-heading">
      Auto Blog
      <FontAwesomeIcon icon={faFaceGrin} className="text-2xl text-slate-400" />
      <h5>Use a laptop, monitor or tablet for a better experience.</h5>
    </div>
  );
};
