import AccountCircleOutline from "@/icon/account-circle-outline";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
} from "@radix-ui/react-dialog";

const LoginDialog = () => {
  return (
    <Dialog>
      <form>
        <DialogTrigger className="cursor-pointer flex gap-2 items-center">
          <AccountCircleOutline />
          Đăng nhập
        </DialogTrigger>
        <DialogContent>
          <DialogTitle>Đăng nhập</DialogTitle>
          <DialogDescription>
            Nhập thông tin đăng nhập của bạn để tiếp tục.
          </DialogDescription>
          <DialogClose className="mt-4">Đóng</DialogClose>
        </DialogContent>
      </form>
    </Dialog>
  );
};

export default LoginDialog;
