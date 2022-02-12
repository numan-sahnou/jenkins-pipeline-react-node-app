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
            	bat 'git checkout release'
                bat 'git merge origin/dev'
		sshagent(['138011fd-e2f7-4a67-9d5d-150fdaff7dc8']) {
		  bat "git push origin release"
		} 
	    }
	  }
}
