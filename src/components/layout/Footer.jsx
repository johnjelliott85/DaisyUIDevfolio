import { GiRose } from "react-icons/gi";

function Footer() {
    const footerYear = new Date().getFullYear()
  
    return (
      <footer className='footer p-10 shadow-2xl bg-neutral text-neutral-content footer-center'>
        <div>
        <GiRose className='inline pr-2 text-7xl' />
          <p>Copyright &copy; {footerYear} All rights reserved</p>
        </div>
      </footer>
    )
  }
  
  export default Footer