import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import './share.scss';
import { useDispatch } from 'react-redux';
import { AppDispatch, RootState } from '../../../store/index';
import { useForm, SubmitHandler } from 'react-hook-form';
import { createDiary } from '../../../store/DiaryList/diarylist';

let schema = yup.object().shape({
  title: yup.string().required(),
  content: yup.string().required(),
});

type FormDiary = {
  title: string;
  content: string;
};

const Share = () => {
  const dispatch = useDispatch<AppDispatch>();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormDiary>({ resolver: yupResolver(schema) });

  const onSubmit: SubmitHandler<FormDiary> = async (e: any) => {
    dispatch(createDiary(e));
    reset({ title: '', content: '' });
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
          <div className="left">
            {/* <input type="file" id="file" style={{display:"none"}} />
            <label htmlFor="file">
              <div className="item">
                <img src={Image} alt="" />
                <span>Add Image</span>
              </div>
            </label>
            <div className="item">
              <img src={Map} alt="" />
              <span>Add Place</span>
            </div>
            <div className="item">
              <img src={Friend} alt="" />
              <span>Tag Friends</span>
            </div> */}
          </div>
          <div className="right">
            <button onClick={handleSubmit(onSubmit)}>Save Note</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Share;
