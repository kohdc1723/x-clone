import BackButton from "@/app/(after-login)/_components/back-button";
import Post from "@/app/(after-login)/_components/post";
import CommentForm from "@/app/(after-login)/[username]/status/[id]/_components/comment-form";

import style from "@/app/(after-login)/[username]/status/[id]/single-post.module.css";

export default function SinglePostPage() {
    return (
        <div className={style.main}>
            <div className={style.header}>
                <BackButton />
                <h3 className={style.headerTitle}>게시하기</h3>
            </div>
            <Post />
            <CommentForm />
            <div>
                <Post />
                <Post />
                <Post />
                <Post />
                <Post />
                <Post />
                <Post />
                <Post />
                <Post />
            </div>
        </div>
    )
}