import axios from "axios";

import { ReqLogin, ReqRegister, ResLogin, ResRegister } from "../shared/types/authType";
import { ResCategory } from "../shared/types/categoryType";
import { ReqItem, ResItem } from "../shared/types/itemType";
import { ResGetRoles, ResGetUsers } from "../shared/types/rolesType";

export const CmsApi = {
  login: (req: ReqLogin) => {
    return axios.post<ResLogin>("/api/auth/login", req);
  },

  register: (req: ReqRegister) => {
    return axios.post<ResRegister>("/api/auth/register", req);
  },

  getRoles: () => {
    return axios.get<ResGetRoles>("/api/auth/roles");
  },

  getUsers: () => {
    return axios.get<ResGetUsers>("/api/users/all?sort=created_at&order=ASC&take=8");
  },

  createItem: (req: ReqItem) => {
    return axios.post<ResItem>("/api/item/create", req);
  },

  getCategory: () => {
    return axios.get<ResCategory>("/api/cat");
  },
};
