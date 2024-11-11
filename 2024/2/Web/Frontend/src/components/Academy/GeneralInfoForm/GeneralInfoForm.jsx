import styles from './GeneralInfoForm.module.css';

const GeneralInfoForm = () => {
  return (
    <div className={styles.registrationInfoGeneral}>
      <div className={styles.registrationGeneralFormContainer}>
        <form className={styles.registrationGeneralForm}>
          <div className={styles.registrationFormGeneral}>
            <div className={styles.registrationFormGeneralColumn}>
              <div className={styles.registrationGeneralFormRow}>
                <label className={styles.registrationGeneralLbl}>Curso</label>
                <input
                  type="text"
                  name="degree"
                  placeholder="DSM - Desenvolvimento de Software Multiplataforma"
                  className={styles.registrationInpGeneralInfo}
                  disabled
                />
              </div>
              <div className={styles.registrationGeneralFormRow}>
                <label className={styles.registrationGeneralLbl}>Turma</label>
                <input
                  type="text"
                  name="class"
                  placeholder="3º Semestre"
                  className={styles.registrationInpGeneralInfo}
                  disabled
                />
              </div>
            </div>
            <div className={styles.registrationGeneralFormRow}>
              <label className={styles.registrationGeneralLbl}>Matéria</label>
              <textarea
                type="text"
                name="subject"
                placeholder="3DSM - Gestão Agil de Projetos de Software, Banco de Dados não Relacional, Interação Humano Computador, Tecnica de Programação II, Ingles I, Desenvolvimento Web III, Álgebra Linear"
                className={styles.registrationInpGeneralInfoArea}
                disabled
              />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default GeneralInfoForm;
