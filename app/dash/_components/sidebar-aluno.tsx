'use client'

import {User, createClientComponentClient} from "@supabase/auth-helpers-nextjs"
import {useRouter} from "next/navigation"


import { useState, useEffect } from 'react'
import {
  Sidebar,
  SidebarHeader,
  SidebarContent,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarFooter,
  SidebarTrigger,
} from '@/components/ui/sidebar'
import {
  BookOpen,
  Home,
  Calendar,
  Users,
  Settings,
  Menu,
  Search,
  Bell,
  LogOut,
  LibraryBig,
  Cpu,
  Waypoints,
} from 'lucide-react'
import { Avatar, AvatarImage, AvatarFallback } from '@radix-ui/react-avatar'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { ModeToggle } from '@/components/theme_provider'
import { DialogTitle } from "@/components/ui/dialog"

export function SidebarAluno() {
  return (
    <Sidebar className="bg-black border-r border-gray-200">
      <SidebarHeader className="p-4">
        <Link href="/dashboard" className="flex items-center space-x-2">
        <LibraryBig className="h-6 w-6 text-[#00B8A5]" />
          <span className="font-extrabold text-xl text-[#333432]">
            suply<span className="font-extralight bg-clip-text text-transparent bg-gradient-to-r from-[#333432] to-[#00B8A5]">Academy</span>
          </span>
        </Link>
      </SidebarHeader>
      <SidebarContent>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton asChild>
              <Link href="/dashboard">
                <Home className="h-5 w-5 mr-3" />
                <span>Dashboard</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
          <SidebarMenuItem>
            <SidebarMenuButton asChild>
              <Link href="/courses">
                <BookOpen className="h-5 w-5 mr-3" />
                <span>Meus Cursos</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
          <SidebarMenuItem>
            <SidebarMenuButton asChild>
              <Link href="/calendar">
                <Calendar className="h-5 w-5 mr-3" />
                <span>Calendário</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
          <SidebarMenuItem>
            <SidebarMenuButton asChild>
              <Link href="/community">
                <Users className="h-5 w-5 mr-3" />
                <span>Comunidade</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarContent>
      <SidebarFooter className="p-4">
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton asChild>
              <Link href="/settings">
                <Settings className="h-5 w-5 mr-3" />
                <span>Configurações</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  )
}

export function HeaderAluno() {
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false)
  const supabase = createClientComponentClient()
  const router = useRouter()
  const [user, setUser] = useState<User | null>(null)
  const getUser = async () => {
    const {data: {user}, error} = await supabase.auth.getUser()

    if (error) {
      console.log("userNav", error)
    } else {
      setUser(user)
    }
  }

  const logout = async () => {
    await supabase.auth.signOut()
    router.refresh()
  }

  useEffect(() => {
    getUser()
  }, [])
  return (
    <header className="sticky top-0 z-10 bg-white border-b border-gray-200 px-4 py-2">
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <SidebarTrigger className="mr-4">
            <Menu className="h-6 w-6" color={'black'} />
          </SidebarTrigger>
          <Link href="/dashboard" className="items-center space-x-2 flex md:hidden">
          <LibraryBig className="h-6 w-6 text-[#00B8A5]" />
          <span className="font-extrabold text-xl text-[#333432]">
            suply<span className="font-extralight bg-clip-text text-transparent bg-gradient-to-r from-[#333432] to-[#00B8A5]">Academy</span>
          </span>
        </Link>
          <form className="hidden md:block">
            <div className="relative">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500" />
              <input
                type="search"
                placeholder="Buscar cursos..."
                className="pl-8 h-9 w-[200px] rounded-md border border-gray-300 bg-white px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-gray-500 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-purple-500 disabled:cursor-not-allowed disabled:opacity-50"
              />
            </div>
          </form>
        </div>
        <div className="flex items-center space-x-4">
          <Button variant="ghost" size="icon" className="relative">
            <Bell className="h-5 w-5" />
            <span className="absolute top-0 right-0 h-2 w-2 rounded-full bg-red-600"></span>
            <span className="sr-only">Notificações</span>
          </Button>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
          >
            <Avatar>
              <AvatarImage
                className="rounded-full"
                src="https://github.com/shadcn.png"
                alt="@shadcn"
              />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <span className="sr-only">Menu do usuário</span>
          </Button>
        </div>
      </div>
      {isUserMenuOpen && (
        <div className="absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white border z-50">
          <div className="py-1">
            <div className="block px-4 py-2 text-sm border-b border-gray-200">
              <div className="text-gray-700 first-letter:uppercase">
                {user?.email?.split("@")[0]}
              </div>
              <div className="text-xs text-gray-500">
                {user?.email}
              </div>
            </div>
            <Link
              href="/profile"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
            >
              Perfil
            </Link>
            <Link
              href="/settings"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
            >
              Configurações
            </Link>
            <button
              onClick={logout}
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full"
            >
              <span className="flex items-center">
                <LogOut className="mr-2 h-4 w-4" />
                Sair
              </span>
            </button>
          </div>
        </div>
      )}
    </header>
  )
}

export function FooterAluno() {
  return (
    <footer className="border-t border-gray-200 py-4 px-6">
      <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
        <p className="text-center text-sm text-gray-600 md:text-left">
          © 2024 F5Academy. Todos os direitos reservados.
        </p>
        <div className="flex items-center space-x-4">
          <Link
            href="/support"
            className="text-sm text-gray-600 hover:text-purple-600 hover:underline"
          >
            Suporte
          </Link>
          <Link
            href="/terms"
            className="text-sm text-gray-600 hover:text-purple-600 hover:underline"
          >
            Termos
          </Link>
          <Link
            href="/privacy"
            className="text-sm text-gray-600 hover:text-purple-600 hover:underline"
          >
            Privacidade
          </Link>
        </div>
      </div>
    </footer>
  )
}
