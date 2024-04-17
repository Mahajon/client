"use client"

import Link from "next/link"
import { onAuthStateChanged } from "firebase/auth"
import {
  Check,
  Cloud,
  CreditCard,
  // Github,
  Keyboard,
  LifeBuoy,
  LogOut,
  Mail,
  MessageSquare,
  Monitor,
  Moon,
  Plus,
  PlusCircle,
  Settings,
  Sun,
  SunSnow,
  User,
  UserPlus,
  Users,
} from "lucide-react"
import NextAuth from "next-auth/next"
import { signOut } from "next-auth/react"
import { useTheme } from "next-themes"

import { auth } from "@/lib/firebase"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export function UserDropdownMenu({ user }: { user: any }) {
  const { setTheme, theme } = useTheme()
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Avatar className="size-10 cursor-pointer">
          <AvatarImage src={user.image} alt="user" />
          <AvatarFallback>{user.name[0]}</AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56" align="end">
        <DropdownMenuLabel>{user.name}</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem>
            <Link
              href="/dashboard"
              className="flex size-full items-center justify-start"
            >
              <User className="mr-2 size-4" />
              <span>Dashboard</span>
            </Link>
          </DropdownMenuItem>

          <DropdownMenuItem>
            <CreditCard className="mr-2 size-4" />
            <span>Billing</span>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Link
              href="/dashboard/settings"
              className="flex size-full items-center justify-start"
            >
              <Settings className="mr-2 size-4" />
              <span>Settings</span>
            </Link>
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuSub>
            <DropdownMenuSubTrigger>
              <UserPlus className="mr-2 size-4" />
              <span>Theme</span>
            </DropdownMenuSubTrigger>
            <DropdownMenuPortal>
              <DropdownMenuSubContent>
                <DropdownMenuItem
                  className="flex items-center justify-between"
                  onClick={() => setTheme("system")}
                >
                  <div className="flex items-center justify-start">
                    <Monitor className="mr-2 size-4" />
                    <span>System</span>
                  </div>
                  {theme === "system" && <Check className="ml-2 size-4" />}
                </DropdownMenuItem>
                <DropdownMenuItem
                  className="flex items-center justify-between"
                  onClick={() => setTheme("light")}
                >
                  <div className="flex items-center justify-start">
                    <Sun className="mr-2 size-4" />
                    <span>Light</span>
                  </div>
                  {theme === "light" && <Check className="ml-2 size-4" />}
                </DropdownMenuItem>

                <DropdownMenuItem
                  className="flex items-center justify-between"
                  onClick={() => setTheme("dark")}
                >
                  <div className="flex items-center justify-start">
                    <Moon className="mr-2 size-4" />
                    <span>Dark</span>
                  </div>
                  {theme === "dark" && <Check className="size-4" ml-2 />}
                </DropdownMenuItem>
              </DropdownMenuSubContent>
            </DropdownMenuPortal>
          </DropdownMenuSub>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />

        <DropdownMenuItem disabled>
          <LifeBuoy className="mr-2 size-4" />
          <span>Support</span>
        </DropdownMenuItem>

        <DropdownMenuSeparator />
        <DropdownMenuItem onClick={() => signOut()}>
          <LogOut className="mr-2 size-4" />
          <span>Logout</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

{
  /* <Button variant="secondary" size="icon" className="rounded-full">
            <CircleUser className="size-5" />
            <span className="sr-only">Toggle user menu</span>
          </Button> */
}
