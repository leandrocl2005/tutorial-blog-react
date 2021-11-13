import {Link} from 'react-router-dom';
import { tutoriais } from '../../tutoriais';
import YouTube from 'react-youtube';

function TutorialDetail(props) {

  const tutorial = tutoriais[2];

  const opts = {
    height: '390',
    maxWidth: '640',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };

  return (
    <>
    <section id="breadcrumbs" className="breadcrumbs">
      <div className="container">

        <ol>
          <li><Link to="/">Home</Link></li>
          <li>{tutorial.title}</li>
        </ol>
        <h2>{tutorial.title}</h2>

      </div>
    </section>

    <section id="portfolio-details" className="portfolio-details">
      <div className="container">

        <div className="row gy-4">

          <div className="col-lg-8">
          <YouTube
            videoId={tutorial.youtubeId}                  // defaults -> null
            //id={string}                       // defaults -> null
            //className={string}                // defaults -> null
            //containerClassName={string}       // defaults -> ''
            opts={opts}                        // defaults -> {}
            //onReady={func}                    // defaults -> noop
            //onPlay={func}                     // defaults -> noop
            //onPause={func}                    // defaults -> noop
            //onEnd={func}                      // defaults -> noop
            //onError={func}                    // defaults -> noop
            //onStateChange={func}              // defaults -> noop
            //onPlaybackRateChange={func}       // defaults -> noop
            //onPlaybackQualityChange={func}    // defaults -> noop
          />
            
          </div>

          <div className="col-lg-4">
            <div className="portfolio-info">
              <h3>Informações do tutorial</h3>
              <ul>
                <li><strong>Categoria</strong>: {tutorial.tag}</li>
                <li><strong>Professor</strong>: {tutorial.professor}</li>
                <li><strong>Data lançamento</strong>: {tutorial.date}</li>
              </ul>
            </div>
            <div className="portfolio-description">
              <h3>Descrição</h3>
              <p>{tutorial.description}</p>
            </div>
          </div>

        </div>

      </div>
    </section>
    </>
  )
}

export default TutorialDetail;