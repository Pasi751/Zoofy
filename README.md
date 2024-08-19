Zoom Clone
A Zoom Clone is a web application that mimics the core functionalities of Zoom, including video conferencing, real-time chat, and user management. This project is intended for educational purposes and demonstrates how to build a video conferencing app using modern web technologies.

Features
Video Conferencing: Host and join video meetings with multiple participants.
Real-time Chat: Communicate with participants through text chat.
User Authentication: Sign up, log in, and manage user accounts.
Meeting Management: Schedule, start, and manage meetings.
Screen Sharing: Share your screen with other participants during meetings.
Recording: Option to record meetings for later review.
Technologies Used
Frontend: React.js
Backend: Node.js with Express.js
Video Communication: WebRTC
Database: MongoDB
Authentication: JWT (JSON Web Tokens)
Styling: CSS / Sass

Installation

Prerequisites
Node.js and npm (or Yarn) installed on your machine.

Setup
Clone the Repository:
git clone https://github.com/YourUsername/zoom-clone.git

Navigate to the Project Directory:
cd zoom-clone

Install Dependencies for Frontend:
Navigate to the client directory and install the dependencies:
cd client
npm install

Install Dependencies for Backend:
Navigate to the server directory and install the dependencies:
cd ../server
npm install

Configure Environment Variables:
Create a .env file in the server directory and add the following environment variables:
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
Replace your_mongodb_connection_string and your_jwt_secret_key with your actual values.

Run the Application:
Start the backend server:
cd server
npm start

In a new terminal, start the frontend development server:
cd client
npm start

The application should now be running at http://localhost:3000.

Usage
Sign Up / Log In: Create an account or log in to access the application.
Create a Meeting: Schedule a new meeting or start an instant meeting.
Join a Meeting: Enter the meeting ID to join an existing meeting.
Share Screen: Use the screen sharing feature during meetings.
Chat: Use the chat feature to communicate with other participants.
Record: Record meetings for later review (if enabled).

Contributing
Contributions are welcome! If you have suggestions for improvements or new features, please open an issue or submit a pull request.

License
This project is licensed under the MIT License - see the LICENSE file for details.

Contact
If you have any questions or feedback, please reach out to me.
