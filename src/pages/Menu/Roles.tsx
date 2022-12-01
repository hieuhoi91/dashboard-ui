import { IosShare } from "@mui/icons-material";
import { Checkbox, FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import React, { useEffect } from "react";

import { CmsApi } from "../../api/cms-api";
import { RoleCard } from "../../components/RoleCard";
import { ResGetRoles, ResGetUsers, ResRoles, User } from "../../shared/types/rolesType";

const listImg = [
  "https://www.pngarts.com/files/11/Avatar-PNG-Transparent-Image.png",
  "https://www.pngarts.com/files/11/Avatar-PNG-Transparent-Image.png",
  "https://www.pngarts.com/files/11/Avatar-PNG-Transparent-Image.png",
  "https://www.pngarts.com/files/11/Avatar-PNG-Transparent-Image.png",
];

const Title = ({ width, title }: { width: string; title: string }) => {
  return (
    <div className="flex flex-row items-center justify-between">
      <span className="text-xs text-light-text-secondary ml-5">{title}</span>
      <span className="text-gray-300">|</span>
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
              <FormControl fullWidth style={{ height: "40px", width: "150px" }}>
                <InputLabel
                  style={{
                    height: "40px",
                    top: "-8px",
                  }}
                  id="demo-simple-select-label"
                >
                  <span className=" text-light-text-secondary">Select Role</span>
                </InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  // value={age}
                  label="Age"
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
              <Checkbox style={{ color: "rgba(76, 78, 100, 0.68)", display: "inline" }} />
              <span className="text-gray-300">|</span>
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
              <Title title="ACTIONS" width="w-60"></Title>
            </th>
          </tr>
          {users?.map((user, index) => (
            <tr className="h-[10%]">
              <td className="w-10 pl-5">
                <Checkbox style={{ color: "rgba(76, 78, 100, 0.68)", display: "inline" }} />
              </td>
              <td className="w-10">{user.username}</td>
              <td className="w-20">{user.email}</td>
              <td className="w-20">{user.role}</td>
              <td className="w-20">{user.phone}</td>
              <td className="w-20">{user.status}</td>
              <td className="w-20">{user.status}</td>
            </tr>
          ))}
        </table>
      </div>
    </div>
  );
};

export default Roles;
