interface Props {
  image: string;
  category: string;
  name: string;
  price: number;
}
export default function Produto({image, category, name, price}: Props) {

  return (
    <div >
      <img src={image} alt="Imagem do prato" />
      <p>{category}</p>
      <p>{name}</p>
      <p>R${price.toFixed(2)}</p>
    </div>
  )
}