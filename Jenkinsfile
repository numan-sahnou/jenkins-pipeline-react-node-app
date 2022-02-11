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
        /*stage('Release') {
            steps{
            	echo 'Stage to release'
            	bat 'git checkout release'
		bat 'git merge origin/dev'
		bat 'git config user.name numan-sahnou'
                bat 'git config user.email numan.sahnou@efrei.net'
                //bat 'git commit -am "push to release"'
                bat 'git push --set-upstream origin release'
            }
        }*/
    }
    post {
	    always {
	      echo 'Stage to release'
            	bat 'git checkout release'
		bat 'git merge origin/dev'
		bat 'git config user.name numan-sahnou'
                bat 'git config user.email numan.sahnou@efrei.net'
                //bat 'git commit -am "push to release"'
                bat 'git push --set-upstream origin release'
	    }
	  }
}
