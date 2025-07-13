// const baseURLserver = "https://srvtest.gsafe.ir";
const baseURLserver = "http://192.168.30.122:7016";
// const baseURLserver = "http://10.1.20.135:7016";
import Cookies from "js-cookie";
export async function CreateUser(values) {
  const userInfo = {
    id: values.id,
    firstName: values.firstName,
    lastName: values.lastName,
    phoneNumber: values.phoneNumber,
    email: values.email,
    userTypeId: values.userTypeId,
    captchaCode: values.confirmCaptchaValue,
  };
  const url = "/api/user/create";
  const res = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      sesionId: Cookies.get("sessionid_guid"),
    },
    body: JSON.stringify(userInfo),
  });
  const data = await res.json();
  return data;
}

// LoginUser :
export async function Login(values) {
  const userInfo = {
    userName: values.userName,
    password: values.password,
    captchaCode: values.confirmCaptchaValue,
  };
  const url = "/api/user/login";
  const res = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      sesionId: Cookies.get("sessionid_guid"),
    },
    body: JSON.stringify(userInfo),
    credentials: "include", // Ensure cookies are sent with the request
  });

  const data = await res.json();
  return data;
}

// GetUserInfo :
export async function GetUserInfo(nationalCode) {
  const res = await fetch(`/api/user/userInfo/${nationalCode}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + Cookies.get("Token"),
    },
    credentials: "include", // Ensures cookies (token) are sent
  });

  if (!res.ok) {
    throw new Error("Failed to fetch user info");
  }

  const data = await res.json();
  return data;
}

// ChangePassword :
export async function ChangePassword(values, nationalCode) {
  let passwordInfo = {
    oldPassword: values.oldPassword,
    newPassword: values.newPassword,
  };
  const url = `/api/user/changePassword/${nationalCode}`;
  const res = await fetch(url, {
    method: "POST",
    headers: {
      "content-type": "application/json",
      Authorization: "Bearer " + Cookies.get("Token"),
    },
    body: JSON.stringify(passwordInfo),
  });
  const data = await res.json();
  return data;
}

// ResetPassword :
export async function ResetPassword(nationalCode, captchaCode) {
  const userInfo = {
    nationalCode: nationalCode,
    captchaCode: captchaCode,
  };
  const url = `/api/user/resetPassword/${nationalCode}`;
  const res = await fetch(url, {
    method: "POST",
    headers: {
      "content-type": "application/json",
      Authorization: "Bearer " + Cookies.get("Token"),
      sesionId: Cookies.get("sessionid_guid"),
    },
    body: JSON.stringify(userInfo),
  });
  const data = await res.json();
  return data;
}
// UpdateUserEmailMobile :
export async function UpdateUserEmailMobile(values) {
  let userInfo = {
    nationalCode: values.nationalCode,
    phoneNumber: values.phoneNumber,
    email: values.email,
  };
  const url = "/api/user/updateUserEmaiMobile";
  const res = await fetch(url, {
    method: "POST",
    headers: {
      "content-type": "application/json",
      Authorization: "Bearer " + Cookies.get("Token"),
    },
    body: JSON.stringify(userInfo),
  });
  const data = await res.json();
  return data;
}
// GetAllAppInfoByNationalCode :
export async function GetAllAppInfoByNationalCode(nationalCode, token) {
  const url =
    baseURLserver +
    `/USR/api/v1/UserManagement/PublicAppAssignUser/GetAllAppInfoByNationalCode/${nationalCode}/1`;
  const res = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + token,
    },
  });
  const data = await res.json();
  return data;
}
// GetAppById:
export async function GetAppById(id, token) {
  const url =
    baseURLserver + `/USR/api/v1/UserManagement/PublicApp/GetAppById/${id}`;
  const res = await fetch(url, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + token,
    },
  });
  const data = await res.json();
  return data;
}
// AppAsigned :
export async function AppAsigned(id, token) {
  let appId = {
    publicAppId: id,
  };
  const url = baseURLserver + `/USR/api/v1/UserManagement/Users/AppAssigned`;
  const res = await fetch(url, {
    method: "POST",
    headers: {
      "content-type": "application/json",
      Authorization: "Bearer " + token,
    },
    body: JSON.stringify(appId),
  });
  const data = await res.json();
  return data;
}
// ServiceCallReportByApp :
export async function ServiceCallReportByApp(dateObject, id) {
  let servicesCallInfo = {
    publicAppId: id,
    dateFrom: dateObject.dateFrom,
    dateTo: dateObject.dateTo,
  };
  const url = "/api/user/userApps/serviceCallReportByApp";
  const res = await fetch(url, {
    method: "POST",
    headers: {
      "content-type": "application/json",
      Authorization: "Bearer " + Cookies.get("Token"),
    },
    body: JSON.stringify(servicesCallInfo),
  });
  const data = await res.json();
  return data;
}
// GetAllPublicServicesGroupRequestedByApp :
export async function GetAllPublicServicesGroupRequestedByApp(id, token) {
  const url =
    baseURLserver +
    `/USR/api/v1/UserManagement/ServiceGroup/GetAllPublicServicesGroupRequestedByApp/${id}`;
  const res = await fetch(url, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + token,
    },
  });
  const data = await res.json();
  return data;
}
// CreateServiceRequest :
export async function CreateServiceRequest(values, id) {
  let requestServices = {
    publicAppId: id,
    serviceId: values.serviceId,
  };
  const url = "/api/user/userApps/createServiceRequest";
  const res = await fetch(url, {
    method: "POST",
    headers: {
      "content-type": "application/json",
      Authorization: "Bearer " + Cookies.get("Token"),
    },
    body: JSON.stringify(requestServices),
  });
  const data = await res.json();
  return data;
}
// GetAllServiceGroup :
export async function GetAllServiceGroup(token) {
  const url =
    baseURLserver +
    "/USR/api/v1/UserManagement/ServiceGroup/GetAllServiceGroup";
  const res = await fetch(url, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + token,
    },
  });
  const data = await res.json();
  return data;
}
// CreateApp :
export async function CreateApp(values) {
  let appInfo = {
    appName: values.appName,
    appIp: values.appIp,
    appCompany: values.appCompany,
    appWeb: values.appWeb,
    appRetAddr: values.appRetAddr,
    appLogo: values.appLogo,
    captchaCode: values.confirmCaptchaValue,
  };
  const url = "/api/user/userApps/createApp";
  const res = await fetch(url, {
    method: "POST",
    headers: {
      "content-type": "application/json",
      Authorization: "Bearer " + Cookies.get("Token"),
      sesionId: Cookies.get("sessionid_guid"),
    },
    body: JSON.stringify(appInfo),
  });
  const data = await res.json();
  return data;
}
// AssignAppToUser :
export async function AssignAppToUser(nationalCode, id, values) {
  let appInfo = {
    userId: nationalCode,
    publicAppId: id,
    publicUserTypeId: 1,
    id: "",
    passwordApplication: values.passwordApplication,
  };
  const url = "/api/user/userApps/assignAppToUser";
  const res = await fetch(url, {
    method: "POST",
    headers: {
      "content-type": "application/json",
      Authorization: "Bearer " + Cookies.get("Token"),
    },
    body: JSON.stringify(appInfo),
  });
  const data = await res.json();
  return data;
}
//GetTicketByUserId :
export async function GetTicketByUserId(nationalCode, token) {
  const url =
    baseURLserver + `/api/v1/Ticket/GetTicketByuserid/${nationalCode}`;
  const res = await fetch(url, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + token,
    },
  });
  const data = await res.json();
  return data;
}
// CreateNewClientTicket :
export async function CreateNewClientTicket(values, selectedFiles) {
  let newTicketInfo = {
    typeId: values.typeId,
    title: values.title,
    usersender: values.usersender,
    ticketdoc: values.ticketdoc,
    ticketFiles: selectedFiles,
  };
  const url = "/api/user/userTicket/createNewClientTicket";
  const res = await fetch(url, {
    method: "POST",
    headers: {
      "content-type": "application/json",
      Authorization: "Bearer " + Cookies.get("Token"),
    },
    body: JSON.stringify(newTicketInfo),
  });
  const data = await res.json();
  return data;
}
// GetTicketDetails :
export async function GetTicketDetails(id, token) {
  const url = baseURLserver + `/api/v1/Ticket/GetTicketDetail/${id}`;
  const res = await fetch(url, {
    method: "GET",
    headers: {
      "content-type": "application/json",
      Authorization: "Bearer " + token,
    },
  });
  const data = await res.json();
  return data;
}
// ReplyToTicket :
export async function ReplyToTicket(values, selectedFiles) {
  let info = {
    ticketId: values.ticketId,
    userSender: values.userSender,
    userReciver: values.userReciver,
    ticketoc: values.ticketdoc,
    ticketFiles: selectedFiles,
  };
  const url = "/api/user/userTicket/replytoTicket";
  const res = await fetch(url, {
    method: "POST",
    headers: {
      "content-type": "application/json",
      Authorization: "Bearer " + Cookies.get("Token"),
    },
    body: JSON.stringify(info),
  });
  const data = await res.json();
  return data;
}
// DownloadHelpFile :
export async function DownloadHelpFile(id) {
  const url = `/api/downloadHelpFile/${id}`; // Dynamic route without query string

  try {
    const response = await fetch(url, {
      method: "GET",
      headers: {
        Authorization: "Bearer " + Cookies.get("Token"),
      },
    });

    if (!response.ok) {
      throw new Error("Failed to download file");
    }

    const blob = await response.blob();
    const fileURL = window.URL.createObjectURL(blob);

    // Creating a link and triggering the download
    let alink = document.createElement("a");
    alink.href = fileURL;
    alink.download = "HelpFile.pdf";
    document.body.appendChild(alink);
    alink.click();
    document.body.removeChild(alink);
  } catch (error) {
    console.error("Error downloading file:", error);
  }
}

// GetLoginReport:
export async function GetLoginReport(nationalCode, token) {
  const url =
    baseURLserver +
    `/USR/api/v1/UserManagement/Users/GetLoginReport/${nationalCode}`;
  const res = await fetch(url, {
    method: "GET",
    headers: {
      "content-type": "application/json",
      Authorization: "Bearer " + token,
    },
  });
  const data = await res.json();
  return data;
}
//FinancialReport :
export async function FinancialReport(dateObject, nationalCode) {
  let reportInfo = {
    nationalCode,
    dateFrom: dateObject.dateFrom,
    dateTo: dateObject.dateTo,
  };
  const url = "/api/financial/financialReport";
  const res = await fetch(url, {
    method: "POST",
    headers: {
      "content-type": "application/json",
      Authorization: "Bearer " + Cookies.get("Token"),
    },
    body: JSON.stringify(reportInfo),
  });
  const data = await res.json();
  return data;
}
// PaymentRequest :
export async function PaymentRequest(values) {
  let paymentInfo = {
    amount: values.amount,
    nationalCode: values.nationalCode,
    pathName: values.pathName,
  };
  const url = "/api/financial/paymentRequest";
  const res = await fetch(url, {
    method: "POST",
    headers: {
      "content-type": "application/json",
      Authorization: "Bearer " + Cookies.get("Token"),
    },
    body: JSON.stringify(paymentInfo),
  });
  const data = await res.json();
  return data;
}
// ChangeTicketStatus :
export async function ChangeTicketStatus(statusNum, ticketNum) {
  let info = {
    statusId: statusNum,
    ticketId: ticketNum,
  };
  const url = "/api/user/userTicket/changeTicketstatus";
  const res = await fetch(url, {
    method: "POST",
    headers: {
      "content-type": "application/json",
      Authorization: "Bearer " + Cookies.get("Token"),
    },
    body: JSON.stringify(info),
  });
  const data = await res.json();
  return data;
}
// ChangeApplicationPass :
export async function ChangeApplicationPass(nationalCode, Scope, values) {
  let passwordAppInfo = {
    userId: nationalCode,
    scope: Scope,
    oldAppPass: values.oldAppPass,
    newAppPass: values.newAppPass,
  };
  const url = "/api/user/userApps/changeApplicationPass";
  const res = await fetch(url, {
    method: "POST",
    headers: {
      "content-type": "application/json",
      Authorization: "Bearer " + Cookies.get("Token"),
    },
    body: JSON.stringify(passwordAppInfo),
  });
  const data = await res.json();
  return data;
}
// Captcha/Create :
export async function Captcha() {
  try {
    const url = "/api/user/captcha";
    const res = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        sesionId: Cookies.get("sessionid_guid"),
      },
      credentials: "include", // Ensure cookies are included
    });
    const contentType = res.headers.get("Content-Type") || "";
    return contentType.includes("application/json") ? res.json() : res.blob(); // If it's an image, return as a blob
  } catch (error) {
    console.error("Error fetching captcha:", error);
    throw error;
  }
}
