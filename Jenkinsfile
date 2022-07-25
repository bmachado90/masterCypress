#!/usr/bin/groovy
// vi:ts=2 sw=2
pipeline {
  agent {
    docker {
      image '469320905350.dkr.ecr.eu-west-1.amazonaws.com/cypress-jenkins-worker:latest'
      args '''
            --group-add ${DOCKER_GROUP_ID} \
            -v $HOME/.npm:/tmp/.npm
           '''
    }
  }

  environment {
    // Disable Cypress color output
    // https://github.com/cypress-io/cypress/issues/3079
    NO_COLOR = '1'
  }

  stages {
    stage('Setup environment') {
      steps {
        sh '''
          ./nvmw npm set progress=false
          ./nvmw npm ci
        '''
      }
    }

    stage('End-to-end tests') {
      steps {
        sh '''
          ./nvmw npm run clean:results
          ./nvmw npm run cypress:ci
        '''
      }

      post {
        always {
          junit allowEmptyResults: true, checksName: 'End-to-end tests', testResults: 'cypress/results/TEST-*.xml'
        }
      }
    }

    stage('Visual regression tests') {
      steps {
        sh '''
          ./nvmw npm run clean:results
          ./nvmw npm run visual-regression:ci
        '''
      }

      post {
        always {
          junit allowEmptyResults: true, checksName: 'Visual regression tests', testResults: 'cypress/results/TEST-*.xml'
        }
      }
    }
  }
}
