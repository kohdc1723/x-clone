"use client";

import { signOut, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

import style from "@/app/(after-login)/_components/logout-button.module.css";

export default function LogoutButton() {
    const router = useRouter();
    
    const { data: me } = useSession();

    const onClickLogout = () => {
        signOut({
            redirect: false
        }).then(() => {
            router.replace("/");
        });
    };

    if (!me?.user) return null;

    return (
        <button className={style.logOutButton} onClick={onClickLogout}>
            <div className={style.logOutUserImage}>
                <img src={me.user.image as string} alt={me.user.email as string} />
            </div>
            <div className={style.logOutUserName}>
                <div>{me.user.name}</div>
                <div>@{me.user.email}</div>
            </div>
        </button>
    );
};