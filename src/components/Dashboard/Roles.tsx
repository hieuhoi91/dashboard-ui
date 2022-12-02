import { IosShare } from "@mui/icons-material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { Checkbox, FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import React, { useEffect } from "react";

import { CmsApi } from "../../api/cms-api";
import { ResGetRoles, ResGetUsers, ResRoles, User } from "../../shared/types/rolesType";
import { RoleCard } from "../Common/RoleCard";

const listImg = [
  "https://www.pngarts.com/files/11/Avatar-PNG-Transparent-Image.png",
  "https://www.pngarts.com/files/11/Avatar-PNG-Transparent-Image.png",
  "https://www.pngarts.com/files/11/Avatar-PNG-Transparent-Image.png",
  "https://www.pngarts.com/files/11/Avatar-PNG-Transparent-Image.png",
];

const Title = ({ width, title, isLast }: { width: string; title: string; isLast?: boolean }) => {
  return (
    <div className="flex flex-row items-center justify-between">
      <span className="text-xs text-light-text-secondary ml-5">{title}</span>
      {!isLast && <span className="text-gray-300">|</span>}
    </div>
  );
};

const Roles = () => {
  const [roles, setRoles] = React.useState<ResRoles[]>([]);
  const [users, setUser] = React.useState<User[]>([]);
  useEffect(() => {
    CmsApi.getRoles().then((res) => {
      setRoles(res.data.data);
    });

    CmsApi.getUsers().then((res) => {
      setUser(res.data.data);
    });
  }, []);

  return (
    <div className="px-16 pt-5 h-[1080px] bg-light-background-body">
      <div className="mb-5">
        <h1 className="text-2xl font-medium text-light-text-primary">Roles List</h1>
        <span className="text-light-text-secondary">
          A role provided access to predefined menus and features so that depending on assigned role
          an administrator can have access to what he need
        </span>
      </div>
      <div className="grid grid-cols-3 gap-5 h-[16%]">
        {roles.map((item, index) => (
          <RoleCard
            title={item.user_role}
            image_urls={item.users.map((user) => user.avatar)}
            total={item.total}
          ></RoleCard>
        ))}
      </div>
      <h1 className="text-2xl font-medium text-light-text-primary mt-12">
        Total users with their roles
      </h1>
      <div className="mb-5">
        <span className="text-light-text-secondary">
          Find all of your company's administrator accounts and their associate roles.
        </span>
      </div>
      <div className="shadow-lg rounded-xl bg-white h-[60%]">
        <div className="h-[15%]">
          <div className="h-[100%] flex flex-row items-center mx-5 justify-between">
            <button className="border border-light-borderColor rounded-lg w-36 h-10 text-light-text-secondary font-medium">
              <div className="flex flex-row items-center justify-center space-x-2">
                <IosShare style={{ fontSize: "20px" }} />
                <span className="">EXPORT</span>
              </div>
            </button>
            <div className="flex flex-row">
              <input
                placeholder="Search"
                className="border outline-light-primary-light px-5 border-light-borderColor mr-5 rounded-lg w-[600px] h-10 text-light-text-secondary font-medium"
              ></input>
              <FormControl fullWidth style={{ width: "150px" }}>
                <Select
                  sx={{
                    "& .MuiSelect-select .notranslate::after": "placeholder"
                      ? {
                          content: `"${"Select Role"}"`,
                          opacity: 0.6,
                          fontWeight: 400,
                        }
                      : {},
                  }}
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  // value={age}
                  // onChange={handleChange}
                  style={{
                    height: "40px",
                    borderRadius: "8px",
                  }}
                >
                  {roles.map((item, index) => (
                    <MenuItem value={item.user_role}>{item.user_role}</MenuItem>
                  ))}
                </Select>
              </FormControl>
            </div>
          </div>
        </div>
        <table className="w-full h-[85%]">
          <tr className="h-[10%] bg-light-background-body">
            <th className="w-10">
              <Checkbox style={{ color: "rgba(76, 78, 100, 0.68)" }} />
            </th>
            <th>
              <Title title="USER" width="w-60"></Title>
            </th>
            <th>
              <Title title="EMAIL" width="w-60"></Title>
            </th>
            <th>
              <Title title="ROLE" width="w-60"></Title>
            </th>
            <th>
              <Title title="PHONE" width="w-60"></Title>
            </th>
            <th>
              <Title title="STATUS" width="w-60"></Title>
            </th>
            <th>
              <Title title="ACTIONS" width="w-60" isLast={true}></Title>
            </th>
          </tr>
          {users?.map((user, index) => (
            <tr className="h-[10%]">
              <td className="w-[full] h-full flex justify-center items-center">
                <Checkbox style={{ color: "rgba(76, 78, 100, 0.68)" }} />
              </td>
              <td className="w-20 pl-5 ">
                <div className="flex items-center gap-2 ">
                  <span className="w-[36px] h-[36px] rounded-full">
                    <img className="w-full h-full rounded-full" src={user.avatar} alt="" />
                  </span>
                  <span>{user.username}</span>
                </div>
              </td>
              <td className="w-20 pl-5">{user.email}</td>
              <td className="w-20 pl-5">{user.role}</td>
              <td className="w-20 pl-5">{user.phone}</td>
              <td className="w-20 pl-5">{user.status}</td>
              <td className="w-10 pl-10">
                <span className="cursor-pointer">
                  <MoreVertIcon />
                </span>
              </td>
            </tr>
          ))}
        </table>
      </div>
    </div>
  );
};

export default Roles;
