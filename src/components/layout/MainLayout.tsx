import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <div className="App min-h-screen mx-auto space-y-10 bg-primary">
      <Outlet />
    </div>
  );
};

export default MainLayout;
