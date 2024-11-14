'use client'

import { motion } from "framer-motion"
import { User } from "@supabase/supabase-js"
import { redirect } from "next/navigation"
import { useState, useEffect } from "react"
import {createClientComponentClient} from "@supabase/auth-helpers-nextjs"

export default function WelcomeText() {
    
  const [user, setUser] = useState<User | null>(null)
    const getUser = async () => {
        const supabase = createClientComponentClient()
        const { data: { user }, error } = await supabase.auth.getUser()
    
        if (!user) {
          console.log("userNav", error)
          redirect("/")
        } else {
          setUser(user)
        }
      }
    useEffect(() => {
        getUser()
      }, [])
    return (
        <motion.h1
        className="text-3xl font-bold mb-6 text-gray-800"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Bem-vindo de volta, <span className="first-letter:uppercase">{user?.email?.split("@")[0]}</span>!
      </motion.h1>
    )
}