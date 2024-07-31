# Contacts Project

This project is a simple contacts management application built using React, React Router, Zustand for state management, and various other tools and libraries. It allows users to view a list of contacts, see details for each contact, and maintain a list of frequently visited contacts.

## Features

- View a list of contacts on the `/contacts` page.
- View detailed information for each contact by navigating to routes like `/contacts/:contactId`.
- Keep track of frequently visited contacts, displaying the last four visited items.

## Getting Started

### Prerequisites

Make sure you have the following installed on your system:

- Node.js (version 14 or later)
- npm (version 6 or later) or Yarn (version 1.22.10 or later)

### Installation

1. Clone the repository to your local machine:

    ```sh
    git clone https://github.com/maahjam/contact-pay.git
    cd contacts-project
    ```

2. Install the project dependencies:

    ```sh
    npm install
    # or
    yarn install
    ```

### Running the Project

You can run the project in development mode or build it for production.

#### Development Mode

To start the project in development mode with hot reloading, run:

    ```sh
    npm start
    # or
    yarn start
    ```

This will start a development server and open the application in your default web browser.

#### Production Build

To build the project for production, run:

    ```sh
    npm run build
    # or
    yarn build
    ```

This will create an optimized build of the project in the `dist` directory.

## Project Structure

- **src/**: Contains the source code for the application.
  - **components/**: Reusable React components.
  - **pages/**: React components representing different pages/routes.
  - **hooks/**: Custom React hooks.
  - **services/**: API service functions.
  - **assets/**: Static assets like images, styles, etc.
- **public/**: Contains the public HTML template.
- **dist/**: The output directory for the production build.
- **webpack.config.mjs**: Webpack configuration file.

## Scripts

- `start`: Starts the development server with Webpack.
- `build`: Builds the project for production.

## Dependencies

### Core Dependencies

- `react`: ^18.3.1
- `react-dom`: ^18.3.1
- `react-router-dom`: ^6.25.1
- `zustand`: ^4.5.4
- `axios`: ^1.7.2
- `@tanstack/react-query`: ^5.51.15

### Development Dependencies

- `webpack`: ^5.93.0
- `webpack-cli`: ^5.1.4
- `webpack-dev-server`: ^5.0.4
- `html-webpack-plugin`: ^5.6.0
- `babel-loader`: ^9.1.3
- `ts-loader`: ^9.5.1
- `css-loader`: ^7.1.2
- `style-loader`: ^4.0.0
- `postcss-loader`: ^8.1.1
- `autoprefixer`: ^10.4.19
- `tailwindcss`: ^3.4.6
- `eslint`: ^9.8.0
- `eslint-config-prettier`: ^9.1.0
- `eslint-plugin-prettier`: ^5.2.1
- `eslint-plugin-react`: ^7.35.0
- `prettier`: ^3.3.3
- `prettier-plugin-import-sort`: ^0.0.7
- `prettier-plugin-tailwindcss`: ^0.6.5
- `typescript`: ^5.5.4
- `ts-node`: ^10.9.2
- `@babel/core`: ^7.25.2
- `@babel/preset-env`: ^7.25.2
- `@babel/preset-react`: ^7.24.7
- `@babel/preset-typescript`: ^7.24.7
- `@types/react`: ^18.3.3
- `@types/react-dom`: ^18.3.0
- `@types/node`: ^20.14.12

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any changes.

## Contact

For any inquiries or questions, please contact [maahjam@gmail.com].
