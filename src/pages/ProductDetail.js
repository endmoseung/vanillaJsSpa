import productDetailItem from "../../productDetail.json";
import Details from "../components/Details";

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
    new Details();
  };

  this.fetchProduct = () => {
    const { productId } = this.state;
    const product = productDetailItem;
    this.setState({
      ...this.state,
      product,
    });
  };
  console.log(this.state);
  this.fetchProduct();

  const productDetails = new Details({
    $target: $page,
    initialState: this.state,
  });
}
