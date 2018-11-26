pipeline {
   agent any
      environment {
         PATH='/usr/local/bin:/usr/bin:/bin'
      }
   stages {
      stage('NPM Setup') {
      steps {
         sh 'npm install'
      }
   }


   stage('Android Build') {
   steps {
    //   sh 'sudo npm install -g cordova@7.0.0'
      sh 'cordova build android --release'
    //   sh 'ionic serve'
   }
  }

   
 }
}