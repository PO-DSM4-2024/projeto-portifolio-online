import styles from './PersonalInfoForm.module.css';

const PersonalInfoForm = () => {
  return (
    <div className={styles.registrationInfoPersonal}>
      <div className={styles.registrationPersonalFormContainer}>
        <form className={styles.registrationPersonalForm}>
          <div className={styles.registrationFormPersonal}>
            <div className={styles.registrationPersonalFormRow}>
              <label className={styles.registrationPersonalLbl}>RG</label>
              <input
                type="text"
                name="rgStudent"
                placeholder="RG"
                className={styles.registrationInpPersonalInfo}
                disabled
              />
            </div>
            <div className={styles.registrationPersonalFormRow}>
              <label className={styles.registrationPersonalLbl}>CPF</label>
              <input
                type="text"
                name="cpfStudent"
                placeholder="CPF"
                className={styles.registrationInpPersonalInfo}
                disabled
              />
            </div>
            <div className={styles.registrationPersonalFormRow}>
              <label className={styles.registrationPersonalLbl}>Data Nascimento</label>
              <input
                type="date"
                name="birthday"
                placeholder="01234567"
                className={styles.registrationInpPersonalInfo}
                disabled
              />
            </div>
          </div>
          <div className={styles.registrationFormPersonal}>
            <div className={styles.registrationPersonalFormRow}>
              <label className={styles.registrationPersonalLbl}>Gênero</label>
              <select className={styles.registrationInpPersonalInfo} disabled>
                <option value="Status">Gênero</option>
                <option value="Female">Feminino</option>
                <option value="Male">Masculino</option>
              </select>
            </div>
            <div className={styles.registrationPersonalFormRow}>
              <label className={styles.registrationPersonalLbl}>Telefone</label>
              <input
                type="text"
                name="telephone"
                placeholder="(00) 00000-0000"
                className={styles.registrationInpPersonalInfo}
                disabled
              />
            </div>
            <div className={styles.registrationPersonalFormRow}>
              <label className={styles.registrationPersonalLbl}>Endereço</label>
              <input
                type="text"
                name="address"
                placeholder="Endereço"
                className={styles.registrationInpPersonalInfo}
                disabled
              />
            </div>
          </div>
          <div className={styles.registrationFormPersonal}>
            <div className={styles.registrationPersonalFormRow}>
              <label className={styles.registrationPersonalLbl}>E-mail Institucional</label>
              <input
                type="text"
                name="email"
                placeholder="E-mail Institucional"
                className={styles.registrationInpPersonalInfo}
                disabled
              />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PersonalInfoForm;
