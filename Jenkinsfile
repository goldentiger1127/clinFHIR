pipeline {
    agent any
    stages {
        stage('build') {
            steps {
                sh 'echo "hello world"'
            }
        }

        stage('run') {
            sh './startServer.sh'
        }
    }
}