import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { redirect, RedirectType } from "next/navigation";
import { PageLogin } from "./_components/form-login";

export default async function Login(){
    let loggedIn = false
    try{
        
        const supabase = createServerComponentClient({cookies})
        const {data: {session}} = await supabase.auth.getSession()
        if (session) loggedIn = true
    }catch(error){
        console.error("login",error)
    } finally{
        if (loggedIn) redirect("/dash",RedirectType.replace)
    }

    return (
        <PageLogin />
    )
}