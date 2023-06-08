import react from 'react'
import '../css/learn.css';



export default function Learn() {
  return (
    <div>
      <div>
        <p>SMA Stratergy</p>
      </div>
      <div className="videos">
        <button onClick={()=>window.location = '/sma_intro'} className='intro'> Intro to SMA Stratergy</button>
        <button onClick={()=>window.location = '/sma_intro'} className='learner'> Learn SMA Stratergy</button>
        <iframe width="310" height="200" src="https://www.youtube.com/embed/dQw4w9WgXcQ" title="YouTube video player" allowFullScreen></iframe>
        <button onClick={()=>window.location = '/sma_quiz'} className='quizbutt'> Take A Quiz</button>
      </div>

      <div>
        Strategy 2
      </div>
      <div className="videos">
        <iframe width="310" height="200" src="https://www.youtube.com/embed/dQw4w9WgXcQ" title="YouTube video player" allowFullScreen></iframe>
        <iframe width="310" height="200" src="https://www.youtube.com/embed/dQw4w9WgXcQ" title="YouTube video player" allowFullScreen></iframe>
        <iframe width="310" height="200" src="https://www.youtube.com/embed/dQw4w9WgXcQ" title="YouTube video player" allowFullScreen></iframe>
        <iframe width="310" height="200" src="https://www.youtube.com/embed/dQw4w9WgXcQ" title="YouTube video player" allowFullScreen></iframe>
        <iframe width="310" height="200" src="https://www.youtube.com/embed/dQw4w9WgXcQ" title="YouTube video player" allowFullScreen></iframe>
      </div>

      <div>
      Strategy 3
    </div>
    <div className="videos">
      <iframe width="310" height="200" src="https://www.youtube.com/embed/dQw4w9WgXcQ" title="YouTube video player" allowFullScreen></iframe>
      <iframe width="310" height="200" src="https://www.youtube.com/embed/dQw4w9WgXcQ" title="YouTube video player" allowFullScreen></iframe>
      <iframe width="310" height="200" src="https://www.youtube.com/embed/dQw4w9WgXcQ" title="YouTube video player" allowFullScreen></iframe>
      <iframe width="310" height="200" src="https://www.youtube.com/embed/dQw4w9WgXcQ" title="YouTube video player" allowFullScreen></iframe>
      <iframe width="310" height="200" src="https://www.youtube.com/embed/dQw4w9WgXcQ" title="YouTube video player" allowFullScreen></iframe>
    </div>

    </div>

  )
}