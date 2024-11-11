import Menu from '../../../../components/Academy/Menu/Menu';
import InfoPanel from '../../../../components/Academy/InfoPanel/InfoPanel';
import styles from './PersonalInformation.module.css';
import OverviewInfoForm from '../../../../components/Academy/OverviewInfoForm/OverviewInfoForm';
import PersonalInfoForm from '../../../../components/Academy/PersonalInfoForm/PersonalInfoForm';
import { Link } from 'react-router-dom';

const PersonalInformation = () => {
  return (
    <div className={styles.infoPersonalContainer}>
      <Menu />
      <div className={styles.infoPersonalSideContents}>
        <InfoPanel pageName="Informações do Usuário" section="Gestão de Aluno" color="#F66B0E" />
        <div className={styles.registrationInfoContainer}>
          <div className={styles.registrationMainInformation}>
            <OverviewInfoForm />
            <div className={styles.tabsPersonalInformation}>
              <Link id={styles.tabsGeneralLink} to={'/secretaria/generalInfo'}>
                <h2>Informações Gerais</h2>
              </Link>
              <div className={styles.tabsPersonalInfo}>
                <h2 className={styles.indicationPersonalInfo}>Dados Pessoais</h2>
                <div className={styles.indicationPersonalLine}></div>
              </div>
              <div className={styles.tabsPersonalLine}></div>
            </div>
            <PersonalInfoForm />
            <div className={styles.buttonsPersonalContainer}>
              <button className={styles.buttonPersonalSave}>Salvar</button>
              <button className={styles.buttonPersonalCancel}>Cancelar</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PersonalInformation;
