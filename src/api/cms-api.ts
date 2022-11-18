import axios from "axios";

import { ReqLogin, ReqRegister, ResLogin, ResRegister } from "../shared/types/authType";

export const CmsApi = {
  login: async (req: ReqLogin) => {
    return await axios.post<ResLogin>("/api/auth/login", req);
  },

  register: (req: ReqRegister) => {
    return axios.post<ResRegister>("/api/auth/register", req);
  },
};
