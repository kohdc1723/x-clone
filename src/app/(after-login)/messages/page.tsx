import Room from "@/app/(after-login)/messages/_components/room";

import style from "@/app/(after-login)/messages/messages.module.css";

export default function MessagesPage() {
    return (
        <main className={style.main}>
            <div className={style.header}>
                <h3>쪽지</h3>
            </div>
            <Room />
            <Room />
            <Room />
            <Room />
            <Room />
            <Room />
        </main>
    );
};