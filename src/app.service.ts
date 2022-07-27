import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateStudentDto } from './dto/create-student.dto';
import { StudentsQueryParamDto } from './dto/get-student.dto';
import { Student, StudentDocument } from './entities/student.entity';

@Injectable()
export class AppService {
  constructor(
    @InjectModel(Student.name) private studentModel: Model<StudentDocument>,
  ) {}

  private initialUsers = [
    {
      id: 1,
      firstName: 'John',
      lastName: 'Doe',
      age: 24,
      nationality: 'English',
    },
    {
      id: 2,
      firstName: 'Jan',
      lastName: 'Dewaele',
      age: 27,
      nationality: 'Belgian',
    },
    {
      id: 3,
      firstName: 'Jonathan',
      lastName: 'Van Driessen',
      age: 33,
      nationality: 'Belgian',
    },
    {
      id: 4,
      firstName: 'Anthony',
      lastName: 'Lamot',
      age: 30,
      nationality: 'Belgian',
    },
    {
      id: 5,
      firstName: 'Tim',
      lastName: 'Ferris',
      age: 36,
      nationality: 'American',
    },
    {
      id: 6,
      firstName: 'Melinda',
      lastName: 'Gates',
      age: 63,
      nationality: 'American',
    },
    {
      id: 7,
      firstName: 'Jan',
      lastName: 'De Hollandet',
      age: 13,
      nationality: 'Dutch',
    },
    {
      id: 8,
      firstName: 'John',
      lastName: 'De Vriendt',
      age: 47,
      nationality: 'Dutch',
    },
    {
      id: 9,
      firstName: 'Furkan',
      lastName: 'Kursun',
      age: 23,
      nationality: 'Turkish',
    },
  ];

  async initUsers() {
    this.studentModel.create(this.initialUsers);
  }

  async createUser(createStudentDto: CreateStudentDto) {
    const newStudent = await this.studentModel.create(createStudentDto);
    return newStudent;
  }

  async getAllnationality() {
    const allNationality = await this.studentModel.aggregate([
      { $group: { _id: '$nationality' } },
      { $sort: { _id: 1 } },
      { $project: { _id: 0, name: '$_id' } },
    ]);

    return allNationality;
  }

  async getUsers(queryParams: StudentsQueryParamDto) {
    const { sort, nationalityName } = queryParams;

    const findQuery = this.studentModel.find({
      nationality: nationalityName,
    });
    if (sort) findQuery.sort({ firstName: sort, lastName: sort } as any);

    const selectedUsers = findQuery.exec();
    return selectedUsers;
  }
}
