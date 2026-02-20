import { readFile, writeFile } from "./readAndWrite.js";
const FILE = "./users.json";

const changePassword = async (user) => {
    const users = await readFile(FILE);
    let message = "";
    if (users.length === 0) {
        message = "not existing."
    } else {
        const existingUser = users.find((u) => u.email === user.email);
        if (!existingUser) message = "not existing.";
        else {
            const updatedData = users.map((u) =>
                u.email === user.email ? { ...u, ...user } : u);
            const response = await writeFile(FILE, updatedData);
            console.log(response);           
            message = "Password has been changed succussfully."
        }
    }
    console.log(message);
}
changePassword({email:"lkikke8@theatlantic.com",password:"12345"})