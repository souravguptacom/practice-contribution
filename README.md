# Team Feedback Board

This project is a simple React application that allows users to manage feedback for team members. Each member can receive feedback, which can be increased independently, and there is a "Reset All" button to reset all feedback counts to zero.

## Features

- Displays a list of team members with their names and feedback counts.
- Each member has a button to increase their individual feedback count.
- A "Reset All" button resets all feedback counts to zero.

## Project Structure

```
team-feedback-board
├── src
│   ├── components
│   │   ├── App.tsx          # Main component managing the team members and feedback counts
│   │   ├── MemberCard.tsx   # Component displaying individual member's name and feedback count
│   │   └── App.css          # Styles for the App component and its children
│   ├── types
│   │   └── index.ts         # TypeScript types and interfaces
│   ├── index.css            # Global styles for the application
│   └── main.tsx             # Entry point of the React application
├── index.html               # Main HTML file serving the React application
├── package.json             # npm configuration file
├── tsconfig.json            # TypeScript configuration file
├── vite.config.ts           # Vite configuration file
└── README.md                # Project documentation
```

## Getting Started

To get started with the project, follow these steps:

1. Clone the repository:
   ```
   git clone <repository-url>
   ```

2. Navigate to the project directory:
   ```
   cd team-feedback-board
   ```

3. Install the dependencies:
   ```
   npm install
   ```

4. Start the development server:
   ```
   npm run dev
   ```

5. Open your browser and go to `http://localhost:3000` to view the application.

## Usage

- Click on the "Increase Feedback" button for each team member to increment their feedback count.
- Click on the "Reset All" button to reset all feedback counts to zero.

## Contributing

Contributions are welcome! Please feel free to submit a pull request or open an issue for any suggestions or improvements.