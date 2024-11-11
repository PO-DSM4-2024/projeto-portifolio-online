import styles from './InfoPanel.module.css';
import logos from '../../../assets/images/logos/logos';
import icons from '../../../assets/images/icons/icons';
import { Link } from 'react-router-dom';

const InfoPanel = ({ pageName, section, color }) => {
  return (
    <div className={styles.homeHeader} style={{ borderBottom: `10px solid ${color}` }}>
      <div className={styles.homeHeaderTitleContainer}>
        <Link className={styles.homeHeaderImg} to={'/secretaria/register'}>
          <img src={icons.backArrow.src} alt={icons.backArrow.alt} />
        </Link>
        <div className={styles.homeHeaderText}>
          <h1>{pageName}</h1>
          <span className={styles.sec}>{section}</span>
        </div>
      </div>
      <img className={styles.homeLogo} src={logos.banner.src} alt={logos.banner.alt} />
    </div>
  );
};

export default InfoPanel;