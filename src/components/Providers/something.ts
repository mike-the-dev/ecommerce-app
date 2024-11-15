import { BroadcastChannel } from 'broadcast-channel';

const loginChannel = new BroadcastChannel('logout');

export const login = (accessToken: string, refreshToken: string, router?: any) => {
  loginChannel.postMessage({
    tokens: {
      access: accessToken,
      refresh: refreshToken
    }
  });
  sessionStorage.setItem("joymd_access_token", accessToken);
  sessionStorage.setItem("joymd_refresh_token", refreshToken);
  window.location.href = window.location.origin + "/desk";
};

// export const logout = () => {
//   console.log("running logoutChannel.postMessage")
//   logoutChannel.postMessage("Logout");
//   // @ts-ignore
//   localStorage.removeItem("token", 'this_is_a_demo_token')
//   window.location.href = window.location.origin + "/";
// };

// Code below runs on other tabs.

export const loginAllTabs = () => {
  const accessToken: string = sessionStorage.getItem("joymd_access_token") || "";
  const refreshToken: string = sessionStorage.getItem("joymd_refrsh_token") || "";
  if (!refreshToken || !accessToken) {
    sessionStorage.setItem("joymd_access_token", accessToken);
    sessionStorage.setItem("joymd_refresh_token", refreshToken);
  };

  loginChannel.onmessage = (something) => {
    console.log("Just ran!", something);
    login(something.tokens.access, something.tokens.refresh);
    loginChannel.close();
  };
};

// export const logoutAllTabs = () => {
//   console.log("logoutRunningallTabs");
//   logoutChannel.onmessage = () => {
//     logout();
//     logoutChannel.close();
//   }
// };