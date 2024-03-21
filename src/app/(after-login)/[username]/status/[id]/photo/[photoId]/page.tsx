import Home from "@/app/(after-login)/home/page";

type Props = {
    params: { username: string, id: string, photoId: string }
}

export default function Page({ params }: Props) {
    params.username // elonmusk
    params.id // 1
    params.photoId // 1

    return (
        <Home />
    );
};