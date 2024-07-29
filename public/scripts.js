console.log(faceapi)

const run = async()=>{
    //we need to load our models
    //loading the models is going to use await
    await Promise.all([
        faceapi.nets.ssdMobilenetv1.loadFromUri('./models'),
        faceapi.nets.faceLandmark68Net.loadFromUri('./models'),
        faceapi.nets.faceRecognitionNet.loadFromUri('./models'),
        faceapi.nets.ageGenderNet.loadFromUri('./models'),
    ])
     const face1 =document.getElementById('face')
     let faceAIData =await faceapi.detectAllFaces(face1).withFaceLandmarks().withFaceDescriptors().withAgeAndGender()

     
     //console.log(faceAIData)


     const canvas=document.getElementById('canvas')
     canvas.style.left=face1.offsetLeft
     canvas.style.top=face1.offsetTop
     canvas.height=face1.offsetHeight
     canvas.width=face1.width

     //let draw bounding box
     faceAIData=faceapi.resizeResults(faceAIData,face1)
     faceapi.draw.drawDetections(canvas,faceAIData)

     //ask ai to get age and gender
     faceAIData.forEach(face=>{ 
        const{age,gender,genderProbabilty}=face
        const genderText=`${gender} -${genderProbabilty}`
        const ageText=`${Math.round(age)} years`
        const textField = new faceapi.draw.DrawTextField([genderText,ageText],face.detection.box.bottomLeft)
        textField.draw(canvas) 
    })


}


run()