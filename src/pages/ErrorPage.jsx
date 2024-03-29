
import styles from "../styles/error.module.css"
import Error from "../images/error-100.png";

import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();
  console.error(error);

  return (
    <div className={styles.errorPage}>
      <h1>Oops!</h1>
      <p>Sorry, something runs in deep shits...</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
      <img src={Error} alt="error" />
    </div>
  );
};

export default ErrorPage;