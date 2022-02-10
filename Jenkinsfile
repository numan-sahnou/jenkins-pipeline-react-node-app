pipeline {
    agent any
    stages {
    	stage('Environment') {
	      steps {
	        bat 'git --version'
	        bat 'docker -v'
	      }
	    }
        stage('Docker Test Integration') {
            steps{
            	echo 'Docker Build & Test'
            	bat 'docker-compose up --build -d'
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
