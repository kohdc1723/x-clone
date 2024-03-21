"use client";

import { usePathname } from "next/navigation";
import { useSession } from "next-auth/react";

import style from "@/app/(after-login)/_components/trend-section.module.css";
import Trend from "@/app/(after-login)/_components/trend";

export default function TrendSection() {
    const pathname = usePathname();

    const { data } = useSession();

    if (pathname === "/explore") return null;

    if (data?.user) {
        return (
            <div className={style.trendBg}>
                <div className={style.trend}>
                    <h3>나를 위한 트렌드</h3>
                    <Trend />
                    <Trend />
                    <Trend />
                    <Trend />
                    <Trend />
                    <Trend />
                    <Trend />
                    <Trend />
                    <Trend />
                    <Trend />
                </div>
            </div>
        );
    }

    return (
        <div className={style.trendBg}>
            <div className={style.trend}>
                Cannot load trend
            </div>
        </div>
    );
};