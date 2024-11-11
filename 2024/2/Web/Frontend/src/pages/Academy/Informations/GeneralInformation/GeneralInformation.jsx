import styles from './GeneralInformation.module.css';
import Menu from '../../../../components/Academy/Menu/Menu';
import InfoPanel from '../../../../components/Academy/InfoPanel/InfoPanel';
import OverviewInfoForm from '../../../../components/Academy/OverviewInfoForm/OverviewInfoForm';
import GeneralInfoForm from '../../../../components/Academy/GeneralInfoForm/GeneralInfoForm';
import { Link } from 'react-router-dom';

const GeneralInformation = () => {
  return (
    <div className={styles.infoGeneralContainer}>
      <Menu />
      <div className={styles.infoGeneralSideContents}>
        <InfoPanel pageName="Informações do Usuário" section="Gestão de Aluno" color="#F66B0E" />
        <div className={styles.registrationInfoContainer}>
          <div className={styles.registrationMainInformation}>
            <OverviewInfoForm />
            <div className={styles.tabsGeneralInformation}>
              <div className={styles.tabsGeneralInfo}>
                <h2 className={styles.indicationGeneralInfo}>Informações Gerais</h2>
                <div className={styles.indicationGeneralLine}></div>
              </div>
              <Link id={styles.tabsPersonalLink} to={'/secretaria/personalInfo'}>
                <h2>Dados Pessoais</h2>
              </Link>
              <div className={styles.tabsGeneralLine}></div>
            </div>
            <GeneralInfoForm />
            <div className={styles.buttonsGeneralContainer}>
              <button className={styles.buttonGeneralSave}>Salvar</button>
              <button className={styles.buttonGeneralCancel}>Cancelar</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GeneralInformation;
