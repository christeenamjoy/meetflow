"use client";
import { UserButton } from "@clerk/nextjs";
import { ChartNoAxesGantt } from "lucide-react";

const UserMenu = () => {
  return (
    <UserButton
      appearance={{
        elements: {
          avatarBox: {
            width: "2.5rem",   // explicit CSS instead of Tailwind
            height: "2.5rem",
          },
        },
      }}
    >
      <UserButton.MenuItems>
        <UserButton.Link
          label="My Events"
          href="/events"
          labelIcon={<ChartNoAxesGantt size={16} />}
        />
        <UserButton.Action label="manageAccount" />
      </UserButton.MenuItems>
    </UserButton>
  );
};

export default UserMenu;