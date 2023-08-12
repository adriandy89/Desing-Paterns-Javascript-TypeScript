class MediaPlayer {
  constructor() {
    this.state = new StopState();
  }

  changeState(state) {
    this.state = state;
  }

  play() {
    this.state.play();
  }

  pause() {
    this.state.pause();
  }

  stop() {
    this.state.stop();
  }
}

class MediaPlayerState {
  play() {
    throw new Error("method not implemented");
  }
  pause() {
    throw new Error("method not implemented");
  }
  stop() {
    throw new Error("method not implemented");
  }
}

class PlayState extends MediaPlayerState {
  play() {
    console.log("play already");
  }
  pause() {
    console.log("pause");
    mediaPlayer.changeState(new PauseState());
  }
  stop() {
    console.log("stop");
    mediaPlayer.changeState(new StopState());
  }
}

class PauseState extends MediaPlayerState {
  play() {
    console.log("play");
    mediaPlayer.changeState(new PlayState());
  }
  pause() {
    console.log("pause already");
  }
  stop() {
    console.log("stop");
    mediaPlayer.changeState(new StopState());
  }
}

class StopState extends MediaPlayerState {
  play() {
    console.log("play");
    mediaPlayer.changeState(new PlayState());
  }
  pause() {
    console.log("cant pause, its stop!");    
  }
  stop() {
    console.log("stop already");    
  }
}

const mediaPlayer = new MediaPlayer();

mediaPlayer.play();
mediaPlayer.play();
mediaPlayer.pause();
mediaPlayer.play();
mediaPlayer.stop();
mediaPlayer.pause();