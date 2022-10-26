import { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
// import { AuthContext } from '../../context/authContext';
import './login.scss';
import { AppDispatch, RootState } from '../../store/index';
import { useForm, SubmitHandler } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useSelector, useDispatch } from 'react-redux';
import { saveLogin } from '../../store/Login/Login';
import Swal from 'sweetalert2';

let schema = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().required(),
});

type FormValues = {
  email: string;
  password: string;
};

const Login = () => {
  const { email, password } = useSelector(
    (state: RootState) => state.login.loginData
  );

  console.log('apa isi emailnya', email, password);
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({ resolver: yupResolver(schema) });

  const onSubmit: SubmitHandler<FormValues> = async (e: any) => {
    dispatch(saveLogin(e));
    // const dataLogin = await loginData;
    if (email) {
      Swal.fire('Haloooo!', 'Welcome to Diary Notes', 'success');
      navigate('/');
    }
  };

  return (
    <div className="login">
      <div className="card">
        <div className="left">
          <h1>Diary Notes.</h1>
          <p>
            let's write anything about yourself, your experiences, and
            everything you want to record in your diary.
          </p>
          <span>Don't you have an account?</span>
          <Link to="/register">
            <button>Register</button>
          </Link>
        </div>
        <div className="right">
          <h1>Login</h1>
          <form>
            <input {...register('email')} placeholder="Email" />
            {errors?.email && <p>{errors.email.message}</p>}
            <input
              {...register('password')}
              type="password"
              placeholder="Password"
            />
            {errors?.password && <p>{errors.password.message}</p>}
            <button onClick={handleSubmit(onSubmit)}>Login</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
