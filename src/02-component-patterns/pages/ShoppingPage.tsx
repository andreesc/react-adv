import { ProductButtons, ProductCard, ProductImage, ProductTitle } from "../components";
import "../styles/custom-styles.css";

const product = {
    id: '1',
    title: 'Coffee Mug - Card',
    img: './coffee-mug.png'
};

export const ShoppingPage = () => {
    return (
        <div>
           <h1>Shopping Store</h1> 
           <hr />
           <div style={{
               display: 'flex',
               flexDirection: 'row',
               flexWrap: 'wrap'
           }}>
                <ProductCard 
                    className="bg-dark text-white"
                    product={product}
                >
                    <ProductCard.Image 
                        className="custom-image"
                    />
                    <ProductCard.Title 
                        className="text-bold"
                        title={'a'} 
                    />
                    <ProductCard.Buttons 
                        className="custom-buttons" 
                    />
                </ProductCard>
                <ProductCard 
                    className="bg-dark text-white"
                    product={product} 
                >
                    <ProductImage 
                        className="custom-image"
                    />
                    <ProductTitle 
                        className="text-bold" 
                    />
                    <ProductButtons className="custom-buttons" />
                </ProductCard>

                <ProductCard 
                    product={product} 
                    style={{
                        backgroundColor: '#70D1F8'
                    }}
                >
                    <ProductImage />
                    <ProductTitle 
                        style={{
                        fontWeight: 'lighter'
                        }} 
                    />
                    <ProductButtons style={{
                        display: 'flex',
                        justifyContent: 'end'
                    }}/>
                </ProductCard>
           </div>
        </div>
    )
}
