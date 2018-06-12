let audio = (function () {

  class Audio extends BaseObjectDecorator {
    constructor(baseObject, fileList){
      super(baseObject);
      this.fileList = fileList;
      this.soundList = [];
      this.createAudios(fileList);
    }
  }

  createAudios(fileList){
    for(let i in fileList){
      let sound = document.createElement("audio");
      sound.src = fileList[i];
      sound.setAttribute("preload", "auto");
      sound.setAttribute("control", "none");
      sound.style.display = "none";
      document.body.appendChild(sound);
      this.soundList.push(sound);
    }
  }

  play(soundName){
    for(let i in this.soundList){
      if(this.soundList[i].attributes.src.nodeValue === soundName){
        this.soundList[i].play();
      }
    }
  }

  pause(soundName){
    for(let i in this.soundList){
      if(this.soundList[i].attributes.src.nodeValue === soundName){
        this.soundList[i].pause();
      }
    }
  }

  return {
    Audio
  }

}());
