"use client";

import { useEffect } from "react";

export default function MswComponent() {
    useEffect(() => {
        if (typeof window !== "undefined" && process.env.NEXT_PUBLIC_API_MOCKING === "enabled") {
            require("@/mocks/browser");
        }
    }, []);

    return null;
};