export const request = async (url, options = { mode: "no-cors" }) => {
  try {
    const fullUrl = `${url}`;
    const response = await fetch(fullUrl, {
      method: "GET",
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
