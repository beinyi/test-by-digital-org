import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store";
import { switchDrawer } from "../store/ui/reducer";

function useDrawer() {
  const dispatch = useDispatch();

  const isOpen = useSelector((state: RootState) => state.ui.drawer.isOpen);

  const handleSwitchDrawer = () => dispatch(switchDrawer());

  return { isOpen, handleSwitchDrawer };
}

export default useDrawer;
