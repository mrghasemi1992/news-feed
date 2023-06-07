import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import { Post } from '../types';
import { ChatBubbleIcon, HeartIcon } from '@radix-ui/react-icons';

dayjs.extend(relativeTime);

type Props = {
  post: Post;
  isFirst: boolean;
};

const Post = ({ post, isFirst }: Props) => {
  return (
    <>
      {!isFirst && <hr />}
      <article key={post.id} className="p-4 flex gap-x-4">
        <div className="w-10 h-10 rounded-full bg-gray-400 shrink-0"></div>
        <div className="flex flex-col gap-y-4">
          <div className="flex text-sm">
            <div className="font-medium">
              {post.author.firstName}{' '}
              {post.author.familyName}
            </div>
            <div className="text-gray-500 ml-4">
              @{post.author.username}
            </div>
            <div className="text-gray-500 mx-1">.</div>
            <div className="text-gray-500">
              {dayjs(post.created_time).fromNow(true)}
            </div>
          </div>
          <p className="text-sm">{post.content}</p>
          <div className="flex gap-x-3">
            <div className="flex gap-x-1 items-center text-xs text-gray-500">
              <HeartIcon />
              {post.reactions.likes}
            </div>
            <div className="flex gap-x-1 items-center text-xs text-gray-500">
              <ChatBubbleIcon />
              {post.reactions.comments?.length ?? 0}
            </div>
          </div>
        </div>
      </article>
    </>
  );
};

export default Post;
