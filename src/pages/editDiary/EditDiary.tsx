import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import './editdiary.scss';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../store/index';
import { useForm, SubmitHandler } from 'react-hook-form';
import { createDiary } from '../../store/DiaryList/diarylist';
import { getDiary } from '../../store/DiaryList/diarylist';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

let schema = yup.object().shape({
  title: yup.string().required(),
  content: yup.string().required(),
});

type FormDiary = {
  title: string;
  content: string;
};

const EditDiary = () => {
  const dispatch = useDispatch<AppDispatch>();
  const Dlist = useSelector((state: RootState) => state.list.diaryList);
  //   const Data = {};
  //   const param = useParams();
  //   const fetchData = async () => {
  //     await dispatch(getDiary(param.id));
  //     console.log(Dlist, 'from the list');
  //   };
  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors },
  } = useForm<FormDiary>({ resolver: yupResolver(schema) });

  useEffect(() => {
    let defaultValues = {
      title: Dlist.title,
      content: Dlist.content,
    };
    reset({ ...defaultValues });

    // if (Dlist) {
    //   setValue({ title: Dlist.title },{ content: Dlist.content});
    // }
  }, [Dlist]);

  const onSubmit: SubmitHandler<FormDiary> = async (e: any) => {
    dispatch(createDiary(e));
    // reset({ title: '', content: '' });
  };
  return (
    <div className="share">
      <div className="container">
        <div className="ontop">
          <div className="top">
            <input {...register('title')} placeholder="Title Here" />
            {errors?.title && <p>{errors.title.message}</p>}
            <textarea
              {...register('content')}
              placeholder="What's on your mind youryusername?"
            />
            {errors?.content && <p>{errors.content.message}</p>}
          </div>
        </div>
        <hr />
        <div className="bottom">
          <div className="left"></div>
          <div className="right">
            <button onClick={handleSubmit(onSubmit)}>Save Note</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditDiary;
