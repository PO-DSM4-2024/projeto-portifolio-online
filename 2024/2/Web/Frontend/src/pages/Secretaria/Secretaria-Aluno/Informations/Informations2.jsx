import Menu from '../../../components/Secretaria/Menu/Menu';
import Panel from '../../../components/Panel/Panel';
import icons from '../../../assets/images/icons/icons';
import image from '../../../assets/images/general/general';
import styles from './Informations2.module.css';

const PersonalInfo = () => {
  return (
    <div className={styles.homeContainer}>
      <Menu />
      <div className={styles.homeSideContents}>
        <img src={icons.backArrow.src} alt={icons.backArrow.alt} className={styles.back} />
        <Panel pageName="Informações do Usuário" section="Gestão de Aluno" color="#F66B0E" />
        <div className={styles.homeInfo}>
          <div className={styles.homeInfoTop}>
            <div className={styles.homeProfileStudent}>
              <img src={image.profile.src} alt={image.profile.alt} className={styles.profile} />

              <form className={styles.basicinfo}>
                <label className={styles.lblName}>Nome</label>
                <img src={icons.userEmpty.src} alt={icons.userEmpty.alt} className={styles.inpIcon} />
                <input type="text" name="name" placeholder="Nome Teste" className={styles.inpNam} disabled />
                <label className={styles.lblMat}>Matrícula</label>
                <img src={icons.edit.src} alt={icons.edit.alt} className={styles.inpIcon2} />
                <input type="text" name="matricula" placeholder="0123456789" className={styles.inpMat} disabled />
                <label className={styles.datAdm}>Data de Admissão</label>
                <input type="date" className={styles.inpData} disabled />
                <label className={styles.fre}>Frequência</label>
                <input type="text" placeholder="66%" className={styles.inpFre} disabled />
                <label className={styles.sta}>Status</label>
                <select className={styles.sts} disabled>
                  <option value="Status">Status</option>
                  <option value="Ativo">Ativo</option>
                  <option value="Inativo">Inativo</option>
                  <option value="Trancado">Trancado</option>
                </select>
              </form>
              <div className={styles.indication}>
                <h2 className={styles.normalName}>Informações Gerais</h2>
              </div>
              <div className={styles.line}></div>
              <h2 className={styles.indicatioName}>Dados Pessoais</h2>
              <div className={styles.indicationline}></div>

              <form className={styles.geral}>
                <label className={styles.lblRg}>RG</label>
                <input type="text" placeholder="RG" className={styles.rg} disabled />
                <label className={styles.lblCpf}>CPF</label>
                <input type="text" placeholder="CPF" className={styles.cpf} disabled />
                <label className={styles.datNasc}>Data de Nascimento</label>
                <input type="date" className={styles.inpDat} disabled />
                <label className={styles.lblgen}>Gênero</label>
                <select className={styles.gen} disabled>
                  <option value="Gênero">Gênero</option>
                  <option value="Masculino">Masculino</option>
                  <option value="Feminino">Feminino</option>
                </select>
                <label className={styles.lblTelefone}>Telefone</label>
                <input type="text" placeholder="Telefone" className={styles.telefone} disabled />
                <label className={styles.lblEnd}>Endereço</label>
                <input type="text" placeholder="Endereço" className={styles.endereco} disabled />
                <label className={styles.lblEma}>Email Institucional</label>
                <input type="text" placeholder="Email" className={styles.email} disabled />
                <button className={styles.btnSalvar}>Salvar</button>
                <button className={styles.btnCancelar}>Cancelar</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PersonalInfo;
