import Sidebar from "./components/Sidebar.jsx";

const App = () => {
  return (
    <div className="bg-black h-screen w-full flex">
      <Sidebar />
      <div className="flex-1 flex items-center justify-center">
        Main content
      </div>
    </div>
  );
};

export default App;