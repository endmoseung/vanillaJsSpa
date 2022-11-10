export default function MyCart({ $target }) {
  const $page = document.createElement("div");
  $page.className = "MyCart";
  $page.innerHTML = "<h1>장바구니</h1>";
  this.render = () => {
    $target.appendChild($page);
  };
}

// function add() {
//   this.render = () => {
//     console.log("하이 빵가루");
//   };
// }
// new add().render(); 지금 함수처럼 함수도 객체이기 떄문에 new연산자로 함수를 복사 할 수 있고 this로 바인딩함으로써 객체 메쏘드처럼 값을 사용 할 수 있다.
