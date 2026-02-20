import { readFile, writeFile } from "./readAndWrite.js";
const FILE = "./users.json";
const deleteUser = async (email) => {
    const users = await readFile(FILE);
    if (users.length === 0) return;

    const existingUser = users.find((u) => u.email === email);
    if (!existingUser) return;

    const updatedData = users.filter((u) => u.email !== email);
    const response = await writeFile(FILE,updatedData);
    console.log(response);  
}
deleteUser("lkikke8@theatlantic.com")