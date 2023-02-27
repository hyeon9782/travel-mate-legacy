import { instance } from "./index";

const fetchCourseWithUserId = (userId) => {
  return instance.get(`/api/course?userId=${userId}`);
};

const fetchCourseWithCourseId = (courseId) => {
  return instance.get(`/api/course/:postingId`);
};

const registerCourse = (courseList, placeList) => {
  return instance.post(`/api/course`);
};

const modifyCourse = (courseList, placeList) => {
  return instance.put(`/api/course/:postingId`);
};

const deleteCourse = (courseId) => {
  return instance.delete(`/api/course/:postingId`);
};

export {
  fetchCourseWithUserId,
  fetchCourseWithCourseId,
  registerCourse,
  modifyCourse,
  deleteCourse,
};
