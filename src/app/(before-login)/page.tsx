import { auth } from "@/auth";
import Main from "./_components/main";
import { redirect } from "next/navigation";

export default async function HomePage() {
    const session = await auth();

    if (session?.user) redirect("/home");

    return <Main />;
};