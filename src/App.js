import MyCart from "./pages/MyCart.js";
import ProductDetail from "./pages/ProductDetail.js";
import ProductList from "./pages/ProductList.js";
import { init } from "./router.js";

export default function App({ $target }) {
  this.route = () => {
    const { pathname } = location;
    const router = (pathname) => {
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
    router(pathname);
  };

  init(this.route);

  this.route();

  window.addEventListener("popstate", this.route);
}
