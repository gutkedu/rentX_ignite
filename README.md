# RentX

RentX is an online car rental api that provides a convenient way for users to rent vehicles. This repository contains the source code for the RentX application.

## Features

- User registration and authentication
- Car browsing and search
- Car rental booking
- User reviews and ratings
- Secure payment processing
- Admin panel for managing cars, bookings, and users
- Advanced filtering and sorting options

## Technologies Used

- Node.js
- Express.js
- TypeScript
- PostgreSQL
- TypeORM
- JWT (JSON Web Tokens)
- Docker
- AWS S3
- SendGrid

## Getting Started

Follow these instructions to get a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

- Node.js 
- PostgreSQL 
- Docker 

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/gutkedu/RentX.git
   ```

2. Install dependencies:

   ```bash
   cd RentX
   npm install
   ```

3. Set up environment variables:

   - Create a `.env` file based on the provided `.env.example` file.
   - Update the necessary configuration variables in the `.env` file.

4. Start the PostgreSQL and Redis services using Docker:

   ```bash
   docker-compose up -d
   ```

5. Run database migrations:

   ```bash
   npm run typeorm migration:run
   ```

6. Start the application:

   ```bash
   npm run dev
   ```

   The application will be accessible at `http://localhost:3333`.

## Deployment

To deploy the application to a production environment, follow these steps:

1. Provision a server or hosting platform of your choice.

2. Set up the necessary infrastructure, including a PostgreSQL database and Redis instance.

3. Update the environment variables on your production server with the appropriate values.

4. Build and package the application using a bundler or packaging tool.

5. Deploy the packaged application to your production server.

6. Start the application process.
