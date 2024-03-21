import { ReactNode } from "react";

import style from "@/app/(before-login)/_components/main.module.css";

type BeforeLoginLayoutProps = {
    children: ReactNode,
    modal: ReactNode
};

export default function BeforeLoginLayout({
    children,
    modal
}: BeforeLoginLayoutProps) {
    return (
        <div className={style.container}>
            {children}
            {modal}
        </div>
    );
};