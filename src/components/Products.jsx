import ProductCard from './ProductCard';
import productData from "../productData.js";
import {useState} from "react";

export default function Products() {
    const [selectedFilter, setSelectedFilter] = useState("All");

    const filteredProducts = selectedFilter === "All"
        ? productData
        : productData.filter(product => product.type === selectedFilter);

    return (
        <section id={"products"} className="products">
            <h1>Products</h1>

            <div className={"filter-bar"}>
                <button onClick={() => setSelectedFilter("All")} className={"filter-button active"}>All</button>
                <button onClick={() => setSelectedFilter("Clothing")} className={"filter-button"}>Clothing</button>
                <button onClick={() => setSelectedFilter("Hats")} className={"filter-button"}>Hats</button>
                <button onClick={() => setSelectedFilter("Cups")} className={"filter-button"}>Cups</button>
            </div>

            <div className="products-container">
                {filteredProducts.map(product=> (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
        </section>
    )
}