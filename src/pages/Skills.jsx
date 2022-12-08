import { AiOutlineHtml5 } from "react-icons/ai";
import { DiCss3 } from "react-icons/di";
import { TbBrandJavascript } from "react-icons/tb";
import { Link } from 'react-router-dom'
import { SiMongodb } from "react-icons/si";
import { FaBootstrap } from 'react-icons/fa';
import { FaReact } from 'react-icons/fa';
import { FaNodeJs } from 'react-icons/fa';
import { TbBrandTailwind } from 'react-icons/tb';
import { BsGithub } from 'react-icons/bs';
import { DiGit } from 'react-icons/di';
import { GiDaisy } from 'react-icons/gi';
import { SiReactrouter } from 'react-icons/si';


function Skills() {
  return (
    <div className='px-2 mx-2'>
      <div className="overflow-x-auto w-full pb-12">
        <table className="table w-full shadow-lg">
          {/* head */}
          <thead>
            <tr>
              <th className='text-xl'></th>
              <th className='text-xl'>Skill</th>
              <th className='text-xl'>Rating</th>
              <th className='text-xl'></th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            <tr>
              <th>
                <AiOutlineHtml5 className="text-3xl"/>
              </th>
              <th className="text-2xl">HTML5</th>
              <th className='text-2xl'>   <div className="rating">
  <input type="radio" name="rating-2" className="mask mask-star-2" />
  <input type="radio" name="rating-2" className="mask mask-star-2 " />
  <input type="radio" name="rating-2" className="mask mask-star-2 " />
  <input type="radio" name="rating-2" className="mask mask-star-2 " />
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-violet-700" checked/>
</div></th>
            </tr>
            {/* row 2 */}
            <tr>
              <th>
                <DiCss3  className="text-3xl"/>
              </th>
              <th className="text-2xl">CSS3</th>
              <th className='text-2xl'>  <div className="rating">
  <input type="radio" name="rating-2" className="mask mask-star-2 " />
  <input type="radio" name="rating-2" className="mask mask-star-2 " />
  <input type="radio" name="rating-2" className="mask mask-star-2 " />
  <input type="radio" name="rating-2" className="mask mask-star-2 " />
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-violet-700" checked/>
</div>
</th>
            </tr>
                  {/* row 3 */}
                  <tr>
              <th>
                <TbBrandJavascript className="text-3xl"/>
              </th>
              <th className="text-2xl">JavaScript</th>
              <th className='text-2xl'>
               <div className="rating">
    <input type="radio" name="rating-2" className="mask mask-star-2"/>
  <input type="radio" name="rating-2" className="mask mask-star-2"/>
  <input type="radio" name="rating-2" className="mask mask-star-2"/>
    <input type="radio" name="rating-2" className="mask mask-star-2"/>
    <input type="radio" name="rating-2" className="mask mask-star-2 bg-violet-700" checked/>
  </div>
</th>
            </tr>
            {/* row 4 */}
            <tr>
              <th>
                <FaBootstrap className="text-3xl"/>
              </th>
              <th className="text-2xl">BootStrap</th>
              <th className='text-2xl'>
               <div className="rating">
    <input type="radio" name="rating-2" className="mask mask-star-2 " />
  <input type="radio" name="rating-2" className="mask mask-star-2 " />
  <input type="radio" name="rating-2" className="mask mask-star-2 " />
    <input type="radio" name="rating-2" className="mask mask-star-2 bg-violet-700" checked/>
  </div>
</th>
            </tr>
            {/* row  5*/}
            <tr>
              <th>
                <FaReact className="text-3xl"/>
              </th>
              <th className="text-2xl">ReactJS</th>
              <th className='text-2xl'>
               <div className="rating">
    <input type="radio" name="rating-2" className="mask mask-star-2 " />
  <input type="radio" name="rating-2" className="mask mask-star-2 " />
  <input type="radio" name="rating-2" className="mask mask-star-2 " />
    <input type="radio" name="rating-2" className="mask mask-star-2 " />
    <input type="radio" name="rating-2" className="mask mask-star-2 bg-violet-700" checked/>
  </div>
</th>
            </tr>
                        {/* row  6*/}
                        <tr>
              <th>
                <FaNodeJs className="text-3xl"/>
              </th>
              <th className="text-2xl">NodeJS</th>
              <th className='text-2xl'>
               <div className="rating">
    <input type="radio" name="rating-2" className="mask mask-star-2 " />
  <input type="radio" name="rating-2" className="mask mask-star-2 " />
  <input type="radio" name="rating-2" className="mask mask-star-2 " />
    <input type="radio" name="rating-2" className="mask mask-star-2 " />
    <input type="radio" name="rating-2" className="mask mask-star-2 bg-violet-700" checked/>
  </div>
</th>
            </tr>
                        {/* row  7*/}
                        <tr>
              <th>
                <TbBrandTailwind className="text-3xl"/>
              </th>
              <th className="text-2xl">TailwindCSS</th>
              <th className='text-2xl'>
               <div className="rating">
    <input type="radio" name="rating-2" className="mask mask-star-2 " />
  <input type="radio" name="rating-2" className="mask mask-star-2 " />
  <input type="radio" name="rating-2" className="mask mask-star-2 " />
    <input type="radio" name="rating-2" className="mask mask-star-2 " />
    <input type="radio" name="rating-2" className="mask mask-star-2 bg-violet-700" checked/>
  </div>
</th>
            </tr>
                        {/* row  8*/}
                        <tr>
              <th>
                <SiMongodb className="text-3xl"/>
              </th>
              <th className="text-2xl">MongoDB</th>
              <th className='text-2xl'>
               <div className="rating">
    <input type="radio" name="rating-2" className="mask mask-star-2 " />
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-violet-700" checked/>
  </div>
</th>
            </tr>
                        {/* row  9
                        <tr>
              <th>
                <TbBrandJavascript className="text-3xl"/>
              </th>
              <th className="text-2xl">Mongoose</th>
              <th className='text-2xl'>
               <div className="rating">
    <input type="radio" name="rating-2" className="mask mask-star-2 " />
  <input type="radio" name="rating-2" className="mask mask-star-2 " />
  <input type="radio" name="rating-2" className="mask mask-star-2 " />
    <input type="radio" name="rating-2" className="mask mask-star-2 " />
    <input type="radio" name="rating-2" className="mask mask-star-2 " />
  </div>
</th>
            </tr> */}
                        {/* row  10*/}
                        <tr>
              <th>
                <DiGit className="text-3xl"/>
              </th>
              <th className="text-2xl">Git</th>
              <th className='text-2xl'>
               <div className="rating">
    <input type="radio" name="rating-2" className="mask mask-star-2 " />
  <input type="radio" name="rating-2" className="mask mask-star-2 " />
  <input type="radio" name="rating-2" className="mask mask-star-2 " />
    <input type="radio" name="rating-2" className="mask mask-star-2 " />
    <input type="radio" name="rating-2" className="mask mask-star-2 bg-violet-700" checked/>
  </div>
</th>
            </tr>
                        {/* row  11*/}
                        <tr>
              <th>
                <BsGithub className="text-3xl"/>
              </th>
              <th className="text-2xl">GitHub</th>
              <th className='text-2xl'>
               <div className="rating">
    <input type="radio" name="rating-2" className="mask mask-star-2 " />
  <input type="radio" name="rating-2" className="mask mask-star-2 " />
  <input type="radio" name="rating-2" className="mask mask-star-2 " />
    <input type="radio" name="rating-2" className="mask mask-star-2 bg-violet-700" checked/>
  </div>
</th>
            </tr>
                        {/* row  12*/}
                        <tr>
              <th>
                <GiDaisy className="text-3xl"/>
              </th>
              <th className="text-2xl">DaisyUi</th>
              <th className='text-2xl'>
               <div className="rating">
    <input type="radio" name="rating-2" className="mask mask-star-2 " />
  <input type="radio" name="rating-2" className="mask mask-star-2 " />
  <input type="radio" name="rating-2" className="mask mask-star-2 " />
    <input type="radio" name="rating-2" className="mask mask-star-2 " />
    <input type="radio" name="rating-2" className="mask mask-star-2 bg-violet-700" checked/>
  </div>
</th>
            </tr>
                        {/* row  13*/}
                        <tr>
              <th>
                <SiReactrouter className="text-3xl"/>
              </th>
              <th className="text-2xl">React-Router</th>
              <th className='text-2xl'>
               <div className="rating">
    <input type="radio" name="rating-2" className="mask mask-star-2 " />
  <input type="radio" name="rating-2" className="mask mask-star-2 " />
  <input type="radio" name="rating-2" className="mask mask-star-2 " />
    <input type="radio" name="rating-2" className="mask mask-star-2 bg-violet-700" checked/>
  </div>
</th>
            </tr>

            
          </tbody>
          {/* Foot */}
          <tfoot>
            <tr>
              <th className='text-xl'></th>
              <th className='text-xl'>Skill</th>
              <th className='text-xl'>Rating</th>
              <th className='text-xl'></th>
            </tr>
          </tfoot>
        </table>
      </div>
      <div className="flex-1 px-2 mx-2">
      <div className="flex justify-center px-2">
      <Link to='/Projects' className='btn btn-neutral btn-sm rounded-btn shadow-lg'>
              Projects
            </Link>
            </div>
      </div>
    </div>
  )
}

export default Skills