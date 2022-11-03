const baseURl =
  "https://h6uc5l8b1g.execute-api.ap-northeast-2.amazonaws.com/dev";

export const request = async (url, options = { mode: "no-cors" }) => {
  console.log(url);
  try {
    const fullUrl = `${baseURl}${url}`;
    const response = await fetch(fullUrl, {
      method: "GET",
      // mode: "no-cors",
      // headers: ("Access-Control-Allow-Origin", "*"),
    });
    if (response.ok) {
      const json = await response.json();
      return json;
    }
    throw new Error("api 통신 에러");
  } catch (e) {
    alert(e.message);
  }
};
