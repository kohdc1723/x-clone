import Image from "next/image";
import Link from "next/link";

import style from "@/app/(before-login)/_styles/main.module.css";
import X from "@/../public/x.png";

export default function Main() {
    return (
        <>
            <div className={style.left}>
                <Image src={X} alt="logo" width="300" height="300"/>
            </div>
            <div className={style.right}>
                <h1>Happening now</h1>
                <h2>Join today.</h2>
                <Link
                    href="/i/flow/signup"
                    className={style.signup}
                >
                    Create account
                </Link>

                <h3>Already have an account?</h3>
                <Link
                    href="/login"
                    className={style.login}
                >
                    Sign in
                </Link>
            </div>
        </>
    );
};