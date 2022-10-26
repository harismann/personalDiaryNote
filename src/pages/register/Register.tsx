import { Link } from 'react-router-dom';
import './register.scss';
import { AppDispatch, RootState } from '../../store/index';
import { useForm, SubmitHandler } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useSelector, useDispatch } from 'react-redux';
import { saveRegister } from '../../store/Register/Register';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

let schema = yup.object().shape({
  username: yup.string().required(),
  email: yup.string().email().required(),
  password: yup
    .string()
    .min(8, 'wkwk')
    .max(20, '')
    .matches(/^[A-Za-z0-9_]+$/, 'asal')
    .required('passwor must be filled'),
  confirmPassword: yup.string().oneOf([yup.ref('password'), null]),
});

type FormValues = {
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
};

const Register = () => {
  const dataRegister = useSelector(
    (state: RootState) => state.register.registerData
  );
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({ resolver: yupResolver(schema) });

  const onSubmit: SubmitHandler<FormValues> = async (e: any) => {
    dispatch(saveRegister(e));
    const dataRegis = await dataRegister;
    if (dataRegis.email !== '') {
      Swal.fire('Good job!', 'Your Registration is Successful!', 'success');
      navigate('/login');
    }
  };

  return (
    <div className="register">
      <div className="card">
        <div className="left">
          <h1>Diary Notes.</h1>
          <p>
            This diary is designed for those of you who want to record
            everything about you, and can be accessed from anywhere. let's start
            writing what you feel and think in a more efficient way and
            certainly doesn't require a conventional notebook
          </p>
          <span>Do you have an account?</span>
          <Link to="/login">
            <button>Login</button>
          </Link>
        </div>
        <div className="right">
          <h1>Register</h1>
          <form>
            <input
              {...register('username')}
              placeholder="UserName"
              value="test"
            />
            {errors?.username && <p>{errors.username.message}</p>}
            <input
              {...register('email')}
              placeholder="Email"
              value="test@gmail.com"
            />
            {errors?.email && <p>{errors.email.message}</p>}
            <input
              {...register('password')}
              placeholder="Password"
              type="password"
              value="12345678"
            />
            {errors?.password && <p>{errors.password.message}</p>}
            <input
              {...register('confirmPassword')}
              placeholder="Confirm Password"
              type="password"
              value="12345678"
            />
            {errors?.confirmPassword && <p>confirm password must match</p>}
            <button onClick={handleSubmit(onSubmit)}>Register</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
