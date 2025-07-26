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

const LoginDialog = () => {
  const [showPasswordBox, setShowPasswordBox] = useState<boolean>(false);
  const [showPassword, setShowPassword] = useState<boolean>(false);
  return (
    <Dialog>
      <DialogTrigger asChild>
        <div className="flex gap-2 items-center cursor-pointer">
          <AccountCircleOutline />
          Đăng nhập
        </div>
      </DialogTrigger>
      <Formik
        initialValues={{ email: "", password: "" }}
        onSubmit={(values) => {
          console.log("Form submitted with values:", values);
        }}
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
                        disabled={!values.email}
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
                        disabled={!values.password}
                      >
                        Đăng nhập
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
