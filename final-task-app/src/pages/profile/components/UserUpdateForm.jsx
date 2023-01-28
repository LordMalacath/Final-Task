import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { setEditStatus } from 'redux/slices/user';

export default function UserUpdateForm({ userInfo }) {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);
    console.log(errors);
    const dispatch = useDispatch();
    const handleClick = () => {
        dispatch(setEditStatus());
    }

    return (
        <form className='userUpdate'
            onSubmit={handleSubmit(onSubmit)}
        >
            <div className='userUpdate__credentials'>
                <input className='userUpdate__credentials--name'
                    type="text"
                    size={10}
                    defaultValue={userInfo.name}
                    {...register("First name", { required: true, maxLength: 80 })}
                />
                <input className='userUpdate__credentials--lastName'
                    type="text"
                    size={10}
                    defaultValue={userInfo.lastName}
                    {...register("Last name", { required: true, maxLength: 100 })}
                />
                <input className='userUpdate__credentials--nickName'
                    type="text"
                    size={10}
                    defaultValue={userInfo.nickName}
                    {...register("Nick name", { required: true })}
                />
            </div>
            <select className='userUpdate__position'
                defaultValue={userInfo.position}
                {...register("Position", { required: true })}
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
                    {...register("Phone number", { required: true })}
                />
                <input className='userUpdate__contacts--email'
                    type="email"
                    defaultValue={userInfo.email}
                    {...register("Email", { required: true, pattern: /^\S+@\S+$/i })}
                />
            </div>
            <textarea className='userUpdate__description'
                defaultValue={userInfo.description}
                {...register("Description", { required: true })}
            />
            <button type="submit" onClick={handleClick}>Save</button>
        </form>
    );
}
