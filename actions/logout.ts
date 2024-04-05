"use server"

import { signOut } from "@/auth"

export const logout = async () => {
    // Can run server actions before signOut
    await signOut();
}