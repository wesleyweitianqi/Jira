import { User } from "./screen/index";

const apiURL = process.env.REACT_APP_API_URL;
const localStorageKey = "__auth_provider_token__";

export const getToken = () => localStorage.getItem(localStorageKey);

export const handleUserResponse = ({ user }: { user: User }) => {
  localStorage.setItem(localStorageKey, user.token || "");
  return user;
};

export const login = (data: {
  username: string;
  password: string;
}): Promise<User> => {
  return fetch(`${apiURL}/login`, {
    method: "post",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  }).then(async (res: Response) => {
    if (res.ok) {
      return handleUserResponse(await res.json());
    } else {
      return Promise.reject(data);
    }
  });
};

export const register = (data: {
  username: string;
  password: string;
}): Promise<User> => {
  return fetch(`${apiURL}/register`, {
    method: "post",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  }).then(async (res: Response) => {
    if (res.ok) {
      return handleUserResponse(await res.json());
    } else {
      return Promise.reject(data);
    }
  });
};

export const logout = async () => localStorage.removeItem(localStorageKey);
