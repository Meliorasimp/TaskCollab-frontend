import { motion } from "framer-motion";
const Notifications = () => {
  // Sample notification data
  const notifications = [
    {
      id: 1,
      type: "task",
      message: "Jane Doe assigned you to Client Presentation",
      time: "2 hours ago",
      unread: true,
    },
    {
      id: 2,
      type: "comment",
      message: "Nicole Demara commented on Update Website",
      time: "5 hours ago",
      unread: true,
    },
    {
      id: 3,
      type: "complete",
      message: "Jane Doe completed Design new logo",
      time: "1 day ago",
      unread: false,
    },
    {
      id: 4,
      type: "deadline",
      message: "API Integration is due tomorrow",
      time: "1 day ago",
      unread: false,
    },
  ];

  const getNotificationIcon = (type: string) => {
    switch (type) {
      case "task":
        return (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="size-5 text-blue-600"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 0 0 2.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 0 0-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25ZM6.75 12h.008v.008H6.75V12Zm0 3h.008v.008H6.75V15Zm0 3h.008v.008H6.75V18Z"
            />
          </svg>
        );
      case "comment":
        return (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="size-5 text-purple-600"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M8.625 12a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 0 1-2.555-.337A5.972 5.972 0 0 1 5.41 20.97a5.969 5.969 0 0 1-.474-.065 4.48 4.48 0 0 0 .978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25Z"
            />
          </svg>
        );
      case "complete":
        return (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="size-5 text-green-600"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
            />
          </svg>
        );
      case "deadline":
        return (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="size-5 text-orange-600"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
            />
          </svg>
        );
      default:
        return null;
    }
  };

  return (
    <motion.div
      className="absolute w-96 right-6 rounded-xl shadow-xl bg-white z-10 border border-gray-200 max-h-125 flex flex-col"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.2 }}
    >
      {/* Header */}
      <div className="flex items-center justify-between p-4 border-b border-gray-200">
        <h2 className="font-semibold text-lg text-gray-800">Notifications</h2>
        <button className="text-sm text-blue-600 hover:text-blue-700 font-medium">
          Mark all as read
        </button>
      </div>

      {/* Notification List */}
      <div className="overflow-y-auto flex-1">
        {notifications.map((notification) => (
          <div
            key={notification.id}
            className={`flex items-start gap-x-3 px-4 py-3 hover:bg-gray-50 transition-colors cursor-pointer border-b border-gray-100 ${
              notification.unread ? "bg-blue-50" : ""
            }`}
          >
            <div className="mt-1">{getNotificationIcon(notification.type)}</div>
            <div className="flex-1">
              <p className="text-sm text-gray-800">{notification.message}</p>
              <span className="text-xs text-gray-500 mt-1 block">
                {notification.time}
              </span>
            </div>
            {notification.unread && (
              <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
            )}
          </div>
        ))}
      </div>

      {/* Footer */}
      <div className="p-3 border-t border-gray-200 text-center">
        <button className="text-sm text-blue-600 hover:text-blue-700 font-medium">
          View all notifications
        </button>
      </div>
    </motion.div>
  );
};

export default Notifications;
