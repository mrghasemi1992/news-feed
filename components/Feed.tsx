import axios from 'axios';
import Post from './Post';
import { GridLoader } from 'react-spinners';
import PostComposer from './PostComposer';

const posts: Post[] = [
  {
    id: 1,
    author: {
      id: 1,
      firstName: 'Mohammad Reza',
      familyName: 'Ghasemi',
      username: 'luckydevboy',
      profile_photo_url: '',
    },
    content:
      'eros in cursus turpis massa tincidunt dui ut ornare lectus sit amet est placerat in egestas erat imperdiet sed euismod',
    created_time: '2023-05-19T11:34:50.784Z',
    reactions: { likes: 10, comments: [] },
    image_url: '',
  },
  {
    id: 2,
    author: {
      id: 1,
      firstName: 'Mohammad Ali',
      familyName: 'Ghasemi',
      username: 'captainghasemi',
      profile_photo_url: '',
    },
    content:
      'purus ut faucibus pulvinar elementum integer enim neque volutpat ac',
    created_time: '2023-05-18T11:34:50.784Z',
    reactions: { likes: 4, comments: [] },
    image_url: '',
  },
  {
    id: 3,
    author: {
      id: 1,
      firstName: 'Nazanin',
      familyName: 'Namjoo Nik',
      username: 'nzanmjoonik',
      profile_photo_url: '',
    },
    content:
      'turpis egestas maecenas pharetra convallis posuere morbi leo urna molestie at elementum eu facilisis sed odio morbi quis commodo odio aenean sed adipiscing diam donec',
    created_time: '2023-05-17T11:34:50.784Z',
    reactions: { likes: 6, comments: [] },
    image_url: '',
  },
];

const Feed = () => {
  return (
    <>
      {/* {isLoading && (
        <GridLoader className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
      )} */}
      <PostComposer />
      {posts.map((post, index) => (
        <Post
          key={post.id}
          post={post}
          isFirst={index === 0}
        />
      ))}
    </>
  );
};

export default Feed;
