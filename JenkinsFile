pipeline {
    agent any
    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }
        stage('Install Dependencies') {
            steps {
                script {
                    sh 'npm install'
                }
            }
        }
        stage('Build Project') {
            steps {
                script {
                    sh 'npm run build'
                }
            }
        }
        stage('Deploy to Vercel') {
            steps {
                script {
                    sh 'curl -X POST https://api.vercel.com/v1/integrations/deploy/prj_6wyjgqsBoRvSx0Z3YHpy1aIjZ3J1 -H "Authorization: Bearer <your-vercel-token>"'
                }
            }
        }
    }
}
