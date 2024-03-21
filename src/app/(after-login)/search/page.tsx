import BackButton from "@/app/(after-login)/_components/back-button";
import SearchForm from "@/app/(after-login)/_components/search-form";
import Tab from "@/app/(after-login)/search/_components/tab";
import Post from "@/app/(after-login)/_components/post";

import style from "@/app/(after-login)/search/search.module.css";

type Props = {
    searchParams: { q: string, f?: string, pf?: string };
};

export default function SearchPage({ searchParams }: Props) {
    return (
        <main className={style.main}>
            <div className={style.searchTop}>
                <div className={style.searchZone}>
                    <div className={style.buttonZone}>
                        <BackButton />
                    </div>
                    <div className={style.formZone}>
                        <SearchForm q={searchParams.q} />
                    </div>
                </div>
                <Tab />
            </div>
            <div className={style.list}>
                <Post />
                <Post />
                <Post />
                <Post />
                <Post />
                <Post />
                <Post />
                <Post />
                <Post />
                <Post />
                <Post />
                {/*<SearchResult searchParams={searchParams} />*/}
            </div>
        </main>
    )
}