import { useDispatch } from "react-redux"
import { AppDispatch, useAppSelector } from "../../redux/store"
import { setRefreshData } from "../../redux/feathers/RefreshData_Slice"


// a difined hook func, to refresh the home page data, return the func
export const useRefreshData_HomePage=()=>{
  const dispatch = useDispatch<AppDispatch>()
  const refresh = useAppSelector((state)=>state.refreshData_Slice.homePage)

  const refreshData=()=>{
    dispatch(setRefreshData(!refresh))
  }
 
  return {refreshData}
}