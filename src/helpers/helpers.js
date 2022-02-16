export const sendRequest = async (
  func,
  setState = () => {},
  setLoading = () => {}
) => {
  try {
    setLoading(true);
    const { data } = await func();
    setState(data);
    setLoading(false);
  } catch (error) {
    console.log("blad", error);
    setLoading(false);
  }
};

export const getToken = window.localStorage.getItem("token");
export const getName = window.localStorage.getItem("myName");
