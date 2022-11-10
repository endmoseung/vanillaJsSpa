import Details from "../components/Details.js";
import { request } from "../common/shoppingData.js";

export default function ProductDetail({ $target, productId }) {
  this.state = {
    productId,
    product: null,
  };

  this.setState = (nextState) => {
    this.state = nextState;
    this.render();
  };

  const $page = document.createElement("div");
  $page.className = "ProductDetail";
  $page.innerHTML = "<h1>상품 디테일</h1>";
  this.render = () => {
    if (!this.state.product) {
      $target.innerHTML = "Loading...";
    } else {
      $target.innerHTML = "";
      $target.appendChild($page);
    }
  };

  this.fetchProduct = async () => {
    const { productId } = this.state;
    const product = await request(`/dev/products/${productId}`);
    this.setState({
      ...this.state,
      product,
    });
    console.log(this.state);
    console.log($page);
    const productDetails = new Details({
      $target: $page,
      initialState: this.state,
    });
  };
  this.fetchProduct();
}
