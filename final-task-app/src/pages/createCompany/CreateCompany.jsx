import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { createCompany } from "redux/thunk/company/company.create";
import { deleteCompany } from "redux/thunk/company/company.delete";
import { updateCompany } from "redux/thunk/company/company.update";
import "./CreateCompany.scss"


export default function CreateCompany({ companyData, formType = "Create" }) {
  const { register, handleSubmit } = useForm({ defaultValues: companyData });
  const { errorMessage } = useSelector(state => state.app);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const onSubmit = data => {
    dispatch(formType === "Create" ? createCompany(data) : updateCompany(data));
  };

  const handleDelete = () => {
    dispatch(deleteCompany(companyData.id));
    navigate('/company/')
  }

  return (
    <div className="page">
      <div className="createCompany">
        {errorMessage ?
          <div className="createCompany__tittle error">{errorMessage}!</div>
          :
          <div className="createCompany__tittle">{formType} Company</div>}
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
            placeholder="Description"
            {...register("description", { required: true })}
          />
          <button className="createCompany__form__submit"
            type="submit"
          >
            {formType === "Create" ?
              "Create" : "Save"}
          </button>
          {formType !== "Create" ?
            <button className="createCompany__form__delete" onClick={handleDelete}>
              Delete
            </button>
            : ''}
        </form>
      </div>
    </div>
  )
}
