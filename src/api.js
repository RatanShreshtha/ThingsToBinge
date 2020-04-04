import axios from "axios";

class APIService {
  constructor(baseURL) {
    this.instance = axios.create({
      baseURL: baseURL,
      timeout: 2 * 60 * 1000
    });
  }

  get(endpoint, options) {
    return this.instance.get(endpoint, options);
  }
}

export const omdbApi = new APIService(process.env.VUE_APP_API_BASE_URL);
