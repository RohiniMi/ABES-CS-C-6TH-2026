import { readJsonFile, writeJsonFile } from "../day_05/readAndWriteServices.js";
const FILE = "../day_05/students.json"

const deleteData = async (id) => {
    const students = await readJsonFile(FILE);
    if (students.length === 0) return;

    const user = students.filter((student) => student.id === id);
    if (user.length === 0) return;

    const updatedData = students.filter((student) =>  student.id !== id);

    const response = await writeJsonFile(FILE, updatedData);
    console.log(response.status);
}
deleteData(3);