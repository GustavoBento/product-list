import styles from "./listaProdutos.module.css";
import produtos from "data/data.json";
import Produto from "./Produto/produto";

export default function ListaProdutos() {
  
  return (
    <section className={styles.container}>
      <h2>Desserts</h2>
      <div>
        {produtos.map((produto) => {
          return <Produto key={produto.id}  image={produto.image.mobile} category={produto.category} name={produto.name} price={produto.price}  />
        })}
      </div>
    </section>
  )
}