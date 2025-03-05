import apiClient from "./apiClient.js";
import { message } from "antd";
// import { loginAction, logoutAction } from "../../store/actions/userAction";

// export function showMessage(type, content, duration) {
//   return message[type]({
//     content,
//     duration,
//   });
// }

export async function resetPassword(data, navigate) {
  try {
    const response = await apiClient.post("/reset_password", data);
    // console.log(response)
    if (response.data.message) {
      setTimeout(() => {
        navigate("/login");
      }, 3000);
      //   showMessage("success", response.data.message);
    }
    return response;
  } catch (error) {
    const errorMessage =
      error.response?.data?.detail || "Failed to reset password. Try again.";
    // showMessage("error", errorMessage);
    throw error;
  }
}

export const getCurrentUser = async (dispatch) => {
  try {
    const response = await apiClient.get("login/");

    if (response.status === 200) {
      //   showMessage("success", `welcome ${response?.data?.firstname}`, 1);
      // console.log(response.data)
      dispatch(loginAction(response?.data.User));
      return response;
    }
  } catch (error) {
    console.log(error.response?.data);
    // showMessage(
    //   "error",
    //   error?.response?.data?.error || "An error occurred",
    //   3
    // );
    // throw error
  }
};

export const serverLogin = async (values, navigate, dispatch, setError) => {
  setError("");

  try {
    const response = await apiClient.post("login/", values);

    if (response.status === 200) {


      dispatch(loginAction(response?.data?.user));
      navigate("/dashboard/home");
      return response.data;
    }
  } catch (error) {
    console.error("Error response:", error.response?.data);

    const errorMessages =
      error.response?.data?.error || "❌ Server error, try again later.";

    // Show error toast(s) - if array, show multiple messages
    if (Array.isArray(errorMessages)) {
        errorMessages.forEach((errMsg) =>
          message.error(errMsg)
      );
    } else {
        message.error(errorMessages);
    }

    setError(errorMessages);
  }
};

export const serverSignup = async (values, navigate, setError) => {
  setError("");
  const loadingMessage = message.loading("Signing up...", 0);

  try {
    const response = await apiClient.post("/signup", values); // Use the custom Axios instance
    if (response.status === 201) {
      console.log(response.data);
      loadingMessage();
      //   showMessage("success", response?.data?.message, 3);
      //   navigate("/login");
      return response.data;
    }
  } catch (error) {
    console.error("Error response:", error.response?.data);

    const responseData = error.response?.data;

    if (responseData?.error) {
      setError(responseData.error);
    } else if (responseData && typeof responseData === "object") {
      const errors = Object.values(responseData).flat();
      setError(errors);
    } else {
      setError("An unknown error occurred.");
    }
  } finally {
    loadingMessage();
  }
};

export const serverLogout = async (dispatch, navigate) => {
  // Show loading toast
  const loadingToast = toast.loading("Logging out...");

  try {
    const response = await apiClient.post("logout/");

    if (response.status === 200) {
        // Show success toast
        // message.success()

      dispatch(logoutAction());
      navigate("/");
      return response.data;
    } else {
      throw new Error("Logout failed");
    }
  } catch (error) {
    console.error("Error response:", error);

    // Show error toast

  }
};

export const serverForgotPass = async (email, setLoading, setMessage) => {
  try {
    const response = await apiClient.post("forgot/", email);
    if (response.status === 200) {
      console.log(response.data);
      //   showMessage("success", response?.data?.message, 2);
      return response.data;
    } else {
      //   showMessage("error", "Failed to send password reset email", 2);
      // throw new Error("Failed to send password reset email");
    }
  } catch (error) {
    console.error("Error response:", error.response?.data);
    // showMessage("error", error?.response?.data?.detail, 3);
    // throw error;
  } finally {
    setLoading(false);
  }
};
