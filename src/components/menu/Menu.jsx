import MenuItem from "../menuItem/MenuItem";
import styles from "./menu.module.css";
import useRegisterModal from "../../hooks/useRegisterModal";

function Menu() {
  const registerModal = useRegisterModal();
  return (
    <menu className={styles.menu}>
      <MenuItem name="My Trips" />
      <MenuItem name="My Favorites" />
      <MenuItem name="My Accomudations" />
      <MenuItem name="Account" />
      <MenuItem name="Airbnb your home" />
      <MenuItem name="Help Center" />
      <MenuItem name="Log in" to="/login" onClick={() => {}} />
      <MenuItem name="Sign up" onClick={registerModal.onOpen} />
      <MenuItem name="Log out" />
    </menu>
  );
}

export default Menu;
