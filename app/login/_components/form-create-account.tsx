"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { Form ,FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form"
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs"
import { useRouter } from "next/navigation"

const formSchema = z.object({
  email: z.string({required_error: "Email é obrigatório"}).email("Email inválido"),
  password: z.string({required_error: "Senha é obrigatório"}).min(6, "A senha deve ter no mínimo 6 caracteres").max(20, "A senha deve ter no máximo 20 caracteres")
})

type FormData = z.infer<typeof formSchema>

export default function FormCreateAccount() {
    const router = useRouter()
    const form = useForm<z.infer<typeof formSchema>>({
      defaultValues: {
        email: "",
        password: ""
      },
      resolver: zodResolver(formSchema)
    })

    const onSubmit = async (data: z.infer<typeof formSchema>) => {
      const supabase = createClientComponentClient()
      const {email, password} = data

      try {
        const { data: { user }, error } = await supabase.auth.signUp({
          email,
          password,
          // options: {
          //   emailRedirectTo: `${window.location.origin}/auth/callback`
          // }
        })
        
        if (error) {
          console.error('Erro no cadastro:', error.message)
          return
        }
        if (user) {
            form.reset()
            // router.push('/login')
            router.refresh()
        }

      } catch (error) {
        console.log('Erro ao cadastrar usuário:', error)
      }
    }

    return (
        <Card>
          <CardHeader>
            <CardTitle className="text-[#00B8A5]">Cadastre-se</CardTitle>
            <CardDescription>
              Crie sua conta para começar a usar o sistema.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input 
                          className="focus-visible:ring-[#00B8A5]"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="password"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Senha</FormLabel>
                      <FormControl>
                        <Input
                          type="password"
                          className="focus-visible:ring-[#00B8A5]"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <CardFooter className="px-0 pt-4">
                  <Button type="submit" className="w-full bg-[#00B8A5] text-white">
                    Cadastrar
                  </Button>
                </CardFooter>
              </form>
            </Form>
          </CardContent>
        </Card>
    )
}