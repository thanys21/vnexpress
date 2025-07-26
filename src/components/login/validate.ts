import * as yup from "yup";

const loginValidation = yup.object().shape({
    email: yup.string().email("Email không hợp lệ, vui lòng thử lại").required("Hãy nhập email"),
    password: yup.string().required("Địa chỉ email hoặc mật khẩu của bạn không chính xác, vui lòng kiểm tra & thử lại"),
});

export default loginValidation;
