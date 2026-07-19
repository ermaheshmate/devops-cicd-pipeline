pipeline {

    agent any

    stages {

        stage('Clone') {
            steps {
                echo 'Repository cloned successfully.'
            }
        }

        stage('Build Docker Image') {
            steps {
                sh 'docker build -t devops-cicd-app:v1 .'
            }
        }

        stage('Stop Old Container') {
            steps {
                sh 'docker rm -f devops-web || true'
            }
        }

        stage('Run Container') {
            steps {
                sh '''
                docker run -d \
                --name devops-web \
                -p 8081:80 \
                devops-cicd-app:v1
                '''
            }
        }

        stage('Success') {
            steps {
                echo 'Application deployed successfully!'
            }
        }

    }

}

