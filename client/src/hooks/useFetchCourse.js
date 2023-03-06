import { useQuery } from "react-query"
import { fetchCourseWithId } from "../apis/course";


const useFetchCourse = ({ id, category }) => 
    useQuery("fetchCourse", () => fetchCourseWithId(id, category));
    

  

export default useFetchCourse;