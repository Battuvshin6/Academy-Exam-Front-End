const getTask = async () => {
  await fetch("http://localhost:8000/api/get", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  }).then((res) => res.json());
};

const createTask = async (props) => {
  await fetch("http://localhost:8000/api/post", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(props),
  });
};

export default taskService = { getTask, createTask };
