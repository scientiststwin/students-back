import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type StudentDocument = Student & Document;

@Schema({ timestamps: true, collection: 'students' })
export class Student {
  @Prop({ type: Number, required: true, default: null })
  id: string;

  @Prop({ type: Number, required: false, default: null })
  age: string;

  @Prop({ type: String, required: false, default: null })
  firstName: string;

  @Prop({ type: String, required: false, default: null })
  lastName: string;

  @Prop({ type: String, required: false, default: null })
  nationality: string;
}

export const StudentSchema = SchemaFactory.createForClass(Student);
