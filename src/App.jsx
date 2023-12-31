import "./App.css";

function App() {
  return (
    <div>
      <nav className="bg-[#171C2A] py-4">
        <div className="navBar">
          <a href="index.html">
            <img src="./images/logo.png" alt="LWS" className="max-w-[140px]" />
          </a>

          <div className="flex gap-4">
            <a href="#home" className="navHome" id="lws-home">
              {" "}
              Home{" "}
            </a>
            <a href="cart.html" className="navCart" id="lws-cart">
              <i className="text-xl fa-sharp fa-solid fa-bag-shopping"></i>
              <span id="lws-totalCart">0</span>
            </a>
          </div>
        </div>
      </nav>
      <main className="py-16">
        <div className="productWrapper">
          <div className="productContainer" id="lws-productContainer">
            <div className="lws-productCard">
              <img
                className="lws-productImage"
                src="https://i.dummyjson.com/data/products/59/thumbnail.jpg"
                alt="product"
              />
              <div className="p-4 space-y-2">
                <h4 className="lws-productName">Spring and summershoes</h4>
                <p className="lws-productCategory">Mens shoes</p>
                <div className="flex items-center justify-between pb-2">
                  <p className="productPrice">
                    BDT <span className="lws-price">400</span>
                  </p>
                  <p className="productQuantity">
                    QTY <span className="lws-quantity">10</span>
                  </p>
                </div>
                <button className="lws-btnAddToCart">Add To Cart</button>
              </div>
            </div>

            <div className="lws-productCard">
              <img
                className="lws-productImage"
                src="https://i.dummyjson.com/data/products/40/thumbnail.jpg"
                alt="product"
              />
              <div className="p-4 space-y-2">
                <h4 className="lws-productName">Women Winter Clothes</h4>
                <p className="lws-productCategory">Tops</p>
                <div className="flex items-center justify-between pb-2">
                  <p className="productPrice">
                    BDT <span className="lws-price">100</span>
                  </p>
                  <p className="productQuantity">
                    QTY <span className="lws-quantity">30</span>
                  </p>
                </div>
                <button className="lws-btnAddToCart">Add To Cart</button>
              </div>
            </div>
          </div>
          <div>
            <div className="formContainer">
              <h4 className="formTitle">Add New Product</h4>
              <form
                className="space-y-4 text-[#534F4F]"
                id="lws-addProductForm"
              >
                <div className="space-y-2">
                  <label htmlFor="lws-inputName">Product Name</label>
                  <input
                    className="addProductInput"
                    id="lws-inputName"
                    type="text"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="lws-inputCategory">Category</label>
                  <input
                    className="addProductInput"
                    id="lws-inputCategory"
                    type="text"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="lws-inputImage">Image Url</label>
                  <input
                    className="addProductInput"
                    id="lws-inputImage"
                    type="text"
                    required
                  />
                </div>
                <div className="grid grid-cols-2 gap-8 pb-4">
                  <div className="space-y-2">
                    <label htmlFor="ws-inputPrice">Price</label>
                    <input
                      className="addProductInput"
                      type="number"
                      id="lws-inputPrice"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="lws-inputQuantity">Quantity</label>
                    <input
                      className="addProductInput"
                      type="number"
                      id="lws-inputQuantity"
                      required
                    />
                  </div>
                </div>
                <button type="submit" id="lws-inputSubmit" className="submit">
                  Add Product
                </button>
              </form>
            </div>
          </div>
        </div>
      </main>
      <main className="py-16">
        <div className="container 2xl:px-8 px-2 mx-auto">
          <h2 className="mb-8 text-xl font-bold">Shopping Cart</h2>
          <div className="cartListContainer">
            <div className="space-y-6">
              <div className="cartCard">
                <div className="flex items-center col-span-6 space-x-6">
                  <img
                    className="lws-cartImage"
                    src="https://i.dummyjson.com/data/products/40/thumbnail.jpg"
                    alt="product"
                  />
                  <div className="space-y-2">
                    <h4 className="lws-cartName">
                      Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptop
                    </h4>
                    <p className="lws-cartCategory">Men&apos;s clothing</p>
                    <p>
                      BDT <span className="lws-cartPrice">1100</span>
                    </p>
                  </div>
                </div>
                <div className="flex items-center justify-center col-span-4 mt-4 space-x-8 md:mt-0">
                  <div className="flex items-center space-x-4">
                    <button className="lws-incrementQuantity">
                      <i className="text-lg fa-solid fa-plus"></i>
                    </button>
                    <span className="lws-cartQuantity">2</span>
                    <button className="lws-decrementQuantity">
                      <i className="text-lg fa-solid fa-minus"></i>
                    </button>
                  </div>
                  <p className="text-lg font-bold">
                    BDT <span className="lws-calculatedPrice">2200</span>
                  </p>
                </div>
                <div className="flex items-center justify-center col-span-2 mt-4 md:justify-end md:mt-0">
                  <button className="lws-removeFromCart">
                    <i className="text-lg text-red-400 fa-solid fa-trash"></i>
                  </button>
                </div>
              </div>
            </div>

            <div>
              <div className="billDetailsCard">
                <h4 className="mt-2 mb-8 text-xl font-bold text-center">
                  Bill Details
                </h4>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <p>Sub Total</p>
                    <p>
                      BDT <span className="lws-subtotal">8800</span>
                    </p>
                  </div>
                  <div className="flex items-center justify-between">
                    <p>Discount</p>
                    <p>
                      BDT <span className="lws-discount">0</span>
                    </p>
                  </div>
                  <div className="flex items-center justify-between">
                    <p>VAT</p>
                    <p>
                      BDT <span className="vat">0</span>
                    </p>
                  </div>
                  <div className="flex items-center justify-between pb-4">
                    <p className="font-bold">TOTAL</p>
                    <p className="font-bold">
                      BDT <span className="lws-total">8800</span>
                    </p>
                  </div>
                  <button className="placeOrderbtn">place order</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
