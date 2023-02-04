import Loader from 'components/loader/Loader';
import ModalBack from 'components/modalBack/ModalBack';
import { useSelector } from 'react-redux';


export default function Loading({ children }) {
  const { ok, loading } = useSelector(state => state.loading);

  if (ok) {
    return children
  } else if (loading) {
    return <ModalBack><Loader /></ModalBack>
  } else {
    console.log("Loading: fail")
    return <div>Something went wrong ;(</div>
  }
}
