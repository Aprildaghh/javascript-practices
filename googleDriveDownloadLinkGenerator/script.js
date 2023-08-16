const gLink = document.getElementById("glink");
const btn = document.getElementById("btn");
const downloadLink = document.getElementById("download-link");

btn.addEventListener("click", generateLink);

function generateLink(e) {

    e.preventDefault();

    const gLinkValue = gLink.value;
    const confirmLink = gLink.value.includes(
        "https://drive.google.com/file/d/");

    if(!confirmLink) {
        alert("Please enter a Google Drive File Link!");
        return;
    }

    const getDownloadLink = gLink.value
        .replace("https://drive.google.com/file/d/"
            , "https://drive.google.com/uc?export=download&id=")
        .replace("/view?usp=sharing", "");

    downloadLink.value = getDownloadLink;

    function copyText(target) {
        if(target.value == "") {
            alert("Please generate a download link!");
        }
        else {
            navigator.clipboard.writeText(target.value)
                .then(()=>{
                alert("Link has been copied");
                });
        }
    }

    const copy = document.querySelector(".copy");
    copy.addEventListener("click", () => {
        return copyText(downloadLink);
    })

    // embed audio
    const audio = `
        <audio width="300" height="32" controls= "controls"
        src="${getDownloadLink}" type="audio/mp3"></audio>
    `

    const embedAudio = document.getElementById("embed-audio");
    embedAudio.value = audio;

    const copyAudio = document.querySelector(".copy-audio");

    copyAudio.addEventListener("click", () => {
        return copyText(embedAudio);
    })

    // embed video
    const getVideoLink = gLink.value
        .replace("/view?usp=sharing", "");


    const video = `<iframe src="${getVideoLink}/preview" width="560" height="315"></iframe>`

    const embedVideo = document.querySelector(".embed-video");
    embedVideo.value = video;

    const copyVideo = document.querySelector(".copy-video");

    copyVideo.addEventListener("click", () => {
        return copyText(embedVideo);
    })


}

