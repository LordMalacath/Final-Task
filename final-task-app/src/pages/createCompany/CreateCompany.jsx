import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { createCompany } from "redux/slices/companies";
import { setLoading } from "redux/slices/loading";
import "./CreateCompany.scss"


export default function CreateCompany() {
  const { register, handleSubmit, formState: { errors }, reset } = useForm();
  const { access_token } = useSelector(state => state.auth);
  const dispatch = useDispatch();
  const onSubmit = data => {
    const createData = { body: data, token: access_token }
    dispatch(setLoading());
    dispatch(createCompany(createData));
    reset();
  };

  return (
    <div className="createCompany">
      <div className="createCompany__tittle">Create Company</div>
      <form className="createCompany__form"
        onSubmit={handleSubmit(onSubmit)}
      >
        <input className="createCompany__form__name"
          type="text"
          placeholder="Name"
          {...register("name", { required: true })}
        />
        <input className="createCompany__form__service"
          type="text"
          placeholder="Service"
          {...register("serviceOfActivity", { required: true })}
        />
        <input className="createCompany__form__address"
          type="text"
          placeholder="Address"
          {...register("adress", { required: true })}
        />
        <input className="createCompany__form__numberOfEmployees"
          type="number"
          min={0} placeholder="Number of employees"
          {...register("numberOfEmployees", { required: true })}
        />
        <select className="createCompany__form__type"
          {...register("type", { required: true })}>
          <option value="Type1">Type1</option>
          <option value="Type2">Type2</option>
          <option value="Type3">Type3</option>
          <option value="Type4">Type4</option>
          <option value="Type5">Type5</option>
          <option value="Type6">Type6</option>
        </select>
        <textarea className="createCompany__form__description"
          {...register("description", { required: true })}
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
