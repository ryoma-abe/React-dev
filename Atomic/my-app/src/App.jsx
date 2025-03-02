import { UserProvider } from "./provider/UserProvider";
import { Router } from "./router/Router";

export const App = () => {
  return (
    <UserProvider>
      <Router />
    </UserProvider>
  );
};
