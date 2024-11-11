import styles from './Menu.module.css';
import icons from '../../../assets/images/icons/icons';
import logos from '../../../assets/images/logos/logos';
import { Link } from 'react-router-dom';

const Menu = () => {
  return (
    <div className={styles.menuContainer}>
      <div className={styles.menuLogo}>
        <img src={logos.white.src} id={styles.whiteLogo} alt={logos.white.alt} />
      </div>
      <div className={styles.menuUserInfo}>
        <div id={styles.userImageMenu}></div>
        <p>Academy</p>
      </div>
      <div className={styles.menuConsult}>
        <div className={styles.consultTitle}>
          <Link id={styles.title} to={'/student/query'}>
            <p>Início</p>
          </Link>
          <div id={styles.string}></div>
        </div>
        <div className={styles.consultActions}>
          <div className={styles.consultItems}>
            <img src={icons.dashBoard.src} alt={icons.dashBoard.alt} />
            <Link id={styles.items} to={'/student/query/absence'}>
              <p>Dashboard</p>
            </Link>
          </div>
        </div>
      </div>
      <div className={styles.menuRegistration}>
        <div className={styles.registryTitle}>
          <p>Matrícula</p>
          <div id={styles.string}></div>
        </div>
        <div className={styles.registryActions}>
          <div className={styles.registryItems}>
            <img src={icons.professor.src} alt={icons.professor.alt} />
            <p>Gestão de Professores</p>
          </div>
          <div className={styles.registryItems}>
            <img src={icons.aluno.src} alt={icons.aluno.alt} />
            <p>Gestão de Alunos</p>
          </div>
          <div className={styles.registryItems}>
            <img src={icons.book.src} alt={icons.book.alt} />
            <p>Gestão de Turmas</p>
          </div>
        </div>
      </div>
      <div id={styles.string2}></div>
      <div className={styles.menuActions}>
        <div className={styles.menuActionsImg}>
          <img src={icons.gear.src} alt={icons.gear.alt} />
          <p>Configurações</p>
        </div>
        <div className={styles.menuActionsImg}>
          <img src={icons.quit.src} alt={icons.quit.alt} />
          <p>Sair</p>
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default Menu;
