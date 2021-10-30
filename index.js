const contactsOperations = require('./contacts');

const { Command } = require("commander");

const program = new Command();
program
  .option("-a, --action <type>", "choose action")
  .option("-i, --id <type>", "user id")
  .option("-n, --name <type>", "user name")
  .option("-e, --email <type>", "user email")
  .option("-p, --phone <type>", "user phone");

program.parse(process.argv);

const argv = program.opts();

const workWithcontacts = async ({ action, id, name, email, phone }) => {
  try {
    switch (action) {
      case "list":
        return await contactsOperations.listContacts();
      case "get":
        return await contactsOperations.getById(id);
      case "add":
        return await contactsOperations.add(name, email, phone);
      case "remove":
        return await contactsOperations.removeById(id);
    }
  } catch (error) {
    throw new error();
  }
};
workWithcontacts(argv);