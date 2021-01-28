import { MouseEventHandler, useState } from "react";
import styles from "styles/components/modalbox.module.scss";

type Props = {
  open: boolean;
  onClose: MouseEventHandler<HTMLDivElement | HTMLButtonElement>;
  children?: React.ReactNode;
};

export default function ModalBox(props: Props) {
  return !props.open ? null : (
    <div className={styles.background}>
      <div className={styles.popup}>
        <div className={styles.close}>
          <div className={styles.btnClose} onClick={props.onClose}>
            &times;
          </div>
        </div>

        <div className={styles.body}>{props.children}</div>

        <div className={styles.action}>
          <button onClick={props.onClose}>OK</button>
        </div>
      </div>
    </div>
  );
}
