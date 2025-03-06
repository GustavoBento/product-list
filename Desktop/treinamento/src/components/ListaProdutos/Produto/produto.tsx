import styles from "./Produto.module.css";
import cart from "assets/images/icon-add-to-cart.svg";

interface Props {
  image: string;
  category: string;
  name: string;
  price: number;
}
export default function Produto({ image, category, name, price }: Props) {
  return (
    <div className={styles.card}>
      <div className={styles.container__image}>
        <img src={image} alt="Imagem do prato" />
        <button className={styles.add__cart}>
          <img src={cart} alt="Ícone do carrinho de compras" /> Add to cart
        </button>
      </div>
      <p className={styles.category}>{category}</p>
      <p className={styles.name}>{name}</p>
      <p className={styles.price}>R${price.toFixed(2)}</p>
    </div>
  );
}
