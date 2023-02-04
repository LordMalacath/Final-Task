import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { updateUser } from 'redux/thunk/user/user.update';
import "./UserUpdate.scss"

export default function UserUpdateForm({ userInfo }) {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const { access_token } = useSelector(state => state.auth)
  const dispatch = useDispatch();
  const onSubmit = data => {
    const updateData = { body: data, token: access_token }
    dispatch(updateUser(updateData));
  };

  return (
    <form className='userUpdate'
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className='userUpdate__name'>
        <input
          type="text"
          size={10}
          defaultValue={userInfo.name}
          {...register("name", { required: true, maxLength: 80 })}
        />

        <input
          type="text"
          size={10}
          defaultValue={userInfo.lastName}
          {...register("lastName", { required: true, maxLength: 100 })}
        />

        <input
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

      <input className='userUpdate__email'
        type="email"
        defaultValue={userInfo.email}
        {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
      />

      <input className='userUpdate__phone'
        type="tel"
        defaultValue={userInfo.phone}
        {...register("phone", { required: true })}
      />

      <textarea className='userUpdate__description'
        defaultValue={userInfo.description}
        {...register("description", { required: true })}
      />

      <button className='userUpdate__save' type="submit">Save</button>
    </form>
  );
}
