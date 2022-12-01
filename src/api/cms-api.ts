import axios from "axios";

import { ReqLogin, ReqRegister, ResLogin, ResRegister } from "../shared/types/authType";
import { ResCategory } from "../shared/types/categoryType";
import { ReqItem, ResItem } from "../shared/types/itemType";

export const CmsApi = {
  login: (req: ReqLogin) => {
    return axios.post<ResLogin>("/api/auth/login", req);
  },

  register: (req: ReqRegister) => {
    return axios.post<ResRegister>("/api/auth/register", req);
  },

  createItem: (req: ReqItem) => {
    return axios.post<ResItem>("/api/item/create", req);
  },

  getCategory: () => {
    return axios.get<ResCategory>("/api/cat");
  },
};
