import { selectCourse, UnSelectCourse } from './courseActionCreators';

import { SELECT_COURSE, UNSELECT_COURSE } from './courseActionTypes';

describe ('action creators', () => {
  it('selectCourse', () => {
    const res = selectCourse(1);
    expect(res).toEqual({ type: SELECT_COURSE, index: 1 });
  });

  it('UnSelectCourse', () => {
    const res = UnSelectCourse(1);
    expect(res).toEqual({ type: UNSELECT_COURSE, index: 1 });
  });
});
