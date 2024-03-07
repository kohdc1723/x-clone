"use client";

import { useRouter } from "next/navigation";

import Main from "../_component/main";

export default function LoginPage() {
    const router = useRouter();

    router.replace("/i/flow/login");

    return <Main />;
};