import { ErrorMessage } from '@hookform/error-message';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { signin } from 'redux/slices/auth';
import { setLoading } from 'redux/slices/loading';
import "./SignIn.scss"

export default function SignIn() {
  const { register, handleSubmit, formState: { errors }, reset } = useForm();
  const { auth } = useSelector(state => state.auth)
  const dispatch = useDispatch();
  const redirect = useNavigate();
  const onSubmit = data => {
    dispatch(setLoading());
    dispatch(signin(data));
    reset();
    redirect('/profile')
  };
  if (!auth) {
    return (
      <div className='signIn'>
        <div className='signIn__tittle'>Sign In</div>
        <form className='signIn__form'
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className='signIn__form__email'>
            <h3 className='email__tittle'>Email</h3>
            <ErrorMessage className="email__error"
              errors={errors}
              name="email"
              as={"div"}
            />
            <input className='email__input'
              type="email"
              {...register("email", { required: "This field is required", pattern: /^\S+@\S+$/i })}
            />
          </div>
          <div className='signIn__form__password'>
            <h3 className='passsword__tittle'>Password</h3>
            <ErrorMessage className="password__error"
              errors={errors}
              name="password"
              as={"div"}
            />
            <input className='password__input'
              type="password"
              {...register("password", {
                required: "This field is required",
                minLength: {
                  value: 8,
                  message: 'Minimum 8 symbols',
                },
              })}
            />
          </div>
          <button className='signIn__form__submit'
            type="submit"
          >
            Sign In
          </button>
          <Link className='signIn__form__signUp' to={"signup"}>Sign Up</Link>
        </form>
      </div>
    )
  } else {
    return <Navigate to="/profile" />
  }
}