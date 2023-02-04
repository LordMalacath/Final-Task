import { ErrorMessage } from '@hookform/error-message';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { deleteCompany } from 'redux/slices/companiesThunk/company.delete';
import { setLoading } from 'redux/slices/loading';
import './ConfirmPasswordModal.scss'

export default function ConfirmPasswordModal() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const { auth: { errorMessage }, loading: { openModal } } = useSelector(state => state);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const onSubmit = data => {
    // dispatch(setLoading());
    // dispatch(deleteCompany(companyData.id));
    // navigate('/company/')
  };
  console.log("MODAL")

  const handleCancel = () => {
  };

  if (openModal) {
    return (
      <div className='modal'>
        <div className='modal__tittle'></div>
        {errorMessage && <div>{errorMessage}</div>}

        <form className='modal__form'
          onSubmit={handleSubmit(onSubmit)}
        >
          <ErrorMessage className="modal__error"
            errors={errors}
            name="password"
            as={"div"}
          />

          <input className='modal__password'
            type="password"
            placeholder="Password"
            {...register("password", {
              required: "This field is required",
              minLength: {
                value: 8,
                message: 'Minimum 8 symbols',
              },
            })}
          />

          <button className='modal__confirm' type="submit">OK</button>
          <button className='modal__cancel' onClick={handleCancel}>CANCEL</button>
        </form>
      </div>
    )
  }
}
