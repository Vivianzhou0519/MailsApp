require('dotenv').config();
const { Client } = require('@notionhq/client');
const readline = require('readline');

// Debug: print environment variables to confirm they are being read correctly
console.log("NOTION_KEY:", process.env.NOTION_KEY);
console.log("NOTION_DATABASE_ID:", process.env.NOTION_DATABASE_ID);

// Initialize a client
const notion = new Client({ auth: process.env.NOTION_KEY });
const databaseId = process.env.NOTION_DATABASE_ID;

async function fetchDatabase() {
    try {
        const response = await notion.databases.query({
            database_id: databaseId,
        });
        console.log(JSON.stringify(response, null, 2));
    } catch (error) {
        console.error("Error fetching database:", error);
        console.error("Details:", error.body);
    }
}

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const sendMail = async (sender, recipient, message) => {
    try {
        await notion.pages.create({
            parent: { database_id: databaseId },
            properties: {
                Message: { title: [{ text: { content: message } }] },
                Sender: { rich_text: [{ text: { content: sender } }] },
                Recipient: { rich_text: [{ text: { content: recipient } }] },
            },
        });
        console.log('Message sent!');
    } catch (error) {
        console.error('Error sending message:', error);
    }
};

const readMail = async (user) => {
    try {
        const response = await notion.databases.query({
            database_id: databaseId,
            filter: {
                property: 'Recipient',
                rich_text: {
                    contains: user
                }
            }
        });
        console.log(`Messages for ${user}:`);
        response.results.forEach(page => {
            const pageId = page.id;
            const sender = page.properties.Sender.rich_text[0].text.content;
            const message = page.properties.Message.title[0].text.content;
            console.log(`Page ID: ${pageId}`);
            console.log(`From: ${sender}\nMessage: ${message}\n`);
        });
    } catch (error) {
        console.error('Error reading messages:', error);
    }
};

const deleteMail = async (messageId) => {
    try {
        console.log(`Attempting to delete message with ID: ${messageId}`); // Debugging print
        await notion.pages.update({
            page_id: messageId,
            archived: true,
        });
        console.log('Message deleted!');
    } catch (error) {
        console.error('Error deleting message:', error.message);
        console.error('Error details:', error.body);
    }
};

const promptUser = () => {
    console.log('Please select an option:');
    console.log('- send: Send mail to a user.');
    console.log('- read: Check a user\'s mail.');
    console.log('- delete: Delete a message.');
    console.log('- exit: Exit the application.');

    rl.question('> ', (command) => {
        console.log(`Command entered: ${command}`); // Debugging print
        if (command.trim() === 'send') {
            rl.question('Sender: ', (sender) => {
                rl.question('Recipient: ', (recipient) => {
                    rl.question('Message: ', (message) => {
                        sendMail(sender, recipient, message).finally(() => promptUser());
                    });
                });
            });
        } else if (command.trim() === 'read') {
            rl.question('User: ', (user) => {
                readMail(user).finally(() => promptUser());
            });
        } else if (command.trim() === 'delete') {
            rl.question('Message ID: ', (messageId) => {
                deleteMail(messageId).finally(() => promptUser());
            });
        } else if (command.trim() === 'exit') {
            console.log('Exiting...');
            rl.close();
        } else {
            console.log('Invalid command.');
            promptUser();
        }
    });
};

const main = async () => {
    console.log('Welcome to NotionMail!');
    await fetchDatabase();
    promptUser();
};

main();
