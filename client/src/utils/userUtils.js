const getLoggedUserId = async () => {
  return fetch(
    `http://localhost:3001/api/v1/users/?email=${localStorage.getItem("uid")}`,
    {
      method: "GET",
      headers: {
        Accept: "application/json",
      },
      mode: "cors",
    }
  )
    .then((res) => res.json())
    .then((data) => {
      return data.data.id;
    });
};

export default getLoggedUserId;
