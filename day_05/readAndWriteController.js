import { readJsonFile, writeJsonFile } from "./readAndWriteServices.js";
const student = {
    first_name: "Emily",
    last_name: "Renney",
    email: "emilyrenney@unesco.org",
    gender: "Female"
}
const writeFile = async (path, data) => {
    let status = 0;
    let message = "";
    try {
        const fileData = await readJsonFile(path);
        let updatedData = []

        if (!fileData) updatedData = [{ id: 1, ...data }]
        else updatedData = [...fileData, { id: fileData.length + 1, ...data}];

        await writeJsonFile(path, updatedData);
        status = 200;
        message = "Data has been updated successfully."
    } catch (error) {
        status = 500;
        message = `unable to update ${error}`
    }
    return {status,message}
}
writeFile("./students.json", student);






const readFile = async (path) => {
    try {
        const data = await readJsonFile(path);
        console.log(data);
    } catch (error) {
        console.log("unable to read file");
    }
}
// readFile("./students.json")