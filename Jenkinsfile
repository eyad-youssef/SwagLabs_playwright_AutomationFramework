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
        bat 'npm run -BaseTest'
      } 
    }
    stage('Generate Allure Report') { 
            steps { 
                bat 'allure generate allure-results --clean -o allure-report' 
                bat'allure open allure-report'
            } 
        } 
     
  }
    
  post { 
        always { 
            // archiveArtifacts artifacts: 'allure-report/**', fingerprint: true 
            // allure([ 
            //     includeProperties: false,  
            //     jdk: '',  
            //     results: [[path: 'allure-results']] 
            // ])  
             bat '"C:\\path\\to\\allure\\bin\\allure" generate "path\\to\\allure-results" -o "path\\to\\allure-report"'
        } 
 
        success { 
             emailext(
      subject: "Allure Report - ${currentBuild.fullDisplayName} - Build Successful",
      body: "Please find the Allure report attached.",
      attachmentsPattern: 'path\\to\\allure-report\\**\\*',
      to: 'youssefeyad105@gmail.com',
      mimeType: 'text/html',
      compress: true
    )
    } 
 
        failure { 
             emailext(
      subject: "Allure Report - ${currentBuild.fullDisplayName} - Build Failed",
      body: "Please find the Allure report attached.",
      attachmentsPattern: 'path\\to\\allure-report\\**\\*',
      to: 'youssefeyad105@gmail.com',
      mimeType: 'text/html',
      compress: true
    ) } 
    } 
}

