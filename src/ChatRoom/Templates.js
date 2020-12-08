import * as Style from './Style';


export const MESSAGE_TEMPLATES = {
    image: (data) => (<Style.ImageTemplate src={data.src}></Style.ImageTemplate>),
    video: (data) => (<video width="280" height="180" controls>
        <source src= {data.src} type="video/mp4" />
        <source src= {data.src} type="video/ogg" />
            Your browser does not support the video tag.
    </video>),
    audio: (data) => (<audio controls>
        <source src= {data.src}type="audio/ogg" />
        <source src= {data.src} type="audio/mpeg" />
        Your browser does not support the audio tag.
      </audio>)
};
export const SUPPORTED_ATTACHMENTS = ["image","video", "audio"];