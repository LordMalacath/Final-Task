import { useForm } from "react-hook-form";
import "./CreateCompany.scss"


export default function CreateCompany() {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);
    console.log(errors);

    return (
        <div className="createCompany">
            <div className="createCompany__tittle">Create Company</div>
            <form className="createCompany__form"
                onSubmit={handleSubmit(onSubmit)}
            >
                <input className="createCompany__form__name"
                    type="text"
                    placeholder="Name"
                    {...register("Name", { required: true })}
                />
                <input className="createCompany__form__service"
                    type="text"
                    placeholder="Service"
                    {...register("Service", { required: true })}
                />
                <input className="createCompany__form__address"
                    type="text"
                    placeholder="Address"
                    {...register("Address", { required: true })}
                />
                <input className="createCompany__form__numberOfEmployees"
                    type="number"
                    min={0} placeholder="Number of employees"
                    {...register("Number of employees", { required: true })}
                />
                <select className="createCompany__form__type"
                    {...register("Type", { required: true })}>
                    <option value="Type1">Type1</option>
                    <option value="Type2">Type2</option>
                    <option value="Type3">Type3</option>
                    <option value="Type4">Type4</option>
                    <option value="Type5">Type5</option>
                    <option value="Type6">Type6</option>
                </select>
                <textarea className="createCompany__form__description"
                    {...register("Description", { required: true })}
                />
                <button className="createCompany__form__submit"
                    type="submit"
                >
                    Create
                </button>
            </form>
        </div>
    )
}
