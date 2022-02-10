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
		bat 'cd .\frontend\'
		bat 'npm test'
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
