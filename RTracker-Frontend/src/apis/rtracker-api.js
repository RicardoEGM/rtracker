import Axios from "axios";
// import { ApisUrl, GlobalVar } from "../helper/Global";
//TODO: Crear variables globales, con api
const instance = Axios.create({
  baseURL: "http://localhost:3525/api/",
  //   baseURL: ApisUrl.FieldsAPI,
  //   headers: {
  //     tenantId: GlobalVar.TenantIdF,
  //   },
});

const Api = {
  Form: {
    GetFields: (idForm) =>
      instance({
        method: "GET",
        url: `form/getForm/${idForm}`,
      }),
  },
  Tracker: {
    Add: (Data) =>
      instance({
        method: "POST",
        url: `tracker/add`,
        data: Data,
      }),
  },
};

export default Api;
