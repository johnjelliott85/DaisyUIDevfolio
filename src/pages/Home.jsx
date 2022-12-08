import { Link } from 'react-router-dom'

function Home() {
  return (
    <div>
          <div className="hero min-h-screen shadow-xl" style={{ backgroundImage: `url("https://marketlytics.com.au/wp-content/uploads/2021/08/shutterstock_704079820-scaled.jpg")` }}>
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-center">
    <div className="max-w-md">
      <h1 className="mb-5 text-5xl font-bold-2xl text-white">Hello there,</h1>
      <p className="mb-5 font-bold text-white">My name is John. I am a developer. Welcome to my Devfolio.</p>
      <Link to='/about' className='btn gap-2 text-white'>
      About Me
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>
      </Link>
    </div>
  </div>
</div>
    </div>
  )
}

export default Home
