export const BASE_URL = "https://auth.nomoreparties.co";

const makeRequest = (url, method, token, body) => {
  const headers = {"Content-Type": "application/json"};
  const config = {method, headers};

  if(token !== undefined) {
    headers['Authorization'] = `Bearer ${token}`;
  }

  if(body !== undefined) {
    config.body = JSON.stringify(body)
  }

  return fetch(`${BASE_URL}${url}`, config).then((res) => {
    if (res.ok) {
      return res.json();
    } else {
      Promise.reject(`Ошибка: ${res.status}/${res.statusText}`);
    };
  });
}

export const register = ({password, email}) => {
  return makeRequest("/signup", 'POST', { password, email })
};

export const authorize = ({password, email}) => {
  return makeRequest("/signin", 'POST', { password, email })
};

export const getContent = (token) => {
  return makeRequest("/users/me", 'GET', undefined, token)
};
