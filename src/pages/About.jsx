import { Link } from "react-router-dom"


function About() {
  return (
<div className="card card-side bg-base-100 shadow-xl">
  <figure><img src="https://th.bing.com/th/id/R.e15d8c5d355a41ba4e40f8619b581ea4?rik=%2bA1uCafVjghZ0g&riu=http%3a%2f%2forig12.deviantart.net%2faf27%2ff%2f2015%2f143%2fe%2fd%2fpersonal_avatar_by_thewhitebolt-d8uec31.jpg&ehk=1G12JcWZqByNjjJy5Nw9yQyYVCLi9HFnclGuaEoqNk4%3d&risl=&pid=ImgRaw&r=0" alt="Self-Portrait"/></figure>
  <div className="card-body">
    <h2 className="card-title">Im John,</h2>
    <p>I am a Full-Stack Web Developer. I have knowledge of some back-end technology like mongo-db etc... and I have experience with HTML5, CSS3, Vanilla JS, ExspressJs, NodeJs, ReactJs, many different libraries and frameworks. </p>
    <div className="card-actions justify-end">
      <Link to='/skills' className="btn btn-primary">Skills</Link>
    </div>
  </div>
</div>
  )
}

export default About
