import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import "./SignUp.scss"

export default function SignUp() {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => {
        console.log(data);

    };
    console.log(errors);

    return (
        <div className='signUp'>
            <div className='signUp__tittle'>Sign Up</div>
            <form className='signUp__form'
                onSubmit={handleSubmit(onSubmit)}
            >
                <input className='signUp__form__name'
                    type="text"
                    placeholder="First name"
                    {...register("First name", { required: "This is required.", maxLength: 80 })}
                />
                <input className='signUp__form__lastName'
                    type="text"
                    placeholder="Last name"
                    {...register("Last name", { required: "This is required.", maxLength: 100 })}
                />
                <input className='signUp__form__nickName'
                    type="text"
                    placeholder="Nick name"
                    {...register("Nick name", { required: "This is required." })}
                />
                <select className='signUp__form__position'
                    {...register("Position", { required: "This is required." })}>
                    <option value="Owner">Owner</option>
                    <option value="Co-Owner">Co-Owner</option>
                    <option value="Recruiter">Recruiter</option>
                    <option value="Manager">Manager</option>
                    <option value="Worker">Worker</option>
                </select>
                <input className='signUp__form__email'
                    type="email"
                    placeholder="Email"
                    {...register("Email", { required: "This is required.", pattern: /^\S+@\S+$/i })}
                />
                <input className='signUp__form__phone'
                    type="tel"
                    placeholder="Phone number"
                    {...register("Phone number", { required: "This is required." })}
                />

                <input className='signUp__form__password'
                    type="password"
                    placeholder="Password"
                    {...register("Password", { required: "This is required.", min: 8 })}
                />
                <input className='signUp__form__passwordConfirm'
                    type="password"
                    placeholder="Confirm Password"
                    {...register("Confirm Password", { required: "This is required.", min: 8 })}
                />
                <textarea className='signUp__form__description'
                    {...register("Description", { required: "This is required." })}
                />
                <button className='signUp__form__submit' type="submit">Submit</button>
                <Link className='signUp__form__signIn' to={"/signin"}>Sign In</Link>
            </form>
        </div>
    )
}
