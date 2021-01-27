import styles from "styles/take.module.scss";
import IProduct from "types/product";

interface Prop {
  index: number;
  product: IProduct;
  stockList: string[];
  onRemoveProduct: React.MouseEventHandler<HTMLButtonElement>;
  onChangeProductName: React.ChangeEventHandler<HTMLSelectElement>;
  onChangeProductQty: React.ChangeEventHandler<HTMLInputElement>;
}

export default function Product(props: Prop) {
  return (
    <div className={styles.card}>
      <div className={styles.cardHeader}>
        <span>{props.index}</span>
        <button onClick={props.onRemoveProduct}>&times;</button>
      </div>
      <div className={styles.cardBody}>
        <div className={styles.productName}>
          <select
            className={styles.productSelect}
            value={props.product.productName}
            onChange={props.onChangeProductName}
          >
            <option hidden>Choose a product</option>
            {props.stockList.map((value, key) => (
              <option key={key} value={value}>
                {value}
              </option>
            ))}
          </select>
        </div>
        <div className={styles.productQty}>
          <label>Quantity:</label>
          <input
            type="number"
            step="1"
            value={props.product.productQty}
            onChange={props.onChangeProductQty}
          />
        </div>
      </div>
    </div>
  );
}
