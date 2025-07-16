import Header from "../components/fragments/Header";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <>
      <header className="">
        <Header />
      </header>
      <main className="pt-14 md:pt-16">
        <Outlet />
      </main>
    </>
  );
};

export default MainLayout;
