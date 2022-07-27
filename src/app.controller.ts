import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { AppService } from './app.service';
import { CreateStudentDto } from './dto/create-student.dto';
import { ApiTags } from '@nestjs/swagger';
import { StudentsQueryParamDto } from './dto/get-student.dto';

@ApiTags('students')
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post('/init')
  initUsers() {
    return this.appService.initUsers();
  }

  @Post('/users')
  createUser(@Body() createStudentDto: CreateStudentDto) {
    return this.appService.createUser(createStudentDto);
  }

  @Get('/users')
  getAllUsers(@Query() queryParams: StudentsQueryParamDto) {
    return this.appService.getUsers(queryParams);
  }

  @Get('/nationalities')
  getAllNationality() {
    return this.appService.getAllnationality();
  }
}
