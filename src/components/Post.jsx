import Video from "./Video";
import { MdMoreVert as MoreIcon } from "react-icons/md";
import {
  FaRegBookmark as BookmarkIcon,
  FaRegComment as CommentIcon,
} from "react-icons/fa";
import { TiHeartOutline as HeartIcon } from "react-icons/ti";
import { FiSend } from "react-icons/fi";
import profileImg from "./../assets/img/man-4.webp";

export default function Post(props) {
  const { sender_name: name, preview_src: src } = props;

  return (
    <section className="mb-3">
      <div className="flex justify-between items-center px-2 mb-2">
        <div className="flex items-center">
          <img
            src={profileImg}
            alt="profile"
            className="w-8 h-8 rounded-full"
          />
          <span className="text-sm ml-3 dark:text-gray-200">{name}</span>
        </div>
        <MoreIcon className="text-xl dark:text-gray-200" />
      </div>
      <Video src={src}/>
      <div className="flex justify-between items-center px-2 mt-1">
        <div className="flex items-center">
          <HeartIcon className="text-3xl mr-4 dark:text-gray-200" />
          <CommentIcon className="text-2xl mr-4 dark:text-gray-200" />
          <FiSend className="text-2xl dark:text-gray-200" />
        </div>
        <BookmarkIcon className="text-2xl dark:text-gray-200" />
      </div>
    </section>
  );
}
