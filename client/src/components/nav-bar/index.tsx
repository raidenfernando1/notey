import style from './style.module.css';
import { useDataContext } from '../../context/dataContext';

const NavBar = () => {
  const { isToggle, setIsToggle } = useDataContext();

  return (
    <div className={style.layout}>
      <div className={`${style.openPanel} ${!isToggle ? style.hidden : ''}`}>
        <button onClick={() => setIsToggle((prev: any) => !prev)}>-&gt;</button>
      </div>
      <div className={style.userIcon}></div>
    </div>
  );
};

export default NavBar;
