import { CourseCreator } from '../../../../../src/Contexts/Mooc/Courses/application/CourseCreator';
import { Course } from '../../../../../src/Contexts/Mooc/Courses/domain/Course';
import { CourseRepositoryMock } from '../__mocks__/CourseRepositoryMock';
import { Uuid } from '../../../../../src/Contexts/Shared/domain/value-object/Uuid';

let repository: CourseRepositoryMock;
let creator: CourseCreator;

beforeEach(() => {
  repository = new CourseRepositoryMock();
  creator = new CourseCreator(repository);
});

describe('CourseCreator', () => {
  it('should create a valid course', async () => {
    const id = new Uuid('0766c8f0-f9d6-4b3f-b8e8-f9d6f9d6f9d6');
    const name = 'some-name';
    const duration = 'some-duration';

    const course = new Course({ id, name, duration });

    await creator.run({id: id.value, name, duration});

    repository.assertLastSavedCourseIs(course);
  });
});
