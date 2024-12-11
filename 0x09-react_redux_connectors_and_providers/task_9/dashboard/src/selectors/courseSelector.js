/* SELECT COURSE */

export const getListCourse = (state) => {
  const courses = state.courses;

  if (courses) {
    return courses.valueSeq();
  }

  return courses;
};
