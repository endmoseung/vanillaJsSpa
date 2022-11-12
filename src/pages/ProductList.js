import { request } from "../common/shoppingData.js";
import Products from "../components/Products.js";

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

  this.fetchProducts = async () => {
    const products = await request("/dev/products");
    this.setState(products);

    const productLists = new Products({
      $target: $page,
      initialState: this.state,
    });
  };

  this.fetchProducts();
}
