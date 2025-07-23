import React, { useRef, useState } from 'react'
import MediaController from '../../Controllers/MediaController';

export default function Recorder ({token, capsule}) {

    const [ media, setMedia ] = useState();
    const [isRecording, setIsRecording] = useState(false)
    const [recordedURL, setRecordedURL] = useState('')
    const [seconds, setSeconds] = useState(0)

    const mediaStream = useRef(null)
    const mediaRecorder = useRef(null)
    const chunks = useRef([])

    const startRecording = async() => {

        setIsRecording(true)

        try{
            setSeconds(0)
            const stream = await navigator.mediaDevices.getUserMedia({audio: true})
            mediaStream.current = stream
            mediaRecorder.current = new MediaRecorder(stream)
            mediaRecorder.current.ondataavailable = (e) => {
                if (e.data.size > 0){
                    chunks.current.push(e.data)
                }
            }
            const timer = setInterval(() => {
                setSeconds(prev => prev + 1)
            }, 1000)

            mediaRecorder.current.onstop = () => {
                const recordedBlob = new Blob(chunks.current,{type: 'audio/webm'})
                const url = URL.createObjectURL(recordedBlob)
                
                setRecordedURL(url)
                chunks.current = []
                clearInterval(timer)

                const title = `voice-${Date.now()}.webm`;

                // convert to base64
                const reader = new FileReader();
                reader.onloadend = () => {
                    const base64String = reader.result.split(',')[1];

                    const audioData = {
                        capsule_id: capsule.id,
                        title: title,
                        type: "audio",
                        string_base64: base64String,
                    };

                    setMedia(audioData);
                    
                };

            reader.readAsDataURL(recordedBlob);

            }

            mediaRecorder.current.start()

        }catch(error){
            console.log(error);
        }


    }

    const stopRecording = () => {
        setIsRecording(false)
        if(mediaRecorder.current){
            mediaRecorder.current.stop()
            mediaStream.current.getTracks().forEach(track => track.stop())
        }
    }

    const formatTime = (totalSeconds) => {
        const hours = Math.floor(totalSeconds / 3600)
        const minutes = Math.floor((totalSeconds % 3600)/60)
        const secs = totalSeconds % 60

        return `${String(hours).padStart(2, "0")}:${String(minutes).padStart(2,"0")}:${String(secs).padStart(2,"0")}`
    }

    const handleMediaSubmit = async (e) => {
        e.preventDefault();

        if (!media) {
            console.log("No media uploaded.");
            return;
        }
        console.log("Uploading audio: ", media);
        await MediaController.createMedia(token, media);
    };

  return (

    <div className='audio-container'>

        <h1 className=''>
            Recorder
        </h1>

        <h2 className=''>
            {formatTime(seconds)}
        </h2>

        {isRecording ? 
            <button onClick={stopRecording} className=''>Stop Record</button>
            :
            <button onClick={startRecording} className=''>Start Record</button>
        }

        <button onClick={handleMediaSubmit}>Submit</button>

        {recordedURL && <audio controls src={recordedURL} />}

    </div>

  )
}