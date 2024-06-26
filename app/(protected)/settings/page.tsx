"use client"

import { logout } from "@/actions/logout";
import { useCurrentUser } from "@/hooks/use-current-user";
import { useSession } from "next-auth/react";


const SettingsPage =  () => {
    const user = useCurrentUser();

    return(
        <div className="bg-white p-10 rounded-xl">
            <button type="submit" onClick={() => logout()}>
                Sign Out
            </button>
        </div>
    )
}

export default SettingsPage;