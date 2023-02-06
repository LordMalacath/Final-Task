import Loader from 'components/loader/Loader';
import ModalBack from 'components/modalBack/ModalBack';
import { useSelector } from 'react-redux';


export default function Loading({ children }) {
  const { loading } = useSelector(state => state.app);

  if (loading) {
    return <ModalBack><Loader /></ModalBack>
  } else {
    return children
  }
}
