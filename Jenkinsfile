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
        stage('Docker Build') {
            steps{
            	echo 'Docker Build & Test'
		bat 'docker-compose down'
            	bat 'docker-compose up -d'
            }
        }
	stage('Integration Tests'){
            steps{
                //bat 'npm install --prefix ./frontend run' 
                bat 'npm --prefix ./frontend run test --watchAll=false --forceExit'
            }
        }
    }
    post {
	    success {
	      echo 'Stage to release'
            	bat 'git checkout release'
		bat 'git add .'
                bat 'git diff --quiet && git diff --staged --quiet || git commit -am "Change for release"'
                bat 'git push'
                /*bat 'git merge origin/dev'
		sshagent(['138011fd-e2f7-4a67-9d5d-150fdaff7dc8']) {
		  bat "git push origin release"
		}
		withCredentials([usernamePassword(credentialsId: '138011fd-e2f7-4a67-9d5d-150fdaff7dc8', usernameVariable: 'numan-sahnou', passwordVariable: 'Scarface93290@')]) {
			bat 'git push origin release'
		}*/
	    }
	  }
}
