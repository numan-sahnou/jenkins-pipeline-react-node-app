pipeline {
    agent any
    stages {
        stage('Docker Build') {
            steps{
            	echo 'Docker Build'
            	bat 'docker-compose up --build -d'
            }
        }
        stage('Integration Test') {
            steps{
            	echo 'Test Integration'
            	bat 'npm --prefix ./frontend run test -- --watchAll=false'
            }
        }
        stage('Release') {
            steps{
            	echo 'Stage to release'
            	bat 'git checkout release'
                bat 'git merge origin/dev'
                bat 'git push origin release'
            }
        }
    }
}