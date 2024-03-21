import SearchForm from "@/app/(after-login)/_components/search-form";
import Trend from "@/app/(after-login)/_components/trend";

import style from "@/app/(after-login)/explore/explore.module.css";

export default function ExplorePage() {
    return (
        <main className={style.main}>
            <div className={style.formZone}>
                <SearchForm />
            </div>
            <div className={style.trend}>
                <h3>나를 위한 트렌드</h3>
                <Trend />
                <Trend />
                <Trend />
                <Trend />
                <Trend />
                <Trend />
            </div>
        </main>
    );
};