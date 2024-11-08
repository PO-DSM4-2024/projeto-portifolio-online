import Menu from '../../../components/Secretaria/Menu/Menu';
import Panel from '../../../components/Panel/Panel';
import icons from '../../../assets/images/icons/icons';
import styles from './Register.module.css';

const Registrations = () => {
  return (
    <div className={styles.homeContainer}>
      <Menu />
      <div className={styles.homeSideContents}>
        <Panel pageName="Painel da Secretaria" section="Matrículas" color="#F66B0E" />
        <div className={styles.homeInfo}>
          <div className={styles.homeInfoTop}>
            <div className={styles.homeProfileStudent}>
              <div className={styles.cardTitle}>
                <p>Gestão de Alunos</p>
              </div>
              <div className={styles.line}></div>
              <div className={styles.searchBar}>
                <button className={styles.search}>
                  <img src={icons.search.src} alt={icons.search.alt} className={styles.ima} />
                </button>
                <input type="search" placeholder="Pesquisar aluno" />
              </div>
              <div className={styles.inputGroup}>
                <select className={styles.selectTurma}>
                  <option value="Turmas">TURMAS</option>
                  <option value="1DSM">1 DSM</option>
                  <option value="2DSM">2 DSM</option>
                  <option value="3DSM">3 DSM</option>
                  <option value="4DSM">4 DSM</option>
                  <option value="5DSM">5 DSM</option>
                  <option value="6DSM">6 DSM</option>
                </select>
              </div>
              <div className={styles.inputGroup}>
                <select className={styles.selectCurso}>
                  <option value="Curso">CURSO</option>
                  <option value="DSM">Desenvolvimento de Software Multiplataforma</option>
                  <option value="GE">Gestão Empresarial</option>
                </select>
              </div>
              <button type="submit" className={styles.matricularButton}>
                + Matricular
              </button>

              <table className={styles.matriculaTable}>
                <thead>
                  <tr>
                    <th>Nome</th>
                    <th>Status</th>
                    <th>Curso</th>
                    <th>Cadastro</th>
                    <th>Termíno</th>
                    <th>Opções</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className={styles.studentInfo2}>
                      <img src={icons.user.src} alt={icons.user.alt} className={styles.avatar} />
                      <span>Nome Completo 1</span>
                    </td>
                    <td className={styles.status1}>
                      <span>Ativo</span>
                    </td>
                    <td>
                      <span>DSM</span>
                    </td>
                    <td>
                      <span>05/03/2022</span>
                    </td>
                    <td>
                      <span>22/12/2024</span>
                    </td>
                    <td>
                      <span className={styles.options}>
                        <img src={icons.edit.src} alt={icons.edit.alt} />
                      </span>
                      <span className={styles.options}>
                        <img src={icons.trash.src} alt={icons.trash.alt} />
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td className={styles.studentInfo2}>
                      <img src={icons.user.src} alt={icons.user.alt} className={styles.avatar} />
                      <span>Nome Completo 2</span>
                    </td>
                    <td className={styles.status2}>
                      <span>Trancado</span>
                    </td>
                    <td>
                      <span>DSM</span>
                    </td>
                    <td>
                      <span>05/03/2023</span>
                    </td>
                    <td>
                      <span>22/12/2025</span>
                    </td>
                    <td>
                      <span className={styles.options}>
                        <img src={icons.edit.src} alt={icons.edit.alt} />
                      </span>
                      <span className={styles.options}>
                        <img src={icons.trash.src} alt={icons.trash.alt} />
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td className={styles.studentInfo2}>
                      <img src={icons.user.src} alt={icons.user.alt} className={styles.avatar} />
                      <span>Nome Completo 3</span>
                    </td>
                    <td className={styles.status3}>
                      <span>Inativo</span>
                    </td>
                    <td>
                      <span>DSM</span>
                    </td>
                    <td>
                      <span>05/03/2024</span>
                    </td>
                    <td>
                      <span>22/12/2026</span>
                    </td>
                    <td>
                      <span className={styles.options}>
                        <img src={icons.edit.src} alt={icons.edit.alt} />
                      </span>
                      <span className={styles.options}>
                        <img src={icons.trash.src} alt={icons.trash.alt} />
                      </span>
                    </td>
                  </tr>
                </tbody>
              </table>
              <p className={styles.foot}>Total de 10 Registros</p>
              <div className={styles.pages}>
                <p className={styles.page1}>1</p>
                <p className={styles.page2}>2</p>
                <img src={icons.arrow.src} alt={icons.arrow.alt} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Registrations;
