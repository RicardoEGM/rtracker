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

const FormMethod = {
  Form: {
    GetFields: (idForm) =>
      instance({
        method: "GET",
        url: `form/getForm/${idForm}`,
      }),
  },
};

export default FormMethod;
