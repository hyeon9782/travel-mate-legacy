import { useQuery } from "react-query"
import { fetchCourseWithUserId } from "../apis/course"

const useFetchCourse = () => {
    useQuery(
        "getCourse",
        fetchCourseWithUserId(1)
    )
}

export default useFetchCourse;