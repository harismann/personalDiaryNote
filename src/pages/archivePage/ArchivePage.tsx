import './ArchivePage';
import { Link } from 'react-router-dom';
import { Pagination, Stack } from '@mui/material';
import { CenterFocusStrong } from '@mui/icons-material';

interface diaryList {
  id?: string;
  title?: string;
  content?: string;
  created_at?: string;
}

const listDiary = [
  {
    id: 'id1',
    title: 'makan malam hari ini sagan nikmat sekali',
    content: 'selamat makan pagi hari ini',
    created_at: '2022-10-06 07:51:19',
  },
  {
    id: 'id2',
    title: 'hujan yang dingin',
    content: 'diluar sedang hujan dan amat sangat dingin sekali',
    created_at: '2022-10-06 07:51:19',
  },
  {
    id: 'id3',
    title: 'gugur daun',
    content: 'makan pagi ini menggunakan daun salad bro',
    created_at: '2022-10-06 07:51:19',
  },
  {
    id: 'id4',
    title: 'makanan harian seseorang',
    content: 'makan makanlah makanan yang harusnya dimakan oleh semua orang',
    created_at: '2022-10-06 07:51:19',
  },
  {
    id: 'id5',
    title: 'makan malam hari ini sagan nikmat sekali',
    content: 'selamat makan pagi hari ini',
    created_at: '2022-10-06 07:51:19',
  },
  {
    id: 'id6',
    title: 'makan malam hari ini sagan nikmat sekali',
    content: 'selamat makan pagi hari ini',
    created_at: '2022-10-06 07:51:19',
  },
  {
    id: 'id7',
    title: 'makan malam hari ini sagan nikmat sekali',
    content: 'selamat makan pagi hari ini',
    created_at: '2022-10-06 07:51:19',
  },
  {
    id: 'id8',
    title: 'makan malam hari ini sagan nikmat sekali',
    content: 'selamat makan pagi hari ini',
    created_at: '2022-10-06 07:51:19',
  },
  {
    id: 'id9',
    title: 'makan malam hari ini sagan nikmat sekali',
    content: 'selamat makan pagi hari ini',
    created_at: '2022-10-06 07:51:19',
  },
  {
    id: 'id10',
    title: 'makan malam hari ini sagan nikmat sekali',
    content: 'selamat makan pagi hari ini',
    created_at: '2022-10-06 07:51:19',
  },
];

const Dlist: React.FC<{ items: diaryList }> = (props) => {
  const { title, content, created_at, id } = props.items;
  return (
    <Link to={`/editpage/${id}`} style={{ textDecoration: 'none' }}>
      <div className="user">
        <div className="userInfo">
          {/* <img
                src="https://images.pexels.com/photos/4881619/pexels-photo-4881619.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt=""
              /> */}
          <p>
            <span>{title}</span>
          </p>
        </div>
        <span>{created_at}</span>
      </div>
    </Link>
  );
};

const Archive = () => {
  return (
    <div className="rightBar">
      <div className="container">
        <div className="item">
          <h3>
            <span>Recent Diary Notes</span>
          </h3>
          {listDiary.map((diary: diaryList) => (
            <Dlist key={diary.id} items={diary} />
          ))}
          <Stack
            spacing={2}
            sx={{
              padding: 4,
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <Pagination count={10} variant="outlined" shape="rounded" />
          </Stack>
        </div>
      </div>
    </div>
  );
};

export default Archive;
