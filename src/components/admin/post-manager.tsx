import { Button } from "../ui/button";

const PostManager = () => {
  return (
    <div className="flex justify-between items-center p-4 bg-white shadow-md rounded-lg hover:shadow-lg transition-shadow">
      <div>PostManager</div>
      <div>
        <Button variant="primary">Create Post</Button>
      </div>
    </div>
  );
};

export default PostManager;
