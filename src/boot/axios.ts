import { boot } from 'quasar/wrappers';
import axios, { AxiosInstance } from 'axios';

declare module '@vue/runtime-core' {
  interface ComponentCustomProperties {
    $axios: AxiosInstance;
  }
}

const api = axios.create({ baseURL: `http://${process.env.API}` });

const token = localStorage.getItem("token");
if (token) {
  api.defaults.headers["Authorization"] = `Bearer ${token}`;
}

export default boot(({ app, router }) => {
  app.config.globalProperties.$axios = axios;
  app.config.globalProperties.$api = api;
  api.interceptors.response.use(
    (response) => response,
    (error) => {
      if ([401, 403].includes(error.response?.status)) {
        localStorage.removeItem("token");
        delete api.defaults.headers["Authorization"];
        router.push({ name: "Authorization" });
        // Loading.hide();
      }
    }
  )
});

export { api };
