import "./App.css";
import logo from "./logo.svg";
function App() {
  return (
    <div className='App'>
      <div id='top_header'>
        <div id='logo'></div>
      </div>
      <div id='main_video'>
        <div className='imageSub'>
          <div className='blackbg' id='playerstatebg'>
            IDLE
          </div>
          <div className='label' id='playerstate'>
            IDLE
          </div>
          <img src={logo} id='video_image' alt=""/>
          <div id='video_image_overlay'></div>
          <video id='video_element'></video>
        </div>

        <div id="media_control">
          <div id="play"></div>
          <div id="pause"></div>
          <div id="progress_bg"></div>
          <div id="progress"></div>
          <div id="progress_indicator"></div>
          <div id="fullscreen_expand"></div>
          <div id="fullscreen_collapse"></div>
          <google-cast-launcher id="castbutton"></google-cast-launcher>
          <div id="audio_bg"></div>
          <div id="audio_bg_track"></div>
          <div id="audio_indicator"></div>
          <div id="audio_bg_level"></div>
          <div id="audio_on"></div>
          <div id="audio_off"></div>
          <div id="duration">00:00:00</div>
        </div>
      </div>
      <div id='media_info'>
        <div id='media_title'></div>
        <div id='media_subtitle'></div>
        <div id='media_desc'></div>
      </div>

      <div id='carousel'></div>

      <div id='footer'>
        <div id='copyright'>Copyright 2019 Google LLC. All Rights reserved</div>
        <div id='footer_content'>
          Visit the{" "}
          <a
            id='footer_content_link'
            href='https://developers.google.com/cast/'
          >
            Google Cast Developer Site
          </a>
        </div>
        <div id='footer_language'>Language English</div>
      </div>
    </div>
  );
}

export default App;
