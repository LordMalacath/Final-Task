import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { setLoading } from 'redux/slices/loading';
import { updateUser } from 'redux/slices/user';

export default function UserUpdateForm({ userInfo }) {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const { access_token } = useSelector(state => state.auth)
  const dispatch = useDispatch();
  const onSubmit = data => {
    const updateData = { body: data, token: access_token }
    dispatch(setLoading());
    dispatch(updateUser(updateData));
  };

  return (
    <form className='userUpdate'
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className='userUpdate__credentials'>
        <input className='userUpdate__credentials--name'
          type="text"
          size={10}
          defaultValue={userInfo.name}
          {...register("name", { required: true, maxLength: 80 })}
        />
        <input className='userUpdate__credentials--lastName'
          type="text"
          size={10}
          defaultValue={userInfo.lastName}
          {...register("lastName", { required: true, maxLength: 100 })}
        />
        <input className='userUpdate__credentials--nickName'
          type="text"
          size={10}
          defaultValue={userInfo.nickName}
          {...register("nickName", { required: true })}
        />
      </div>
      <select className='userUpdate__position'
        defaultValue={userInfo.position}
        {...register("position", { required: true })}
      >
        <option value="Owner">Owner</option>
        <option value="Co-Owner">Co-Owner</option>
        <option value="Recruiter">Recruiter</option>
        <option value="Manager">Manager</option>
        <option value="Worker">Worker</option>
      </select>
      <div className='userUpdate__contacts'>
        <input className='userUpdate__contacts--phone'
          type="tel"
          defaultValue={userInfo.phone}
          {...register("phone", { required: true })}
        />
        <input className='userUpdate__contacts--email'
          type="email"
          defaultValue={userInfo.email}
          {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
        />
      </div>
      <textarea className='userUpdate__description'
        defaultValue={userInfo.description}
        {...register("description", { required: true })}
      />
      <button type="submit">Save</button>
    </form>
  );
}
