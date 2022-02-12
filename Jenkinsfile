pipeline {
    agent any
    tools {nodejs "node"}
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
		bat 'docker-compose down'
            	bat 'docker-compose up -d'
		//bat 'npm --prefix ./frontend test -- --watchAll=false'
            }
        }
    }
    post {
	    success {
	      echo 'Stage to release'
            	//bat 'git checkout release'
                bat 'git merge dev'
		bat 'git commit -am "Merged develop branch to release"'
		bat 'git push origin release'
	    }
	  }
}
