"use client";

import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";

import Main from "../_components/main";

export default function LoginPage() {
    const router = useRouter();

    const { data: session } = useSession();

    if (session?.user) {
        router.replace("/home");
        
        return null;
    }

    router.replace("/i/flow/login");

    return <Main />;
};