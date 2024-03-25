pipeline {
  // agent { 
  //   docker { 
  //     image 'mcr.microsoft.com/playwright:v1.17.2-focal'
  //   } 
  // }
  stages { 
    stage('Checkout') {
      steps {
        // Checkout your Playwright project from version control (e.g., Git)
        checkout scm
      }
    }
    stage('install playwright') {
      steps {
        sh '''
          npm install
          npm i -D @playwright/test
          npx playwright install
        '''
      }
    }
    
    stage('test') {
      steps {
        sh '''
          npm ci
          npx playwright test BaseTest.spec.js --project=chromium --headed
          px playwright test --reporter=allure-playwright
        '''
      } 
    }
    stage('Generate Allure Report') { 
            steps { 
                sh 'allure generate allure-results --clean -o allure-report' 
            } 
        } 
     
  }
    
  post { 
        always { 
            archiveArtifacts artifacts: 'allure-report/**', fingerprint: true 
            allure([ 
                includeProperties: false,  
                jdk: '',  
                results: [[path: 'allure-results']] 
            ]) 
        } 
 
        success { 
            mail to: 'youssefeyad105@gmail.com', 
                 subject: 'Playwright Test Execution Success', 
                 body: 'The Playwright tests executed successfully. Please check the Allure report for details.' 
        } 
 
        failure { 
            mail to: 'youssefeyad105@gmail.com', 
                 subject: 'Playwright Test Execution Failure', 
                 body: 'The Playwright tests failed. Please check the Jenkins logs and the Allure report for details.' 
        } 
    } 
}

