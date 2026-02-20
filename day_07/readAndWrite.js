import fs from "fs/promises";
export const readFile = async (FILE) => {
    try {
        const data = await fs.readFile(FILE, "utf-8");
        return JSON.parse(data);
    } catch (error) {
        console.log("unable to read data");
    }
}

export const writeFile = async (FILE, data) => {
    let message = "";
    let status = 0;
    try {
        await fs.writeFile(FILE, JSON.stringify(data, null, 2));
        message = "Data has been written successfully.";
        status = 200;
    } catch (error) {
        message = "unable to write";
        status = 500;
    }
    return {message,status}
}
// readFile("./users.json").then((data)=>console.log(data));
// const data = {
//     "name ": "Penelopa Sherred",
//     "email": "psherred9@google.fr",
//     "password": "vB7@OVQRr=f.XX",
//     "gender": "Female"
// }
// writeFile("./users.json", data).then((response)=>console.log(response.message));