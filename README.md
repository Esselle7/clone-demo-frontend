# Clone Demo Frontend - YouTube Clone

> A frontend application built with Angular to simulate a YouTube clone, with features for viewing, searching, and playing videos.

## Project Overview

This project is a frontend application built using Angular, replicating some of YouTube's main user interface features. It serves as a demo to practice and learn technologies such as Angular, TypeScript, RxJS, SCSS, and API integration (similar to YouTube's API). The project includes responsive UI components, state management, and page navigation.

## Main Features

- **Home Page with Video Thumbnails**: Display recent and popular videos on a main screen with thumbnails and video details.
- **Video Search**: Instant search functionality to find videos based on keywords, with dynamic suggestions as you type.
- **Video Detail Page**: A dedicated page to play videos, with description, view count, interactive buttons (like, dislike), and a comments section.
- **Navigation**: Intuitive and responsive interface with a sidebar menu for quick access to different sections.
- **Comments Section**: View and add comments below the video, with author information and timestamps.
- **Recommended Videos**: Display related videos on the video detail page to encourage continuous browsing.

## Requirements

- [Node.js](https://nodejs.org/) (version 12.x or higher)
- [Angular CLI](https://angular.io/cli) (version 11.x or higher)
- Compatible Web Browser (Chrome, Firefox, Edge, Safari)

## Installation

1. **Clone the repository**

   git clone https://github.com/your_username/clone-demo-frontend.git
   cd clone-demo-frontend

2. **Install dependencies**

   npm install

3. **Run the application locally**

   ng serve

   Now you can access the application at `http://localhost:4200/`.

## Project Structure

The project directory structure is organized as follows:

- **src/app/components**: Contains the main user interface components (e.g., `video-list`, `video-detail`, `search-bar`).
- **src/app/services**: Angular services managing application logic, like fetching video and comment data.
- **src/app/models**: Contains TypeScript models representing data structures like Video, User, Comment, etc.
- **src/app/pages**: Includes main pages (e.g., `home`, `video-detail`, `search-results`).

## Technologies Used

- **Angular**: Main frontend framework used to create modular and reactive components.
- **TypeScript**: Programming language used to ensure a typed and maintainable codebase.
- **RxJS**: Used for managing asynchronous streams and handling events like dynamic searches.
- **SCSS**: Styles the user interface with a modular and maintainable CSS structure.

## Contributing

Contributions are welcome! If you would like to contribute, feel free to fork the repository, make your changes, and submit a pull request. For bug reports or feature requests, please open an issue.


## License

This project is licensed under the MIT License. See the [LICENSE](./LICENSE) file for more details.
