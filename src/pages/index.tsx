import styles from "styles/index.module.scss";
import Link from "next/link";
import firebase from "firebase";
import firebaseAuth from "services/firebase/auth";

interface IProps {
  auth: firebase.User;
}

export default function Index(props: IProps) {
  return (
    <div className="container">
      <main className="main">
        <h1 className={styles.title}>Welcome!</h1>
        <h2 className={styles.user}>{props.auth.displayName || "Anonymous"}</h2>
        <div className={styles.action}>
          <Link href="/take">
            <a className={styles.takeout}>Register to takeout</a>
          </Link>
          <button
            className={styles.logout}
            onClick={() => firebaseAuth().signOut()}
          >
            Logout
          </button>
        </div>
      </main>
    </div>
  );
}
