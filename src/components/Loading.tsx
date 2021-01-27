import styles from "styles/components/loading.module.scss";

export default function Loading() {
  return (
    <div className={styles.loading}>
      <img src="/loading.svg" />
      <span>Please wait</span>
    </div>
  );
}
