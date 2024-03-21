import style from "@/app/(after-login)/home/home.module.css";
import Tab from "@/app/(after-login)/home/_components/tab";
import PostForm from "@/app/(after-login)/_components/post-form";
import Post from "@/app/(after-login)/_components/post";
import TabProvider from "./_components/tab-provider";

export default function HomePage() {
    return (
        <main className={style.main}>
            <TabProvider>
                <Tab />
                <PostForm />
                <Post />
                <Post />
                <Post />
                <Post />
                <Post />
                <Post />
                <Post />
            </TabProvider>
        </main>
    );
};