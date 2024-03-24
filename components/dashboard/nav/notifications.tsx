"use client"

import Link from "next/link"
import {
  Bell,
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

export function NotificationDropdown() {
  const { setTheme, theme } = useTheme()
  return (
    <DropdownMenu>
      <DropdownMenuTrigger
        asChild
        className="cursor-pointer rounded-full flex flex-col items-center justify-center  p-2 mr-2 data-[state=open]:border-primary border-accent border-2"
      >
        <Bell className="h-10 w-10" />
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-80" align="end">
        <DropdownMenuLabel>Notifications</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem>
            <Link
              href="/dashboard"
              className="w-full h-full flex items-center justify-start"
            >
              <User className="mr-2 h-4 w-4" />
              <span>Dashboard</span>
            </Link>
          </DropdownMenuItem>

          <DropdownMenuItem>
            <CreditCard className="mr-2 h-4 w-4" />
            <span>Billing</span>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Settings className="mr-2 h-4 w-4" />
            <span>Settings</span>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Keyboard className="mr-2 h-4 w-4" />
            <span>Keyboard shortcuts</span>
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem>
            <Users className="mr-2 h-4 w-4" />
            <span>Team</span>
          </DropdownMenuItem>
          <DropdownMenuSub>
            <DropdownMenuSubTrigger>
              <UserPlus className="mr-2 h-4 w-4" />
              <span>Invite users</span>
            </DropdownMenuSubTrigger>
            <DropdownMenuPortal>
              <DropdownMenuSubContent>
                <DropdownMenuItem>
                  <Mail className="mr-2 h-4 w-4" />
                  <span>Email</span>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <MessageSquare className="mr-2 h-4 w-4" />
                  <span>Message</span>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <PlusCircle className="mr-2 h-4 w-4" />
                  <span>More...</span>
                </DropdownMenuItem>
              </DropdownMenuSubContent>
            </DropdownMenuPortal>
          </DropdownMenuSub>
          <DropdownMenuSub>
            <DropdownMenuSubTrigger>
              <UserPlus className="mr-2 h-4 w-4" />
              <span>Theme</span>
            </DropdownMenuSubTrigger>
            <DropdownMenuPortal>
              <DropdownMenuSubContent>
                <DropdownMenuItem
                  className="flex items-center justify-between"
                  onClick={() => setTheme("system")}
                >
                  <div className="flex items-center justify-start">
                    <Monitor className="mr-2 h-4 w-4" />
                    <span>System</span>
                  </div>
                  {theme === "system" && <Check className="h-4 w-4 ml-2" />}
                </DropdownMenuItem>
                <DropdownMenuItem
                  className="flex items-center justify-between"
                  onClick={() => setTheme("light")}
                >
                  <div className="flex items-center justify-start">
                    <Sun className="mr-2 h-4 w-4" />
                    <span>Light</span>
                  </div>
                  {theme === "light" && <Check className="h-4 w-4 ml-2" />}
                </DropdownMenuItem>

                <DropdownMenuItem
                  className="flex items-center justify-between"
                  onClick={() => setTheme("dark")}
                >
                  <div className="flex items-center justify-start">
                    <Moon className="mr-2 h-4 w-4" />
                    <span>Dark</span>
                  </div>
                  {theme === "dark" && <Check className="h-4 w-4" ml-2 />}
                </DropdownMenuItem>
              </DropdownMenuSubContent>
            </DropdownMenuPortal>
          </DropdownMenuSub>
          <DropdownMenuItem>
            <Plus className="mr-2 h-4 w-4" />
            <span>New Team</span>
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          {/* <Github className="mr-2 h-4 w-4" /> */}
          <span>GitHub</span>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <LifeBuoy className="mr-2 h-4 w-4" />
          <span>Support</span>
        </DropdownMenuItem>
        <DropdownMenuItem disabled>
          <Cloud className="mr-2 h-4 w-4" />
          <span>API</span>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem onClick={() => signOut()}>
          <LogOut className="mr-2 h-4 w-4" />
          <span>Logout</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
