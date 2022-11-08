/* import "./index.css";



export default function Product(props) {
    const {id, name, description, price} = props

    return (
        <div
            key={id}
            className={"product"} >

            
            <h3>{name}</h3>
            <p>{description}</p>
            <span>${price}</span>
            <div>
                <button
                    className="snipper-add-item"
                    data-item-id={id}
                    data-item-name={name}
                    data-item-price={price}
                >
                    Add to Cart
                </button>
            </div>
        </div>
    );
} */