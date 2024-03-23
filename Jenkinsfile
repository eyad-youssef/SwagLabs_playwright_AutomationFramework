pipeline {
  agent { 
    docker { 
      image 'mcr.microsoft.com/playwright:v1.17.2-focal'
    } 
  }
  stages { 
    // stage('Checkout') {
    //   steps {
    //     // Checkout your Playwright project from version control (e.g., Git)
    //     checkout scm
    //   }
    stage('install playwright') {
      steps {
        sh '''
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
        '''
      }
     
    }
  }
}
