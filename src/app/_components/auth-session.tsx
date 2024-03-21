"use client";

import { SessionProvider } from "next-auth/react";
import { ReactNode } from "react";

interface AuthSessionProps {
    children: ReactNode;
};

export default function AuthSession({
    children
}: AuthSessionProps) {
    return <SessionProvider>{children}</SessionProvider>;
};