import MyCart from "./pages/MyCart";
import ProductDetail from "./pages/ProductDetail";
import ProductList from "./pages/ProductList";
import { init } from "./router";

export default function App({ $target }) {
  this.route = () => {
    const { pathname } = location;
    if (pathname === "/") {
      new ProductList({ $target }).render();
    } else if (pathname.indexOf("/products/") === 0) {
      const [, , productId] = pathname.split("/");
      new ProductDetail({ $target, productId }).render();
      console.log("bugdetail");
    } else if (pathname === "/cart") {
      new MyCart({ $target }).render();
    }
  };

  init(this.route);

  this.route();

  const element = document.querySelector(".ProductDetail");

  window.addEventListener("popstate", this.route);
  element.remove();
}
