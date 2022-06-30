const getData = async () => {
  return await fetch("http://localhost:8000/api/get", {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  });
};
const postData = async (props) => {
  return await fetch("http://localhost:8000/api/post", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ date: props.date, topic: props.topic }),
  });
};
const updateData = async (props) => {
  return await fetch("http://localhost:8000/api/put", {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ date: props.date, topic: props.topic }),
  });
};
const deleteData = async () => {
  return await fetch("http://localhost:8000/api/delete", {
    method: "DELETE",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(),
  });
};
export const dataServices = { getData, postData, deleteData, updateData };
