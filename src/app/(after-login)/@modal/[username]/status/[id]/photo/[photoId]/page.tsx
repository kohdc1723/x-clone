import { faker } from "@faker-js/faker";

import Post from "@/app/(after-login)/_components/post";
import CommentForm from "@/app/(after-login)/[username]/status/[id]/_components/comment-form";
import ActionButtons from "@/app/(after-login)/_components/action-buttons";
import PhotoModalCloseButton from "@/app/(after-login)/@modal/[username]/status/[id]/photo/[photoId]/_components/photo-modal-close-button";

import style from "@/app/(after-login)/@modal/[username]/status/[id]/photo/[photoId]/photo-modal.module.css";

export default function PhotoModal() {
    const photo = {
        imageId: 1,
        link: faker.image.urlLoremFlickr(),
        Post: {
            content: faker.lorem.text()
        }
    }
    return (
        <div className={style.container}>
            <PhotoModalCloseButton />
            <div className={style.imageZone}>
                <img src={photo.link} alt={photo.Post?.content} />
                <div className={style.image} style={{ backgroundImage: `url(${photo.link})` }} />
                <div className={style.buttonZone}>
                    <div className={style.buttonInner}>
                        <ActionButtons white />
                    </div>
                </div>
            </div>
            <div className={style.commentZone}>
                <Post noImage />
                <CommentForm />
                <Post />
                <Post />
                <Post />
                <Post />
                <Post />
                <Post />
                <Post />
            </div>
        </div>
    );
}