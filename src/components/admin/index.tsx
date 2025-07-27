import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import PostManager from "./post-manager";
import UserInfo from "./user-info";

const AdminPage = () => {
  return (
    <div>
      <Tabs>
        <TabsList className="bg-gray-100 space-x-2">
          <TabsTrigger value="information">Account</TabsTrigger>
          <TabsTrigger value="posts">Posts</TabsTrigger>
        </TabsList>

        <TabsContent value="information">
          <UserInfo />
        </TabsContent>
        <TabsContent value="posts">
          <PostManager />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default AdminPage;
