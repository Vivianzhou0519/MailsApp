# MailsApp

#### Description of the program and additional improvements selected

The program is a simple mail application that supports sending, reading, and deleting messages via a Command Line Interface (CLI) using the Notion API. It allows users to:

1. Send mail to a designated user as a specified sender.
2. Read mail for a given recipient.

Additionally, these features:

- Added functionality to delete messages.
- Added better error handling and user input validation for a smoother user experience.

#### Description about how to install and run the program

1. **Clone the repository:**
    ```bash
    git clone <repository-url>
    ```

2. **Navigate into the project directory:**
    ```bash
    cd MailsApp
    ```

3. **Install dependencies:**
    ```bash
    npm install
    ```

4. **Setup environment variables:**

   Create a `.env` file in the root directory and add your Notion API credentials:
    ```
    NOTION_KEY=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
    NOTION_DATABASE_ID=190dda4764cf80a99b45c9c549d9ed9b
    ```

5. **Run the program:**
    ```bash
    node server.js
    ```

6. **Follow the interactive prompts to send, read, or delete mail.**

#### List of references to sources you relied on

- [Notion Build Your First API] https://developers.notion.com/docs/create-a-notion-integration#getting-started
- [Notion Authroization] https://developers.notion.com/docs/authorization
- [Notion Create a database] https://developers.notion.com/reference/create-a-database
- [Notion intro to database] https://www.notion.com/help/intro-to-databasesa
- [Node js tutorial] https://nodejs.org/en/learn/getting-started/introduction-to-nodejs
- [Command line interface and node js] https://medium.com/@manavshrivastava/lets-build-a-cli-command-line-interface-with-node-js-d3b5faacc5ea
  
#### Future improvements

1. **User Authentication:** Implement user authentication to restrict access to authorized users.
2. **Message Editing:** Add functionality to edit messages after they have been sent.
3. **Message Search:** Add the capability to search messages by keywords.
4. **Improve User Interface:** Enhance the CLI experience using libraries like `inquirer.js` to provide a more user-friendly interface.
5. **Deployment:** Containerize the application using Docker for easier deployment and scalability.


### Future Improvements

**1. Message Editing: Allow Users to Edit Messages After Sending**
- **Steps:** Develop an editing endpoint, ensure only the message author or admin can edit, and modify the database to include `edited_at` and `edit_history` fields. Update the CLI to include editing options.
- **Key Considerations:** Maintain transparency by keeping an edit history and clearly indicate edited messages to users.

**2. Message Search: Add Keyword-Based Search Capability**
- **Steps:** Implement full-text search indexing on messages, develop a search endpoint, and integrate a search feature in the CLI.
- **Key Considerations:** Optimize for case-insensitivity and partial matches, and sanitize search inputs for security.

**3. Improve User Interface: Enhance CLI with `inquirer.js`**
- **Steps:** Integrate `inquirer.js` to replace basic inputs with interactive prompts. Structure user workflows logically and enhance usability.
- **Key Considerations:** Ensure accessibility and gather user feedback to improve interaction.

These improvements aim to make the MailsApp more user-friendly and scalable, facilitating better management and user experiences.

#### Product or technical choices made and why

1. **Node.js and Notion SDK:** Leveraged Node.js and the official Notion SDK for easy and seamless interaction with the Notion API.
  
2. **Environment Variables:** Used `.env` files to manage sensitive credentials, making it easier to manage in different environments.

3. **Error Handling:** Added comprehensive error handling to manage issues like API failures and invalid user inputs gracefully.


This guide provides a comprehensive description and steps for setup, running, and understanding the improvements made to the Notion mail app. The code is modular and extendable for future features and improvements.
