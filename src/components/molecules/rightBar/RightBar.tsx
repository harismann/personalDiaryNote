/* eslint-disable react-hooks/exhaustive-deps */
import './rightbar.scss';
import { Link } from 'react-router-dom';
import { Pagination, Stack } from '@mui/material';
import { useSelector } from 'react-redux';
import { RootState } from '../../../store/index';
import { useEffect, useState } from 'react';

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
    <Link to={`/detailPage/${id}`} style={{ textDecoration: 'none' }}>
      <div className="user">
        <div className="userInfo">
          <p>
            <span>{title}</span>
          </p>
        </div>
        <span>{created_at}</span>
      </div>
    </Link>
  );
};

const RightBar = () => {
  const [list, setList] = useState<Array<diaryList>>([]);
  const [page, setPage] = useState(1);
  const listDiaryNote = useSelector(
    (state: RootState) => state.list.listArrFiltered
  );
  let pag = true;

  if (listDiaryNote.length <= 5) {
    pag = false;
  }
  const totalpage = () => Math.ceil(listDiaryNote.length / 5);

  const handleChange = (page: number) => {
    console.log('handle change', page);
    setPage(page);
  };

  const paginate = (
    array: Array<diaryList>,
    page_size: number,
    page_number: number
  ) => {
    // human-readable page numbers usually start with 1, so we reduce 1 in the first argument
    return array.slice((page_number - 1) * page_size, page_number * page_size);
  };
  useEffect(() => {
    // diaryList = listDiaryNote;
    setList(paginate(listDiaryNote, 5, page));
  }, [JSON.stringify(listDiaryNote), page]);

  return (
    <div className="rightBar">
      <div className="container">
        <div className="item">
          <h3>
            <span>Recent Diary Notes</span>
          </h3>
          {list?.map((diary: diaryList) => (
            <Dlist key={diary.id} items={diary} />
          ))}
          {pag && (
            <Stack
              spacing={2}
              sx={{
                padding: 4,
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <Pagination
                count={totalpage()}
                variant="outlined"
                shape="rounded"
                onChange={(event: React.ChangeEvent<unknown>, page: number) => {
                  handleChange(page);
                }}
              />
            </Stack>
          )}
        </div>
      </div>
    </div>
  );
};

export default RightBar;
