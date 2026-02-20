import { readJsonFile, writeJsonFile } from "../day_05/readAndWriteServices.js";
const FILE = "../day_05/students.json"

const updateData = async (id, data) => {
    const students = await readJsonFile(FILE);
    if (students.length === 0) return;

    const user = students.filter((student) => student.id === id);
    if (user.length === 0) return;

    const updatedData = students.map((student) =>
        student.id === id ? { ...student, ...data } : student);

    const response = await writeJsonFile(FILE, updatedData);
    console.log(response.status);
}
updateData(2, { first_name: "abcdef", last_name: "xyz" });