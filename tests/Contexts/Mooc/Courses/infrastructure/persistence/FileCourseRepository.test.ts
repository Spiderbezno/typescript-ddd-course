import { Course } from '../../../../../../src/Contexts/Mooc/Courses/domain/Course';
import { FileCourseRepository } from '../../../../../../src/Contexts/Mooc/Courses/infrastructure/persistence/FileCourseRepository';
import { Uuid } from '../../../../../../src/Contexts/Shared/domain/value-object/Uuid';

describe('FileCourseRepository', () => {
  it('should save course', async () => {
    const expectedCourse = new Course({id: new Uuid('0766c8f0-f9d6-4b3f-b8e8-f9d6f9d6f9d6'), name: 'name', duration: 'duration'});
    const repository = new FileCourseRepository();

    await repository.save(expectedCourse);

    const course = await repository.search(new Uuid('0766c8f0-f9d6-4b3f-b8e8-f9d6f9d6f9d6'));
    expect(course).toEqual(expectedCourse);
  });
});
