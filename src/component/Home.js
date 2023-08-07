import TypewriterEffect from './TypewriterEffect';
import { Link  } from "react-router-dom";

const Home = () => {
  return (
    
    <div className='myImage'>
      <div className='text-center'>
      <h1 className=' pt-5 shad1'><b> NoteKaro  </b></h1>
      <h2 className='ml-5  shad1'><b> Note Your Thought In Cloud</b></h2>
 
      <div className='p-5'>
      <p className="text-end mt-2 text1 rightsideanimation">NoteKaro is a React Website</p>
      <p className='text-cente mt-2 text1 leftsideanimation'>Where we can Add Note in Cloud</p>
      <p className="text-end mt-2 text1 rightsideanimation">Edit a particular Note</p>
      <p className='text-center mt-2 text1 leftsideanimation'>Delete  a particular Note</p>
      </div>
      </div>

      <div className=" container"> <TypewriterEffect textToType="Login or Register in NoteKaro" typingSpeed="200" />
      
      <form className='ms-auto text-center'>
            <Link to="/login" className="btn btn-primary me-4 cred">
              Login
            </Link>
            <Link to="/signup" className="btn btn-primary me-1 cred">
              Sign Up
            </Link>
          </form>
      
      </div>
    </div>
    
  )
}

export default Home
