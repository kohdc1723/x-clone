import style from "@/app/(after-login)/_styles/trend-section.module.css";
import Trend from "@/app/(after-login)/_components/trend";

export default function TrendSection() {
    return (
        <div className={style.trendBg}>
            <div className={style.trend}>
                <h3>나를 위한 트렌드</h3>
                <Trend />
                <Trend />
                <Trend />
                <Trend />
                <Trend />
                <Trend />
                <Trend />
                <Trend />
                <Trend />
                <Trend />
            </div>
        </div>
    );
};