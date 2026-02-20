import { readFile } from "./readAndWrite.js";
const FILE = "./users.json";
const login = async (user) => {
    const { email, password } = user;
    let message = "";

    const users = await readFile(FILE);
    if (users.length === 0) message = "user is not registered."
    else {
        const existingUser = users.find((u) => u.email === email);
        if (!existingUser) {
            message = "user is not registered.";
        }
        else {
            existingUser.password === password ?
                message = "LOGIN successfull" : message = "Incorrect Password";
        }
    }
    console.log(message);
}
login({ email: "psherred9@google.fr", password: "vB7@OVQRr=f.XX" ,id:1});