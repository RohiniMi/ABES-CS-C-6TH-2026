import { readFile, writeFile } from "./readAndWrite.js";
const FILE = "./users.json";
const user = {
    "name ": "Penelopa Sherred",
    "email": "kbcsrred9@google.fr",
    "password": "vB7@OVQRr=f.XX",
    "gender": "Female"
}
const register = async (user) => {
    const users = await readFile(FILE);

    const existingUser = users.find((u) => u.email === user.email);
    if (existingUser) {
        console.log("user is existing. Please try to login");
        return;
    }

    const updatedData = [...users, user];
    
    const response = await writeFile(FILE, updatedData);
    console.log(response.status);
}
register(user);