import Image from "next/image";
import Link from "next/link";
import {Button} from "./ui/button";
import {PenBox} from "lucide-react";
import {Show, SignInButton} from "@clerk/nextjs";
import UserMenu from "./user-menu";

const Header = () => {
  return (
    <nav className="px-4 py-2 flex justify-between items-center shadow-md border-b-2">
      <Link href={"/"}>
        <Image
          src={"/logo.png"}
          width="150"
          height="20"
          alt="logo"
          className="h-16 w-auto"
        ></Image>
      </Link>
      <div className="items-center flex gap-2">
        <Link href={"/event?create=true"}>
          <Button>
            Create Event <PenBox />
          </Button>
        </Link>
        <Show when="signed-out">
          <SignInButton forceRedirectUrl={"/dashboard"}>
          <Button variant={"outline"}>Sign In</Button>
          </SignInButton>
         
        </Show>
        <Show when="signed-in">
          <UserMenu />
        </Show>
      </div>
    </nav>
  );
};

export default Header;
