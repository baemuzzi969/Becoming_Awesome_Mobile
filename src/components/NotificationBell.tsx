import React from "react";
import { useIonRouter } from "@ionic/react";

type NotificationBellProps = {
  count?: number;
  className?: string;
};

const NotificationBell: React.FC<NotificationBellProps> = ({
  count = 0,
  className,
}) => {
  const router = useIonRouter();

  const handleClick = () => {
    router.push("/tabs/notifications", "forward", "push");
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      className={`relative inline-block ${className ?? ""}`}
    >
      <div className="px-[14px] py-3 bg-white rounded-xl">
        <img src="/assets/icon/alarm.png" alt="alarm" />
      </div>
      {count > 0 && (
        <span className="absolute bottom-1 right-1 flex h-5 min-w-5 items-center justify-center rounded-full bg-[#FF2D2D] text-xs font-bold font-roboto text-white">
          {count}
        </span>
      )}
    </button>
  );
};

export default NotificationBell;
