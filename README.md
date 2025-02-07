# MailsApp
### README

#### Description of the program and additional improvements selected

The program is a simple mail application that supports sending, reading, and deleting messages via a Command Line Interface (CLI) using the Notion API. It allows users to:

1. Send mail to a designated user as a specified sender.
2. Read mail for a given recipient.
3. Delete mail by message ID.

Additionally, these features:

- Added timestamps to each of the messages to indicate when the message was sent.
- Added functionality to delete messages.
- Added better error handling and user input validation for a smoother user experience.

#### Description about how to install and run the program

1. **Clone the repository:**
    ```bash
    git clone <repository-url>
    ```

2. **Navigate into the project directory:**
    ```bash
    cd notion-mail-app
    ```

3. **Install dependencies:**
    ```bash
    npm install
    ```

4. **Setup environment variables:**

   Create a `.env` file in the root directory and add your Notion API credentials:
    ```
    NOTION_KEY=<your_notion_integration_token>
    NOTION_DATABASE_ID=<your_database_id>
    ```

5. **Run the program:**
    ```bash
    node server.js
    ```

6. **Follow the interactive prompts to send, read, or delete mail.**

#### List of references to sources you relied on

- [Node.js readline docs](https://nodejs.org/api/readline.html)
- [Notion API reference](https://developers.notion.com/reference/intro)
- [StackOverflow: How to build a CLI tool with Node.js](https://stackoverflow.com/questions/47451173/how-to-build-a-command-line-tool-with-nodejs)

#### Future improvements

1. **User Authentication:** Implement user authentication to restrict access to authorized users.
2. **Message Editing:** Add functionality to edit messages after they have been sent.
3. **Message Search:** Add the capability to search messages by keywords.
4. **Improve User Interface:** Enhance the CLI experience using libraries like `inquirer.js` to provide a more user-friendly interface.
5. **Deployment:** Containerize the application using Docker for easier deployment and scalability.

#### Product or technical choices made and why

1. **Node.js and Notion SDK:** Leveraged Node.js and the official Notion SDK for easy and seamless interaction with the Notion API.
  
2. **Environment Variables:** Used `.env` files to manage sensitive credentials, making it easier to manage in different environments.

3. **Error Handling:** Added comprehensive error handling to manage issues like API failures and invalid user inputs gracefully.


This guide provides a comprehensive description and steps for setup, running, and understanding the improvements made to the Notion mail app. The code is modular and extendable for future features and improvements.
