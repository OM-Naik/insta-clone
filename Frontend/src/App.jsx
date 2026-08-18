import { useRoutes } from "react-router";
import AppRoutes from "./AppRoutes";
import "./features/shared/global.scss"
import { AuthProvider } from "./features/auth/auth.context.jsx";
import { PostContextProvider } from "./features/posts/post.context.jsx";

function App() {

  return (
    <AuthProvider>
      <PostContextProvider>
        <AppRoutes router={useRoutes} />
      </PostContextProvider>
    </AuthProvider>
  )
}

export default App
