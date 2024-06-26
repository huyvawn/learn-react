function Productlist(){
const products = [
    {
      pic:product1,
      productName: "Product 1",
      productPrice:19.99,
      rating:5,
      discount:10,
      sale:true,
    },
    {
      pic:product2,
      productName: "Product 2",
      productPrice:29.99,
      rating:4.5,
      discount:20,
      sale:false,
      }, 
      {
        pic:product1,
        productName:"Product 3",
        productPrice:50,
        rating:3,
        discount:50,
        sale:true,
      },
      {
        pic:product2,
        productName:"Product 4",
        productPrice:100,
        rating:5,
        discount:40,
        sale:true,
      }
  ];
  
  return(
    <div className="App">
      <h1>Our Products</h1>
      <h2>Sale</h2>
      {products.map((product) =>(
        <Product pic={product.pic} productName={product.productName}
        productPrice={product.productPrice} discount={product.discount}
        sale = {product.sale} rating = {product.rating} />
      ))}
      <a href="#">View Options</a>
      <br />
      <a href="#">Sale</a>
      <br />
    </div>
  );
  }
  
  function Product({pic,productName,productPrice,sale,discount,rating}){
    var salePrice= productPrice;
    if (sale==true) {
      salePrice -= productPrice*discount*0.01;
      
    }
    return(
      <section>
        <img className="user-profile-pic" src={pic} alt="productImage" />
        <h2 className="user-name">{productName}</h2>
        <p>${productPrice}</p>
        <p>${salePrice}</p>
        <button>Add to Cart</button>
      </section>
    );
}