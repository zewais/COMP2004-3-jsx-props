// This component is used to display the product card. It takes the following props:
// name: The name of the product
// price: The price of the product
// image: The image of the product
// sale: A boolean value that determines whether the product is on sale or not
export default function Card(props) {
  return (
    <div className={props.sale ? "card card-sale" : "card"}>
      <h1>{props.name}</h1>
      <img src={props.image} alt="" className="image" />
      <h2>{props.price}</h2>
      {
        props.sale ? <h3 style={{ color: "red" }}>Sale</h3> : <h3>&nbsp;</h3> //Using and h3 with a space special character to make all cards align
      }
      <button>Buy Now!</button>
    </div>
  );
}
