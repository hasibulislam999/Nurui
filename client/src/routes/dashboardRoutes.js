import Dashboard from "../layout/dashboard/Dashboard";
import MyProfile from "../page/dashboard/MyProfile";
import AddPost from "../page/dashboard/post/AddPost";
import AllPosts from "../page/dashboard/post/AllPosts";
import PostList from "../page/dashboard/post/PostList";
import PostUpdate from "../page/dashboard/post/PostUpdate";
import AddTag from "../page/dashboard/tag/AddTag";
import AllTags from "../page/dashboard/tag/AllTags";
import TagList from "../page/dashboard/tag/TagList";
import TagUpdate from "../page/dashboard/tag/TagUpdate";
import UserList from "../page/dashboard/UserList";
import AdminRoute from "../utils/AdminRoute";
import PrivateRoute from "../utils/PrivateRoute";

const dashboardRoutes = {
  path: "/dashboard",
  element: (
    <PrivateRoute>
      <Dashboard />
    </PrivateRoute>
  ),
  children: [
    {
      path: "/dashboard",
      element: <MyProfile />,
    },
    {
      path: "add-tag",
      element: <AddTag />,
    },
    {
      path: "tag-list",
      element: <TagList />,
    },
    {
      path: "tag-list/:id",
      element: <TagUpdate />,
    },
    {
      path: "add-post",
      element: <AddPost />,
    },
    {
      path: "post-list",
      element: <PostList />,
    },
    {
      path: "post-list/:id",
      element: <PostUpdate />,
    },
    {
      path: "user-list",
      element: (
        <AdminRoute>
          <UserList />
        </AdminRoute>
      ),
    },
    {
      path: "all-tags",
      element: (
        <AdminRoute>
          <AllTags />
        </AdminRoute>
      ),
    },
    {
      path: "all-posts",
      element: (
        <AdminRoute>
          <AllPosts />
        </AdminRoute>
      ),
    },
  ],
};

export default dashboardRoutes;
