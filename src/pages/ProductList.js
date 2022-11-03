import { request } from "../common/shoppingData";
import Products from "../components/Products";
import product from "../../product.json";

export default function ProductList({ $target }) {
  const $page = document.createElement("div");
  $page.className = "ProductList";
  $page.innerHTML = "<h1>상품 목록</h1>";

  this.render = () => {
    $target.appendChild($page);
  };

  this.setState = (nextState) => {
    this.state = nextState;
  };

  const fetchProducts = () => {
    // const products = await request("/products");
    const products = product;
    console.log(products);
    this.setState(products);
    console.log(this.state);
    return products;
  };

  fetchProducts();
  const productLists = new Products({
    $target: $page,
    initialState: this.state,
  });
}
