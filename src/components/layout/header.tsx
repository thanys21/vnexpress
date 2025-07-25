import { Link } from "react-router-dom";
import SearchRounded from "../../icon/search-rounded";
import NotificationsOutline from "../../icon/notifications-outline";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import { Button } from "../ui/button";
import AccountCircleOutline from "@/icon/account-circle-outline";
import { Formik } from "formik";
import { useState } from "react";
import EditPenTextWrite from "@/icon/edit-pen-text-write";
import Eye from "@/icon/eye";
import EyeOff from "@/icon/eye-off";

const Header = () => {
  const [showPasswordBox, setShowPasswordBox] = useState<boolean>(false);
  const [showPassword, setShowPassword] = useState<boolean>(false);

  return (
    <header className="container">
      <div className="flex justify-between items-center">
        <div className="flex gap-4 items-center">
          <Link to="/">
            <img
              src="https://s1.vnecdn.net/vnexpress/restruct/i/v9647/v2_2019/pc/graphics/logo_tagline.svg"
              alt="VnExpress - Bao tieng Viet nhieu nguoi xem nhat"
            />
          </Link>
          {/* TODO: Temperature */}
          <div className="pl-4 border-l-1 border-gray-300">
            TP HCM 27<sup>o</sup>
          </div>
          {/* TODO: Date */}
          <div className="pl-4 border-l-1 border-gray-300">
            Thứ năm, 17/7/2025
          </div>
        </div>
        <div className="flex gap-4 items-center">
          <div className="pl-4">
            <Link to="/tin-tuc-24h">Mới nhất</Link>
          </div>
          <div className="pl-4 border-l-1 border-gray-300">
            <Link to="/khu-vuc">Tin theo khu vực</Link>
          </div>
          <div className="pl-4 border-l-1 border-gray-300">
            <div className="flex gap-2 items-center">
              <div className="cursor-pointer">
                <SearchRounded />
              </div>
              <div className="flex items-center gap-1 cursor-pointer hover:text-blue-400">
                <Dialog>
                  <DialogTrigger asChild>
                    <Button type="button">
                      <AccountCircleOutline />
                      Đăng nhập
                    </Button>
                  </DialogTrigger>
                  <Formik
                    initialValues={{ email: "", password: "" }}
                    onSubmit={(values) => {
                      console.log("Form submitted with values:", values);
                    }}
                  >
                    {({ values, setFieldValue, setFieldTouched }) => {
                      console.log("Formik values:", values);

                      return (
                        <DialogContent className="sm:max-w-[425px]">
                          <DialogTitle>Edit profile</DialogTitle>
                          <div className="flex justify-center items-center text-xl font-bold">
                            Đăng nhập / Tạo tài khoản
                          </div>
                          <div className="grid gap-4">
                            <div className="grid gap-3 relative">
                              <label htmlFor="email">Email</label>
                              <input
                                id="email"
                                name="email"
                                type="email"
                                value={values.email}
                                onChange={(e) => {
                                  setFieldValue("email", e.target.value);
                                  setFieldTouched("email", true);
                                }}
                                disabled={showPasswordBox}
                              />
                              {showPasswordBox && (
                                <div className="absolute right-3 top-1/2 -translate-y-1/2">
                                  <Button
                                    onClick={() => setShowPasswordBox(false)}
                                  >
                                    <EditPenTextWrite />
                                  </Button>
                                </div>
                              )}
                            </div>
                            {showPasswordBox && (
                              <div className="grid gap-3 relative">
                                <label htmlFor="password">Password</label>
                                <input
                                  id="password"
                                  name="password"
                                  type={showPassword ? "text" : "password"}
                                  value={values.password}
                                  onChange={(e) => {
                                    setFieldValue("password", e.target.value);
                                    setFieldTouched("password", true);
                                  }}
                                />
                                {values.password && (
                                  <div className="absolute right-3 top-1/2 -translate-y-1/2">
                                    <Button
                                      onClick={() =>
                                        setShowPassword(!showPassword)
                                      }
                                    >
                                      {showPassword ? <EyeOff /> : <Eye />}
                                    </Button>
                                  </div>
                                )}
                              </div>
                            )}
                          </div>
                          <div className="flex justify-center">
                            {!showPasswordBox && (
                              <Button
                                variant="primary"
                                fill
                                disabled={!values.email}
                                onClick={() => {
                                  setShowPasswordBox(true);
                                  setFieldValue("password", "");
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
                        </DialogContent>
                      );
                    }}
                  </Formik>
                </Dialog>
              </div>
              <div className="cursor-pointer">
                <NotificationsOutline />
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
