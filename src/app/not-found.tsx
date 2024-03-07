import { NextPage } from "next";
import Link from "next/link";

const NotFoundPage: NextPage = () => {
    return (
        <div>
            <div>Page not found.</div>
            <Link href="/search">Search</Link>
        </div>
    );
};

export default NotFoundPage;