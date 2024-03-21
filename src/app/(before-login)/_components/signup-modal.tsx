"use client";

import { useFormState, useFormStatus } from "react-dom";

import signup from "../_lib/signup";
import BackButton from "./back-button";
import style from "./signup.module.css";

function showMessage(message: string | undefined) {
    if (message === "no_id")
        return "ID is required";
    if (message === "no_name")
        return "Nickname is required";
    if (message === "no_password")
        return "Password is required";
    if (message === "no_image")
        return "Image is required";
    if (message === "user_exists")
        return "ID is already in use"

    return "";
}

export default function SignupModal() {
    const { pending } = useFormStatus();
    const [state, formAction] = useFormState(signup, null);

    return (
        <>
            <div className={style.modalBackground}>
                <div className={style.modal}>
                    <div className={style.modalHeader}>
                        <BackButton />
                        <div>Create your account</div>
                    </div>
                    <form action={formAction}>
                        <div className={style.modalBody}>
                            <div className={style.inputDiv}>
                                <label className={style.inputLabel} htmlFor="id">ID</label>
                                <input
                                    id="id"
                                    name="id"
                                    type="text"
                                    placeholder=""
                                    required
                                    className={style.input}
                                />
                            </div>
                            <div className={style.inputDiv}>
                                <label className={style.inputLabel} htmlFor="name">Nickname</label>
                                <input
                                    id="name"
                                    name="name"
                                    type="text"
                                    placeholder=""
                                    required
                                    className={style.input}
                                />
                            </div>
                            <div className={style.inputDiv}>
                                <label className={style.inputLabel} htmlFor="password">Password</label>
                                <input
                                    id="password"
                                    name="password"
                                    type="password"
                                    placeholder=""
                                    required
                                    className={style.input}
                                />
                            </div>
                            <div className={style.inputDiv}>
                                <label className={style.inputLabel} htmlFor="image">Profile</label>
                                <input
                                    id="image"
                                    name="image"
                                    type="file"
                                    accept="image/*"
                                    required
                                    className={style.input}
                                />
                            </div>
                        </div>
                        <div className={style.modalFooter}>
                            <button
                                type="submit"
                                disabled={pending}
                                className={style.actionButton}
                            >
                                Sign up
                            </button>
                            <div className={style.error}>
                                {showMessage(state?.message)}
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </>)
}