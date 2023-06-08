import react from 'react'
import '../css/learn.css';



export default function Learn() {
  return (
    <div>
      <div>
        <h1>SMA Stratergy</h1>
      </div>
      <div className="videos">
        <button onClick={()=>window.location = '/sma_intro'} className='intro'> Intro to SMA Stratergy</button>
        <button onClick={()=>window.location = '/sma_learn'} className='learner'> Learn SMA Stratergy</button>
        <iframe width="310" height="200" src="https://www.youtube.com/embed/r3Ulu0jZCJI" title="YouTube video player" allowFullScreen></iframe>
        <button onClick={()=>window.location = '/sma_quiz'} className='quizbutt'> Take A Quiz</button>
      </div>

      <div>
      <h1>Stratergy 2</h1>
      </div>
      <div className="videos">
      <button onClick={()=>window.location = '/sma_intro'} className='intro'> Intro to SMA Stratergy</button>
      <button onClick={()=>window.location = '/sma_learn'} className='learner'> Learn SMA Stratergy</button>
      <iframe width="310" height="200" src="https://www.youtube.com/embed/r3Ulu0jZCJI" title="YouTube video player" allowFullScreen></iframe>
      <button onClick={()=>window.location = '/sma_quiz'} className='quizbutt'> Take A Quiz</button>
    </div>

      <div>
      <h1>Stratergy 3</h1>
    </div>
    <div className="videos">
    <button onClick={()=>window.location = '/sma_intro'} className='intro'> Intro to SMA Stratergy</button>
    <button onClick={()=>window.location = '/sma_learn'} className='learner'> Learn SMA Stratergy</button>
    <iframe width="310" height="200" src="https://www.youtube.com/embed/r3Ulu0jZCJI" title="YouTube video player" allowFullScreen></iframe>
    <button onClick={()=>window.location = '/sma_quiz'} className='quizbutt'> Take A Quiz</button>
  </div>

    </div>

  )
}