const fs = require("fs/promises");
const getAll = require("./getAll");
const contactsPath = require("../path/contactsPath");

const removeById = async(id) => {
  try {
    const contacts = await getAll();
    const idx = contacts.findIndex((item) => item.id.toString() === id);
    if (idx === -1) {
      return null;
    }
   
    contacts.splice(idx, 1);
    await fs.writeFile(contactsPath, JSON.stringify(contacts));
    console.table(contacts);
    return 'Success remove'
  } catch (error) {
    console.log(error);
  }
};

module.exports = removeById;