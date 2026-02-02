export default function ProductCard( { product } ) {

    return (
        <>
            <div className="product-card">
                <div className="product-image">
                    <img src={product.img.src} alt={product.img.alt} />
                </div>
                <div className="product-details">
                    <h3 className="product-name">{product.title}</h3>
                    <p className="product-price">{product.price}</p>
                    <button className="add-to-cart">Add To Cart</button>
                </div>
            </div>
        </>
    )
}