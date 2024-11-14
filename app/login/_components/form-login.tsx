"use client"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"
import FormCreateAccount from "./form-create-account"
import { BookOpen, LibraryBig } from "lucide-react"
import FormLoginAccount from "./from-login-account"

export function PageLogin() {
  return (
    <div className="flex flex-col justify-center items-center h-screen ">
      <div className="flex items-center mb-8 absolute left-1/2 top-24 -translate-x-1/2">
        <LibraryBig className="h-12 w-12 text-[#333432]" />
        <span className="ml-2 text-4xl md:text-5xl font-extrabold text-[#333432]">
          suply<span className="font-extralight bg-clip-text text-transparent bg-gradient-to-r from-[#333432] to-[#00B8A5]">Academy</span>
        </span>
      </div>
      <Tabs defaultValue="account" className="w-[400px]">
        <TabsList className="grid w-full grid-cols-2 h-12">
          <TabsTrigger value="account" className="transition-all delay-150 h-full data-[state=active]:bg-[#00B8A5] data-[state=active]:text-white">Login</TabsTrigger>
          <TabsTrigger value="password" className="transition-all delay-150 h-full data-[state=active]:bg-[#00B8A5] data-[state=active]:text-white">Cadastre-se</TabsTrigger>
        </TabsList>
        <TabsContent value="account">
          <FormLoginAccount/>
        </TabsContent>
        <TabsContent value="password">
          <FormCreateAccount/>
        </TabsContent>
      </Tabs>
      <style jsx global>{`
          @keyframes gradient {
              0% {
                  background-position: 0% 50%;
              }
              50% {
                  background-position: 100% 50%;
              }
              100% {
                  background-position: 0% 50%;
              }
          }
          .animate-gradient {
              background-size: 200% 200%;
              animation: gradient 5s ease infinite;
          }
      `}</style>
    </div>
  )
}
