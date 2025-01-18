# Git Analysis

Git Analysis is a powerful tool that helps users efficiently manage their GitHub projects and meetings. With this application, users can simply input the URL of their GitHub project to initiate an intelligent process that streamlines project management and enhances collaboration. 

Built with cutting-edge technologies like Next.js, TypeScript, Prisma, and Clerk, and powered by Gemini AI and AssemblyAI, Git Analysis is designed to provide a seamless and smart experience for developers and teams.

## Screenshots

![Screenshot 1](public/screenshot1.png)
*Screeshot of project creation*

![Screenshot 2](public/screenshot2.png)
*Screenshot of Dashboard interface*

## Features

- **Easy Integration**: Input your GitHub project URL to begin.
- **AI-Powered Insights**: Utilize Gemini AI for advanced project analysis.
- **Meeting Management**: Leverage AssemblyAI for automatic transcription and summarization of project-related meetings.
- **Full-Stack Efficiency**: Built with Next.js and TypeScript for a scalable and robust application.
- **Secure Access**: User authentication and session management powered by Clerk.

## Tech Stack

- **Frontend**: [Next.js](https://nextjs.org), [TypeScript](https://www.typescriptlang.org)
- **Backend**: [Prisma](https://www.prisma.io) for database management
- **Authentication**: [Clerk](https://clerk.dev)
- **AI Services**:
  - [Gemini AI](#) for intelligent project analysis
  - [AssemblyAI](https://www.assemblyai.com) for meeting transcription and summarization
- **Styling**: [Tailwind CSS](https://tailwindcss.com)

## Getting Started

Follow these steps to set up and run the project locally:

### Prerequisites

Ensure you have the following installed:

- [Node.js](https://nodejs.org) (LTS version recommended)
- [npm](https://www.npmjs.com) or [yarn](https://yarnpkg.com)
- A GitHub account
- A Clerk API key
- A database connection string (supported by Prisma)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/Rui-23/gitAnalysis.git
   ```

2. Navigate to the project directory:
   ```bash
   cd gitAnalysis
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

4. Set up environment variables:
   - Copy the `.env.example` file to `.env`:
     ```bash
     cp .env.example .env
     ```
   - Add your environment-specific variables (e.g., Clerk API key, database URL).

5. Initialize the database:
   ```bash
   npm run db:push
   ```

### Running the Application

1. Start the development server:
   ```bash
   npm run dev
   ```

2. Open your browser and navigate to `http://localhost:3000`.

## Usage

1. Log in to the application using your Clerk credentials.
2. Input the URL of a GitHub project you want to manage.
3. Explore the AI-generated insights, manage meetings, and collaborate effectively.

## Contributing

We welcome contributions! Please follow these steps to contribute:

1. Fork the repository.
2. Create a new branch:
   ```bash
   git checkout -b feature/your-feature-name
   ```
3. Commit your changes:
   ```bash
   git commit -m "Add your message here"
   ```
4. Push to the branch:
   ```bash
   git push origin feature/your-feature-name
   ```
5. Open a pull request.

## License

This project is licensed under the [MIT License](LICENSE).

## Acknowledgments

- [Gemini AI](#) for powering intelligent project insights.
- [AssemblyAI](https://www.assemblyai.com) for enhancing meeting management.
- The developers and contributors of Next.js, Prisma, Clerk, and Tailwind CSS.

---

Happy coding! 🚀