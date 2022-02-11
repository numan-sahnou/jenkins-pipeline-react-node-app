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
            	bat 'docker-compose up -d'
		//bat 'npm --prefix ./frontend test -- --watchAll=false'
            }
        }
        stage('Release') {
            steps{
            	echo 'Stage to release'
            	bat 'git checkout release'
                bat 'git merge origin/dev'
		git 'config --global user.email numan1@live.fr'
                git 'config --global user.name numan-sahnou'
		bat 'git commit -am "Merged dev branch to release'
                bat 'git push'
            }
        }
    }
}
