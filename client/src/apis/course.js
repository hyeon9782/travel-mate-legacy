import { instance } from "./index";


// userId로 course 조회하기
const fetchCourseWithId = (id, category) => {
  return instance.get(`/api/course`, {
    params: { [category]: id, category },
  });
};

// course 등록하기
const registerCourse = (courseList, placeList) => {
  return instance.post(`/api/course`);
};

// course 수정하기
const modifyCourse = (courseList, placeList) => {
  return instance.put(`/api/course/:postingId`);
};

// course 삭제하기
const deleteCourse = (courseId) => {
  return instance.delete(`/api/course/:postingId`);
};

export {
  fetchCourseWithId,
  registerCourse,
  modifyCourse,
  deleteCourse,
};
