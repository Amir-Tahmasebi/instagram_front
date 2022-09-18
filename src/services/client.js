import axios from "axios";

class Client {
  constructor() {
    this.instance = axios.create({
      baseURL: process.env.REACT_APP_BASE_URL,
      headers: {},
    });
  }

  get(endPoint, config) {
    return this.instance.get(endPoint, config);
  }
}

export const client = new Client();