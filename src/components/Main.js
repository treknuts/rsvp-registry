import Home from "./Home";
import Registry from "./Registry";
import Info from "./Info";

const Main = () => {
  return (
    <main
      style={{ marginTop: "6rem" }}
      className='min-vh-100 p-md-0 p-4 mb-4 d-flex flex-column justify-content-center align-items-center'
    >
      <Home />
      <Info />
      <Registry />
    </main>
  );
};

export default Main;
