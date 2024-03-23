# SwagLabs_playwright_AutomationFramework


---

# Playwright E-commerce Testing Project

This repository contains a Playwright project for automated testing of the Swag Labs e-commerce website. The tests are designed using the Page Object Model (POM) pattern and can be executed in a Jenkins pipeline. Allure reports are generated to provide detailed test execution results.

## Table of Contents

- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Test Execution](#test-execution)
- [Jenkins Pipeline](#jenkins-pipeline)
- [Allure Reports](#allure-reports)
- [Project Structure](#project-structure)
- [Contributing](#contributing)


## Prerequisites

Before running the tests, ensure that you have the following prerequisites installed:

- Node.js (version 14 or higher)
- NPM (Node Package Manager)
- JavaScript (required for running Jenkins and Allure)

## Installation

To install the project and its dependencies, follow these steps:

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/playwright-ecommerce-testing.git
   ```

2. Navigate to the project directory:

   ```bash
   cd playwright-ecommerce-testing
   ```

3. Install the project dependencies:

   ```bash
   npm install
   ```

## Test Execution

To execute the tests locally, perform the following steps:

1. Ensure that the Swag Labs website is accessible.
2. Update the test configuration file (`config.js`) with the appropriate website URL and credentials, if required.
3. Run the tests using the following command:

   ```bash
   npm test
   ```

   This will execute all the test scripts defined in the `tests` directory.

## Jenkins Pipeline

This project includes a Jenkins file (`Jenkinsfile`) that sets up a pipeline for executing the tests in Jenkins. The pipeline is designed to be triggered automatically on every commit or can be manually triggered.

To set up the Jenkins pipeline, follow these steps:

1. Install and configure Jenkins on your server.
2. Create a new Jenkins pipeline job.
3. Configure the pipeline job to connect to your Git repository and specify the Jenkinsfile as the pipeline script.
4. Save the job configuration.
5. Trigger the pipeline manually or by committing changes to the repository.

## Allure Reports

Allure reports are generated to provide comprehensive test execution results, including test status, steps, screenshots, and more.

To view the Allure reports locally after test execution, follow these steps:

1. Ensure that Java is installed on your machine.
2. Install the Allure command-line tool:

   ```bash
   npm install -g allure-commandline
   ```

3. After test execution, generate the Allure report using the following command:

   ```bash
   npm run generate-report
   ```

4. Open the generated report in the default web browser:

   ```bash
   allure open
   ```

## Project Structure

The project follows a structured organization based on the Page Object Model (POM) design pattern. The main directories and files are as follows:

- `tests`: Contains the test scripts written using Playwright and the POM pattern.
- `pages`: Contains the Page Objects representing the different pages of the Swag Labs website.
- `utils`: Contains utility functions and helper modules used in the tests.
- `playwright.config.js`: Configuration file for storing website URLs, credentials, and other settings.
- `Jenkinsfile`: Jenkins pipeline configuration file for executing the tests.
- `package.json`: NPM package configuration file.

## Contributing

Contributions to this project are welcome. If you find any issues or have suggestions for improvements, please open an issue or submit a pull request.



Feel free to customize this README file based on your specific project requirements, adding or removing sections as needed. Ensure that you provide clear instructions for installation, test execution, Jenkins pipeline setup, and generating Allure reports.
