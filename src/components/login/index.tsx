import AccountCircleOutline from "@/icon/account-circle-outline";
import EditPenTextWrite from "@/icon/edit-pen-text-write";
import Eye from "@/icon/eye";
import EyeOff from "@/icon/eye-off";
import { Form, Formik } from "formik";
import { useState } from "react";
import { Button } from "../ui/button";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import loginValidation from "./validate";
import InputField from "../form/fields/InputFIeld";
import { useAuth } from "@/hooks/useAuth";
import showToast from "../common/showToast";
import type { LoginCredentials } from "@/types/auth";

const LoginDialog = () => {
  const [showPasswordBox, setShowPasswordBox] = useState<boolean>(false);
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const { login, logout, isLoading, user, isAuthenticated } = useAuth();

  const handleSubmit = async (values: LoginCredentials) => {
    try {
      const success = await login(values);
      if (success) {
        setShowPasswordBox(false);
      } else {
        showToast("Email hoặc mật khẩu không đúng!");
      }
    } catch {
      showToast("Có lỗi xảy ra, vui lòng thử lại!");
    }
  };

  const handleLogout = () => {
    logout();
  };

  if (isAuthenticated && user) {
    return (
      <div className="flex gap-2 items-center cursor-pointer group">
        <AccountCircleOutline />
        <div className="flex flex-col">
          <span className="text-sm font-medium">{user.name}</span>
          <Button
            onClick={handleLogout}
            className="text-xs text-gray-500 hover:text-red-500 text-left"
          >
            Đăng xuất
          </Button>
        </div>
      </div>
    );
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <div className="flex gap-2 items-center cursor-pointer">
          <AccountCircleOutline />
          Đăng nhập
        </div>
      </DialogTrigger>
      <Formik<LoginCredentials>
        initialValues={{ email: "", password: "" }}
        onSubmit={handleSubmit}
        enableReinitialize
        validationSchema={loginValidation}
      >
        {({ values, errors, setFieldValue }) => {
          return (
            <DialogContent className="sm:max-w-[425px] p-0">
              <DialogTitle className="flex justify-center items-center p-1">
                <img src="https://s1.vnecdn.net/vnexpress/restruct/i/v9647/v2_2019/pc/graphics/logo_tagline.svg" />
              </DialogTitle>
              <Form>
                <div className="bg-gray-100 p-4 rounded-md space-y-4">
                  <div className="flex flex-col justify-center items-center text-xl font-bold">
                    {!showPasswordBox
                      ? "Đăng nhập / Tạo tài khoản"
                      : "Đăng nhập"}
                    {showPasswordBox && (
                      <div className="text-sm font-normal text-gray-500">
                        Bạn đã có tài khoản trên VnExpress
                      </div>
                    )}
                  </div>
                  <div className="grid gap-4">
                    <div className="grid gap-3 relative">
                      <InputField
                        name="email"
                        label="Email"
                        type="email"
                        disabled={showPasswordBox}
                        rightElement={
                          showPasswordBox && (
                            <div className="absolute right-3 bottom-2 p-1 bg-gray-100 cursor-pointer">
                              <div
                                onClick={() => setShowPasswordBox(false)}
                                className="bg-transparent border-none"
                              >
                                <div className="flex items-center gap-1">
                                  Sửa <EditPenTextWrite />
                                </div>
                              </div>
                            </div>
                          )
                        }
                      />
                    </div>
                    {showPasswordBox && (
                      <div className="grid gap-3 relative">
                        <InputField
                          name="password"
                          label="Password"
                          type={showPassword ? "text" : "password"}
                          rightElement={
                            values.password && (
                              <div className="absolute right-3 bottom-2 p-1 bg-gray-100 cursor-pointer">
                                {showPassword ? (
                                  <div
                                    className="flex items-center gap-1"
                                    onClick={() =>
                                      setShowPassword(!showPassword)
                                    }
                                  >
                                    Ẩn <EyeOff />
                                  </div>
                                ) : (
                                  <div
                                    className="flex items-center gap-1"
                                    onClick={() =>
                                      setShowPassword(!showPassword)
                                    }
                                  >
                                    Hiện <Eye />
                                  </div>
                                )}
                              </div>
                            )
                          }
                        />
                      </div>
                    )}
                  </div>
                  <div className="flex justify-center">
                    {!showPasswordBox && (
                      <Button
                        type="submit"
                        variant="primary"
                        fill
                        disabled={!values.email || isLoading}
                        onClick={() => {
                          if (!errors.email) {
                            setShowPasswordBox(true);
                            setFieldValue("password", "");
                          }
                        }}
                      >
                        Tiếp tục
                      </Button>
                    )}
                    {showPasswordBox && (
                      <Button
                        type="submit"
                        variant="primary"
                        fill
                        disabled={!values.password || isLoading}
                      >
                        {isLoading ? "Đang đăng nhập..." : "Đăng nhập"}
                      </Button>
                    )}
                  </div>
                </div>
              </Form>
            </DialogContent>
          );
        }}
      </Formik>
    </Dialog>
  );
};

export default LoginDialog;
