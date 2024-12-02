// Import the functions you need from the SDKs you need
import { error } from "console";
import { initializeApp } from "firebase/app";
import { getDownloadURL, getStorage, ref, uploadBytesResumable } from "firebase/storage"
import { resolve } from "path";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCpRdwsiqBcfTq7iqw7YakdU1ZrnxTsHxQ",
  authDomain: "gitanalysis-82a21.firebaseapp.com",
  projectId: "gitanalysis-82a21",
  storageBucket: "gitanalysis-82a21.firebasestorage.app",
  messagingSenderId: "651854162463",
  appId: "1:651854162463:web:c7a45a12ee5a52ae39032a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);

export async function uploadFile(file: File, setProgess?: (progress: number) => void ) {
  return new Promise((resolve, reject) => {
    try {
      const storageRef = ref(storage, file.name)
      const uploadTask = uploadBytesResumable(storageRef, file)

      uploadTask.on('state_changed', snapshot => {
        const progress = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100)
    
        if(setProgess) setProgess(progress)

        switch (snapshot.state) {
          case 'paused':
            console.log('upload is paused');
            break;
          case 'running':
            console.log('upload is running');
            break;
        }
      }, error => {
        reject(error)
      }, () => {
        getDownloadURL(uploadTask.snapshot.ref).then(downloadUrl => {
          resolve(downloadUrl as string)
        })
      })
    } catch (error) {
      console.error(error)
      reject(error)
    }
  })
}