import { Request, Response } from 'express';
import httpStatus from 'http-status';
import { Controller } from './Controller';
import { CourseCreator } from '../../../../Contexts/Mooc/Courses/application/CourseCreator';

type CourseCreatorRequest = Request & {
  body: {
    id: string;
    name: string;
    duration: string;
  };
};
export class CoursePutController implements Controller {
  constructor(private courseCreator: CourseCreator) {}

  async run(req: CourseCreatorRequest, res: Response) {
    const { id, name, duration } = req.body;
    await this.courseCreator.run({id, name, duration});
    res.status(httpStatus.CREATED).send();
  }
}
