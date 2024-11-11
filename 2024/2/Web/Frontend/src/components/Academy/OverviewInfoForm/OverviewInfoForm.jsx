import styles from './OverviewInfoForm.module.css';
import image from '../../../assets/images/general/general';

const OverviewInfoForm = () => {
  return (
    <div className={styles.registrationInfoOverview}>
      <div className={styles.registrationInfoOverviewImg}>
        <img src={image.profile.src} alt={image.profile.alt} className={styles.profile} />
      </div>
      <div className={styles.registrationInfoFormContainer}>
        <form className={styles.registrationOverviewForm}>
          <div className={styles.registrationFormInfo}>
            <div className={styles.registrationFormRow}>
              <label className={styles.registrationLbl}>Nome Completo</label>
              <input
                type="text"
                name="nameStudent"
                placeholder="Nome Teste"
                className={styles.registrationInpName}
                disabled
              />
            </div>
            <div className={styles.registrationFormRow}>
              <label className={styles.registrationLbl}>Matrícula</label>
              <input
                type="number"
                name="registration"
                placeholder="01234567"
                className={styles.registrationInpInformation}
                disabled
              />
            </div>
          </div>
          <div className={styles.registrationFormInfo}>
            <div className={styles.registrationFormRow}>
              <label className={styles.registrationLbl}>Data de Admissão</label>
              <input
                type="date"
                name="dateRegistration"
                placeholder="20/07/2024"
                className={styles.registrationInpInformation}
                disabled
              />
            </div>
            <div className={styles.registrationFormRow}>
              <label className={styles.registrationLbl}>Frequência</label>
              <input
                type="number"
                name="frequency"
                placeholder="66%"
                className={styles.registrationInpInformation}
                disabled
              />
            </div>
            <div className={styles.registrationFormRow}>
              <label className={styles.registrationLbl}>Status</label>
              <select className={styles.registrationInpInformation} disabled>
                <option value="Status">Status</option>
                <option value="Ativo">Ativo</option>
                <option value="Inativo">Inativo</option>
                <option value="Trancado">Trancado</option>
              </select>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default OverviewInfoForm;