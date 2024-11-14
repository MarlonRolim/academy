import { createServerComponentClient,User } from "@supabase/auth-helpers-nextjs";
import { redirect, RedirectType, useRouter } from "next/navigation";
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Progress } from '@/components/ui/progress'
import { BookOpen, Video, Users } from 'lucide-react'
import WelcomeText from "./_components/welcome-text"
import { useEffect, useState } from "react";
import { cookies } from "next/headers";

const CourseCard = ({ 
  title, 
  progress, 
  lastLesson 
}: {
  title: string;
  progress: number;
  lastLesson: string;
}) => (
  <Card className="hover:shadow-md transition-shadow">
    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
      <CardTitle className="text-sm font-medium">{title}</CardTitle>
      <Video className="h-4 w-4 text-[#00B8A5]" />
    </CardHeader>
    <CardContent>
      <div className="text-xs text-gray-600 mb-2">
        Última aula: {lastLesson}
      </div>
      <Progress
        value={progress}
        className="w-full bg-[#e4fffd]"
        // indicatorClassName="bg-[#00B8A5]"
      />
      <div className="text-xs text-gray-600 mt-2">{progress}% concluído</div>
    </CardContent>
  </Card>
)

const StatCard = ({ title, value, icon: Icon }: { title: string, value: string, icon: React.ElementType }) => (
  <Card>
    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
      <CardTitle className="text-sm font-medium">{title}</CardTitle>
      <Icon className="h-4 w-4 text-[#00B8A5]" />
    </CardHeader>
    <CardContent>
      <div className="text-2xl font-bold">{value}</div>
    </CardContent>
  </Card>
)

export default async function Dashboard() {
  let loggedIn = false
  try{
      
      const supabase = createServerComponentClient({cookies})
      const {data: {session}} = await supabase.auth.getSession()
      if (session) loggedIn = true
  }catch(error){
      console.error("login",error)
  } finally{
      if (!loggedIn) redirect("/",RedirectType.replace)
  }
  


  
  return (
    <main>
      <WelcomeText/>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        <StatCard title="Cursos em Andamento" value="4" icon={BookOpen} />
        <StatCard title="Horas Estudadas" value="32" icon={Video} />
        <StatCard title="Certificados" value="2" icon={BookOpen} />
        <StatCard title="Pontos na Comunidade" value="150" icon={Users} />
      </div>
      <h2 className="text-2xl font-semibold mt-8 mb-4 text-gray-800">
        Seus Cursos
      </h2>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <CourseCard
          title="Introdução ao React"
          progress={75}
          lastLesson="Hooks Avançados"
        />
        <CourseCard
          title="Machine Learning Básico"
          progress={30}
          lastLesson="Regressão Linear"
        />
        <CourseCard
          title="Design UX/UI"
          progress={50}
          lastLesson="Prototipagem"
        />
      </div>
      <div className="grid gap-6 md:grid-cols-2 mt-8">
        <Card>
          <CardHeader>
            <CardTitle className="text-gray-800">Próxima Mentoria</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600 mb-2">Quarta-feira, 15:00 - 16:00</p>
            <p className="font-medium text-gray-800">
              Tema: Estratégias de Estudo Eficientes
            </p>
            <Button className="mt-4 bg-[#00B8A5] hover:bg-[#333432] text-white">
              Entrar na Sala
            </Button>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="text-gray-800">
              Atividade da Comunidade
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              <li className="flex items-center space-x-2">
                <span className="w-2 h-2 rounded-full bg-green-500"></span>
                <span className="text-gray-700">
                  Nova resposta no fórum de React
                </span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="w-2 h-2 rounded-full bg-blue-500"></span>
                <span className="text-gray-700">
                  Evento ao vivo: Carreira em Tech
                </span>
              </li>
            </ul>
            <Button
              variant="outline"
              className="mt-4 w-full border-[#00B8A5] text-[#00B8A5] hover:bg-purple-50"
            >
              Ver Todas Atividades
            </Button>
          </CardContent>
        </Card>
      </div>
      
    </main>
  )
}
