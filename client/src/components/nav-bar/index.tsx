import style from './style.module.css';
import { useDataContext } from '../../context/dataContext';
import Button from '../button';

const NavBar = () => {
  const { isToggle, setIsToggle } = useDataContext();

  return (
    <div className={style.layout}>
      <div className={`${style.openPanel} ${!isToggle ? style.hidden : ''}`}>
        <Button
          variant="text"
          btnType="button"
          btnOnClick={() => setIsToggle((prev: any) => !prev)}
        >
          =&gt;
        </Button>
      </div>
      <div className={style.userIcon}></div>
    </div>
  );
};

export default NavBar;
