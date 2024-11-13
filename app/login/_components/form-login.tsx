"use client"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"
import FormCreateAccount from "./form-create-account"
import { BookOpen } from "lucide-react"
import FormLoginAccount from "./from-login-account"

export function PageLogin() {
  return (
    <div className="flex flex-col justify-center items-center h-screen bg-gradient-to-br from-purple-600 to-blue-800 animate-gradient">
      <div className="flex items-center mb-8 absolute left-1/2 top-24 -translate-x-1/2">
        <BookOpen className="h-12 w-12 text-white" />
        <span className="ml-2 text-4xl md:text-5xl font-bold text-white">
          EduConnect
        </span>
      </div>
      <Tabs defaultValue="account" className="w-[400px]">
        <TabsList className="grid w-full grid-cols-2 h-12">
          <TabsTrigger value="account" className="transition-all delay-150 h-full data-[state=active]:bg-purple-600 data-[state=active]:text-white">Login</TabsTrigger>
          <TabsTrigger value="password" className="transition-all delay-150 h-full data-[state=active]:bg-purple-600 data-[state=active]:text-white">Cadastre-se</TabsTrigger>
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
