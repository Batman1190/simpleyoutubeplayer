This project is a Simple YouTube Player built with HTML, CSS, and vanilla JavaScript. It allows a user to paste a YouTube video URL (either a standard or a youtu.be short link) and load it into an embedded player on the page.
________________________________________
🚀 Simple YouTube Player
A straightforward web application for embedding and playing YouTube videos from a URL. It utilizes a simple JavaScript function to extract the video ID and update an <iframe> player.
________________________________________
✨ Features
•	URL Handling: Accepts standard YouTube watch links (https://www.youtube.com/watch?v=...) and short links (https://youtu.be/...).
•	Video ID Extraction: A pure JavaScript function handles extracting the 11-character video ID from the provided URL.
•	Embedded Player: Uses the native YouTube embed <iframe> for video playback, requiring no external player libraries.
•	Responsive Design: The player and controls are styled to adapt to different screen sizes, including mobile.
•	Enter Key Support: Users can press the Enter key in the input field to load the video.
________________________________________
🛠️ Technologies Used
•	HTML5 (Structure)
•	CSS3 (Styling, with a dark theme and responsive layout)
•	Vanilla JavaScript (Logic for URL parsing and player updating)
________________________________________
💻 How to Use
1.	Paste URL: Enter a valid YouTube URL (or even just the 11-character video ID) into the input field.
2.	Play: Click the "Play" button or press the Enter key.
The video will automatically load and update in the embedded player below the controls.
________________________________________
📂 Project Structure
File	Description
index.html	The main HTML structure, including the input, button, and the YouTube <iframe>.
style.css	Styles for the page layout, card design, controls, and responsive adjustments.
script.js	Contains the core logic for extracting the video ID, handling button clicks, and updating the player's src.
Key JavaScript Logic
The extractYouTubeID(url) function in script.js is responsible for parsing the URL:
•	It checks for youtu.be links and extracts the ID from the pathname.
•	It checks for standard youtube.com links and extracts the ID from the v query parameter (v=...).
•	It also supports direct input of the 11-character video ID.
•	If a valid ID is found, it constructs the new embed URL (https://www.youtube.com/embed/...) and sets it as the src for the player <iframe>.

