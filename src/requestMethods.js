import axios from "axios";

const BASE_URL = "http://localhost:5000/api";
const TOKEN =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1YmU3YjEzZGZhN2NlMTk3YzVlYjc2NiIsImlzQWRtaW4iOnRydWUsImlhdCI6MTcwNzMzMDc1MywiZXhwIjoxNzA3NTg5OTUzfQ.zlM1AOVeoUigvXPzqBnOJxGXmYcuoU-4AbB-dNQPYH4";

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  header: { token: `Bearer ${TOKEN}` },
});
