# Nullstack Portfolio

This personal portfolio project was created using [Nullstack](https://nullstack.app/) and [TypeScript](https://www.typescriptlang.org/), with data stored in a MongoDB database.

## Features

- Personal information and introduction
- Detailed work experiences, including companies and roles
- Personal projects with links to demonstration and source code
- Contributions to open source projects
- Education history and qualifications

## How to run this project

### Install the dependencies

```bash
npm install
```

### Configure the environment variables

Copy the environment file example to a .env file and fill in the corresponding variables.

```sh
NULLSTACK_PROJECT_NAME="[dev] Nullstack Portfolio"
NULLSTACK_PROJECT_DOMAIN="localhost"
NULLSTACK_PROJECT_COLOR="#D22365"
NULLSTACK_SERVER_PORT="3000"
NULLSTACK_SECRETS_DATABASE_NAME="" # Your MongoDB database name
NULLSTACK_SECRETS_MONGODB_URI="" # Connection URI to your MongoDB
```

### Run the application

```bash
npm start
```

Open [http://localhost:3000](http://localhost:3000) to view the application in your browser.

## Data Structure

The project includes various TypeScript model classes to structure the data. Each class represents a different collection in MongoDB. Here are the model classes:

- `SummaryModel`: Personal information and introduction
- `roleModel`: Roles within a company (a person may have held several roles in a single company)
- `WorkExperiencesModel`: Represents a company, which contains an array of roles.
- `PersonalProjectModel`: Personal projects
- `OpenSourceContribsModel`: Contributions to open source projects
- `EducationModel`: Education history and qualifications

You can find the complete definition of these classes in the database typing file `databaseInterfaces.ts`.

## Learn more about Nullstack

To learn more about how this project was built and how you can leverage Nullstack in your own projects, consult the [official Nullstack documentation](https://nullstack.app/documentation).
