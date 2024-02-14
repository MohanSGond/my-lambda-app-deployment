# My Lambda App

This is a simple AWS Lambda application written in Node.js. It is automatically deployed using GitHub Actions.

## Prerequisites

- Node.js
- npm
- Serverless Framework
- AWS account

## Installation

1. Clone the repository:
```
git clone https://github.com/username/my-lambda-app.git
```
2. Navigate to the project directory:
```
cd my-lambda-app
```
3. Install the dependencies:
```
npm install
```

## Running the Application

To run the application locally, use the following command:
```
serverless invoke local --function myFunction
```

## Testing

To run the tests, use the following command:
```
npm test
```

## Deployment

The application is automatically deployed to AWS Lambda whenever a push is made to the main branch. This is configured in the `.github/workflows/main.yml` file.

## Contributing

Please read `CONTRIBUTING.md` for details on our code of conduct, and the process for submitting pull requests to us.

## License

This project is licensed under the MIT License - see the `LICENSE.md` file for details.