import { PropsWithChildren } from 'react'
import {
  FooterAluno,
  HeaderAluno,
  SidebarAluno,
} from './_components/sidebar-aluno'
import { SidebarProvider } from '@/components/ui/sidebar'

export default async function Layout({ children }: PropsWithChildren) {
  return (
    <SidebarProvider>
      <div className="flex min-h-screen w-screen bg-gray-100">
        <SidebarAluno />
        <div className="flex-1 flex flex-col">
          <HeaderAluno />
          <main className="flex-1 overflow-y-auto p-6">{children}</main>
          <FooterAluno />
        </div>
      </div>
    </SidebarProvider>
  )
}
