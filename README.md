# Tastebuds Official

Tastebuds is a cloud kitchen-based website that offers a variety of food items for users to explore, review, and add to. Built using the MERN stack (MongoDB, Express.js, React, Node.js), this project allows users to experience a complete food service platform with the capability to add reviews, rate dishes, and manage their own food menu items through a secure Firebase authentication system.

## Table of Contents

- [Live Demo](#live-demo)
- [About the Project](#about-the-project)
- [Tech Stack](#tech-stack)
- [Features](#features)
- [Installation](#installation)
- [Common Issues & Resolutions](#common-issues--resolutions)
- [License](#license)

## Live Demo

Explore the live version of the project [here](https://tastebuds-official.web.app/).

## About the Project

Tastebuds Official is a service reviewing app built with the MERN stack. It provides users with an interactive platform to:

- View and explore different food items.
- Check ratings and read reviews from other users.
- Add their own food items to the menu (available to verified users only).
- Post, update, read, and delete their own reviews.

### Challenges and Learnings

This was my first mini project using the MERN stack. As a beginner, I encountered various errors and had to develop logic to handle different functionalities. Despite the challenges, the learning process was both educational and enjoyable.

## Tech Stack

- **Frontend:** React, Tailwind CSS, Flowbite, Flowbite React
- **Backend:** Express.js
- **Database:** MongoDB
- **Authentication:** Firebase
- **Build Tools:** Vite
- **Additional Libraries:** React Photo View, React Toastify

## Features

- **Food Item Listings:** Display various food items with ratings and reviews.
- **User Reviews:** Users can read and add reviews for food items.
- **Add to Menu:** Verified users can add their own food items to the menu (handled through Firebase authentication).
- **CRUD Operations:** Users can post, update, read, and delete their reviews, managed on the backend using Express.js and MongoDB.

## Installation

To set up the project locally, follow these steps:

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/tastebuds-official.git
   ```
2. Navigate to the project directory:
   ```bash
   cd tastebuds-official
   ```
3. Install the dependencies:
   ```bash
   npm install
   ```
4. Start the development server:
   ```bash
   npm run dev
   ```

## Common Issues & Resolutions

Here are some common issues that might be encountered while setting up the project:

1. **Firebase Authentication:** Ensure that Firebase is correctly configured and initialized in the project. Verify your Firebase API keys and project details in the Firebase console.

2. **Backend Connection:** Ensure that your Express.js server and MongoDB database are running properly and that the connection URI is correctly set up.

3. **Vite Compatibility:** If you face issues related to Vite, ensure that the correct versions of dependencies are installed, as specified in the `package.json`.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more information.
