import { routeChange } from "../router.js";

export default function Details({ $target, initialState }) {
  console.log($target);
  const $productDetail = document.createElement("div");
  $productDetail.className = "ProductDetail";
  $target.appendChild($productDetail);
  // const button = document.querySelector(".OrderButton");
  console.log($target);

  this.state = initialState;

  console.log($target, initialState);

  this.setState = (nextState) => {
    this.state = nextState;
    this.render();
  };

  this.render = () => {
    const { product } = this.state;
    console.log(product);
    $productDetail.innerHTML = `
    <img src="${product.imageUrl}">
    <div class="ProductDetail__info">
      <h2>${product.name}</h2>
      <div class="ProductDetail__price">${product.price}원~</div>
      <select>
        <option>선택하세요.</option>
        ${product.productOptions
          .map(
            (option) => `
        <option value="${option.id}" ${option.stock === 0 ? "disabled" : ""}>
          ${option.stock === 0 ? "품절" : ""}${product.name} ${option.name} ${
              option.price > 0 ? `(+${option.price}원)` : ""
            }
        </option>
        `
          )
          .join("")}
      </select>
      <div class="ProductDetail__selectedOptions">
        <h3>선택된 상품</h3>
        <ul>
          <li>
            커피잔 100개 번들 10,000원 <div><input type="number" value="10">개</div>
          </li>
          <li>
            커피잔 1000개 번들 15,000원 <div><input type="number" value="5">개</div>
          </li>
        </ul>
        <div class="ProductDetail__totalPrice">175,000원</div>
        <button class="OrderButton">주문하기</button>
      </div>
    </div>`;
  };

  this.render();
  $target.querySelector("button").addEventListener("click", (e) => {
    const { product } = this.state;
    localStorage.setItem("products_cart", {
      productId: product.id,
      optionId: product.productOptions[0].id,
      quantity: 3,
    });
    routeChange("/cart");
  });
}
