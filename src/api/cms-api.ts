import axios from "axios";

import { ReqLogin, ReqRegister, ResLogin, ResRegister } from "../shared/types/authType";

export const CmsApi = {
  login: (req: ReqLogin) => {
    return axios.post<ResLogin>("/api/auth/login", req);
  },

  register: (req: ReqRegister) => {
    return axios.post<ResRegister>("/api/auth/register", req);
  },
};
