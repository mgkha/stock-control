import "styles/globals.scss";
import Head from "next/head";
import styles from "styles/app.module.scss";
import { AuthProvider } from "hooks/auth";
import PrivateRoute from "components/PrivateRoute";
import { AppProps } from "next/app";
import { LoadingProvider } from "hooks/loading";

function App({ Component, pageProps }: AppProps): JSX.Element {
  Component = PrivateRoute(Component);

  return (
    <div className={styles.app}>
      <Head>
        <meta name="theme-color" content="#6d1303"></meta>
        <title>Stock Control</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className={styles.header}>
        <div className={styles.navWrap}>
          <div className={styles.nav}>
            <span className={styles.appName}>Stock Control</span>
          </div>
        </div>
      </header>

      <LoadingProvider>
        <AuthProvider>
          <Component {...pageProps} />
        </AuthProvider>
      </LoadingProvider>

      <footer className={styles.footer}>
        <span>Designed by KHA</span>
      </footer>
    </div>
  );
}

export default App;
