import { useAuth } from "@/hooks/useAuth";

const UserInfo = () => {
  const { user } = useAuth();
  return (
    <div>
      <div>
        {/* TODO: Avatar user */}
        Avatar: <img src={user?.avatar} alt={user?.name} />
      </div>
      <div>UserInfo: {user?.name}</div>
      <div>Email: {user?.email}</div>
    </div>
  );
};

export default UserInfo;
