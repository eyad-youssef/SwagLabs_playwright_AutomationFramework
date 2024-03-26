pipeline {
   agent any
    // tools { 
    //     nodejs 'NodeJS' 
    // } 

  stages { 
    stage('Checkout') {
      steps {
        // Checkout your Playwright project from version control (e.g., Git)
        git 'https://github.com/eyad-youssef/SwagLabs_playwright_AutomationFramework.git'
        // checkout scm
      }
    }
    stage('install playwright') {
      steps {
        
           bat 'npm ci'
        bat 'npm install'
        bat 'npx playwright install'
       
      }
    }
    
    stage('test') {
      steps {
        bat ' npm playwright test BaseTest.spec.js --project=chromium --headed'
      } 
    }
    stage('Generate Allure Report') { 
            steps { 
                bat 'allure generate allure-results --clean -o allure-report' 
            } 
        } 
     
  }
    
  post { 
        // always { 
        //     archiveArtifacts artifacts: 'allure-report/**', fingerprint: true 
        //     allure([ 
        //         includeProperties: false,  
        //         jdk: '',  
        //         results: [[path: 'allure-results']] 
        //     ]) 
        // } 
 
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

