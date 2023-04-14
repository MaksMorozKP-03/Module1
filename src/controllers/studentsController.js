import { getStudent, saveStudent, getAllStudents } from '../services/studentsService.js';



export const getStudents = async () => {
  const results = await getAllStudents();
  return results;
}

export const createStudent = async (body) => {
  const existingStudent = await getStudent(body.nickName);

  if(existingStudent){
    return null;
  }

  const student = {
    firstName: body.firstName,
    lastName: body.lastName,
    nickName: body.nickName
  }

  const result = await saveStudent(student);

  return result;
}
