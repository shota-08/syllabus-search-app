import ChatPage from "./components/ChatPage";
import Sidebar from "./components/Sidebar";

export const App = () => {
  return (
    <div class="flex h-screen justify-center items-center">
      <div className="h-full flex" style={{ width: "1280px" }}>
        <div className="w-1/5 h-full border-r bg-gray-300">
          <Sidebar />
        </div>
        <div className="w-4/5 h-full">
          <ChatPage />
        </div>
      </div>
    </div>
  );
};
