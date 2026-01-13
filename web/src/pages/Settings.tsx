import MainNavbar from "../components/layout/MainNavbar";
import MainTopbar from "../components/layout/MainTopbar";

const Settings = () => {
  return (
    <div className="h-screen flex bg-gray-100 overflow-hidden">
      <MainNavbar />
      <div className="w-full flex flex-col ml-0 lg:ml-56">
        <MainTopbar />
        <main className="p-6">
          <div>
            <h1 className="text-3xl font-bold text-gray-800">Settings</h1>
            <p className="text-gray-500">
              Manage your settings and preferences
            </p>
          </div>
          <div className="mt-4 flex gap-x-6 bg-gray-200 rounded-lg">
            <h1 className="text-gray-600 p-2 cursor-pointer rounded-lg hover:bg-gray-300">
              Profile Info
            </h1>
            <h1 className="text-gray-600 p-2 cursor-pointer rounded-lg hover:bg-gray-300">
              Account Settings
            </h1>
            <h1 className="text-gray-600 p-2 cursor-pointer rounded-lg hover:bg-gray-300">
              Appearance
            </h1>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Settings;
