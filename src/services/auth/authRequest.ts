import axiosInstance from "~/lib/utils/axiosInstance";
import { authActions } from "./authSlice";
import { getLocalStorage, setLocalStorage } from "~/lib/utils/localStorage";
import { responseActions } from "../response/responseSlice";
import { Error } from "@mui/icons-material";

export const authRequest = {
  register: async function (data: Object, dispatch: Function) {
    try {
      let url = `auth/register`;
      const res: any = await axiosInstance.post(url, data);
      dispatch(responseActions.createMethod(res));
      console.log("res register: ", res);

      if (res.status === 201) {
        let { access_token, refreshToken } = res.data;
        setLocalStorage("access_token", access_token);
        const resUser: any = await axiosInstance.get("auth/profile");
        let { message, user } = resUser;

        const payload = {
          ...user,
          access_token,
          refresh_token: refreshToken.refresh_token,
        };
        dispatch(authActions.login(payload));
      }
    } catch (err) {
      console.error(err);
      dispatch(responseActions.createMethod(err));
    }
  },
  login: async function (data: Object, dispatch: Function) {
    try {
      let url = `auth/login`;
      const res: any = await axiosInstance.post(url, data);
      dispatch(responseActions.otherMethods(res));
      if (res.status === 200) {
        let { access_token, refreshToken } = res.data;
        setLocalStorage("access_token", access_token);
        const resUser: any = await axiosInstance.get("auth/profile");
        let { message, user } = resUser.data;
        const payload = {
          ...user,
          access_token,
          refresh_token: refreshToken.refresh_token,
        };
        dispatch(authActions.login(payload));
      }
    } catch (err) {
      console.error(err);
      dispatch(responseActions.otherMethods(err));
    }
  },
  refreshToken: async function (refresh_token: string, dispatch: Function) {
    try {
      let url = `auth/refreshToken`;
      let body = {
        refresh_token,
      };
      const res: any = await axiosInstance.post(url, body);
      dispatch(authActions.refreshToken(res.data));
      dispatch(responseActions.createMethod(res));
    } catch (err) {
      console.error(err);
      dispatch(responseActions.createMethod(err));
    }
  },
  changePassword: async function (
    {
      oldPassword,
      newPassword,
    }: {
      oldPassword: string;
      newPassword: string;
    },
    dispatch: Function
  ) {
    try {
      let customer = getLocalStorage("auth");
      let changePasswordDto: {
        username: string;
        oldPassword: string;
        newPassword: string;
      } = {
        username: customer.username,
        oldPassword,
        newPassword,
      };
      let url = `auth/change`;
      let res = await axiosInstance.post(url, changePasswordDto);
      if (res.status == 200) {
        dispatch(authActions.setToken(res.data));
      }
      dispatch(responseActions.otherMethods(res));
    } catch (err) {
      dispatch(responseActions.otherMethods(err));
    }
  },
};
