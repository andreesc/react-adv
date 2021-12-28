import { ProductButtons, ProductCard, ProductImage, ProductTitle } from "../components";
import { products } from "../data/product";

import "../styles/custom-styles.css";

const product = products[0];

export const ShoppingPage = () => {

    return (
        <div>
           <h1>Shopping Store</h1> 
           <hr />
            <ProductCard 
                key={product.id}
                className="bg-dark text-white"
                product={product}
                initialValues={{
                    count: 4,
                    maxCount: 10,
                }}
            >
                {
                    ({reset, count, maxCount, isMaxCountReached, increaseBy}) => (
                        <>
                            <ProductImage className="custom-image" />
                            <ProductTitle className="text-bold" />
                            <ProductButtons className="custom-buttons" />

                            <button onClick={reset}>Reset</button>
                            <button onClick={() => increaseBy(-2)}>-2</button>
                            {!isMaxCountReached && <button onClick={() => increaseBy(2)}>+2</button>}

                            <span>{count} - {maxCount}</span>
                        </>
                    )
                }
            </ProductCard>
        </div>
    )
}
