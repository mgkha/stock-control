import styles from "styles/login.module.scss";
import { useState } from "react";
import firebaseAuth from "services/firebase/auth";

export default function Login() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [remember, setRemember] = useState<boolean>(false);

  const handleLogin = () => {
    window.localStorage.setItem("remember", remember.toString());
    firebaseAuth()
      .signInWithEmailAndPassword(email, password)
      .catch((err) => alert(err.code));
  };

  return (
    <div className="container">
      <main className="main">
        <div className={styles.loginForm}>
          <h2>Login</h2>

          <div className={styles.loginInput}>
            <label htmlFor="email">Email:</label>
            <input
              type="text"
              name="email"
              placeholder="example@gmail.com"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className={styles.loginInput}>
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              name="password"
              placeholder="Enter your password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div className={styles.remember}>
            <input
              type="checkbox"
              id="remember"
              onChange={(e) => setRemember(e.target.checked)}
            />
            <label htmlFor="remember">Remember me</label>
          </div>

          <button onClick={handleLogin}>Login</button>
        </div>
      </main>
    </div>
  );
}
