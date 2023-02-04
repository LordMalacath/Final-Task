import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { setLoading } from 'redux/slices/loading';
import { signup } from 'redux/thunk/auth/auth.signup';
import "./SignUp.scss"

export default function SignUp() {
  const { register, handleSubmit, formState: { errors }, watch, reset } = useForm();
  const { auth } = useSelector(store => store.auth);
  const dispatch = useDispatch();
  const redirect = useNavigate();
  const onSubmit = data => {
    dispatch(setLoading());
    dispatch(signup(data));
    reset();
    redirect('/')
  };
  if (!auth) {
    return (
      <div className='signUp'>
        <div className='signUp__tittle'>Sign Up</div>
        <form className='signUp__form'
          onSubmit={handleSubmit(onSubmit)}
        >
          <input className='signUp__form__name'
            type="text"
            placeholder="First name"
            {...register("name", { required: "This is required.", maxLength: 80 })}
          />
          <input className='signUp__form__lastName'
            type="text"
            placeholder="Last name"
            {...register("lastName", { required: "This is required.", maxLength: 100 })}
          />
          <input className='signUp__form__nickName'
            type="text"
            placeholder="nickName"
            {...register("nickName", { required: "This is required." })}
          />
          <select className='signUp__form__position'
            {...register("position", { required: "This is required." })}>
            <option value="Owner">Owner</option>
            <option value="Co-Owner">Co-Owner</option>
            <option value="Recruiter">Recruiter</option>
            <option value="Manager">Manager</option>
            <option value="Worker">Worker</option>
          </select>
          <input className='signUp__form__email'
            type="email"
            placeholder="Email"
            {...register("email", { required: "This is required.", pattern: /^\S+@\S+$/i })}
          />
          <input className='signUp__form__phone'
            type="tel"
            placeholder="phone"
            {...register("phone", { required: "This is required." })}
          />
          <input className='signUp__form__password'
            type="password"
            placeholder="Password"
            {...register("password", {
              required: "This is required.",
              minLength: {
                value: 8,
                message: 'Minimum 8 symbols',
              },
            })}
          />
          <input className='signUp__form__passwordConfirm'
            type="password"
            placeholder="confirmPssword"
            {...register("Confirm Password", {
              required: "This is required.",
              minLength: {
                value: 8,
                message: 'Minimum 8 symbols',
              },
              validate: (confirmPassword) => {
                if (watch('password') !== confirmPassword) {
                  return "Your passwords do not match!"
                }
              }
            })}
          />
          <textarea className='signUp__form__description'
            {...register("description", { required: "This is required." })}
          />
          <button className='signUp__form__submit' type="submit">Submit</button>
          <Link className='signUp__form__signIn' to={"/"}>Sign In</Link>
        </form>

      </div>
    )
  } else { return <Navigate to="/profile" /> }
}
