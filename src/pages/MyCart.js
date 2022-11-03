export default function MyCart({ $target }) {
  const $page = document.createElement("div");
  $page.className = "MyCart";
  $page.innerHTML = "<h1>장바구니</h1>";
  this.render = () => {
    $target.appendChild($page);
  };
}
