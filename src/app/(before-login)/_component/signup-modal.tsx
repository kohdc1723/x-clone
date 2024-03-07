"use client";

import { ChangeEventHandler, FormEventHandler, useState } from "react";
import { useRouter } from "next/navigation";

import style from "@/app/(before-login)/_styles/signup.module.css";

export default function SignupModal() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [nickname, setNickname] = useState('');
    const [image, setImage] = useState('');
    const [imageFile, setImageFile] = useState<File>();

    const router = useRouter();
    const onClickClose = () => {
        router.back();
        // TODO: 뒤로가기가 /home이 아니면 /home으로 보내기
    }

    const onChangeUsername: ChangeEventHandler<HTMLInputElement> = (e) => { setUsername(e.target.value) };

    const onChangePassword: ChangeEventHandler<HTMLInputElement> = (e) => { setPassword(e.target.value) };
    const onChangeNickname: ChangeEventHandler<HTMLInputElement> = (e) => { setNickname(e.target.value) };
    const onChangeImageFile: ChangeEventHandler<HTMLInputElement> = (e) => {
        e.target.files && setImageFile(e.target.files[0])
    };

    const onSubmit: FormEventHandler = (e) => {
        e.preventDefault();
        fetch('http://localhost:9090/api/users', {
            method: 'post',
            body: JSON.stringify({
                username,
                nickname,
                image,
                password,
            }),
            credentials: 'include',
        }).then((response: Response) => {
            console.log(response.status);
            if (response.status === 200) {
                router.replace('/home');
            }
        }).catch((err) => {
            console.error(err);
        });
    }

    return (
        <>
            <div className={style.modalBackground}>
                <div className={style.modal}>
                    <div className={style.modalHeader}>
                        <button className={style.closeButton} onClick={onClickClose}>
                            <svg width={24} viewBox="0 0 24 24" aria-hidden="true"
                                className="r-18jsvk2 r-4qtqp9 r-yyyyoo r-z80fyv r-dnmrzs r-bnwqim r-1plcrui r-lrvibr r-19wmn03">
                                <g>
                                    <path
                                        d="M10.59 12L4.54 5.96l1.42-1.42L12 10.59l6.04-6.05 1.42 1.42L13.41 12l6.05 6.04-1.42 1.42L12 13.41l-6.04 6.05-1.42-1.42L10.59 12z"></path>
                                </g>
                            </svg>
                        </button>
                        <div>Create your account</div>
                    </div>
                    <form>
                        <div className={style.modalBody}>
                            <div className={style.inputDiv}>
                                <label className={style.inputLabel} htmlFor="username">Username</label>
                                <input id="username" className={style.input} type="text" placeholder=""
                                    value={username}
                                    onChange={onChangeUsername}
                                />
                            </div>
                            <div className={style.inputDiv}>
                                <label className={style.inputLabel} htmlFor="name">Nickname</label>
                                <input id="name" className={style.input} type="text" placeholder=""
                                    value={nickname}
                                    onChange={onChangeNickname}
                                />
                            </div>
                            <div className={style.inputDiv}>
                                <label className={style.inputLabel} htmlFor="password">Password</label>
                                <input id="password" className={style.input} type="password" placeholder=""
                                    value={password}
                                    onChange={onChangePassword}
                                />
                            </div>
                            <div className={style.inputDiv}>
                                <label className={style.inputLabel} htmlFor="image">Profile</label>
                                <input
                                    id="image"
                                    type="file"
                                    accept="image/*"
                                    onChange={onChangeImageFile}
                                    className={style.input}
                                />
                            </div>
                        </div>
                        <div className={style.modalFooter}>
                            <button className={style.actionButton} disabled>Sign up</button>
                        </div>
                    </form>
                </div>
            </div>
        </>)
}