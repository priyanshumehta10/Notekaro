import React from 'react';
import myphoto from '../component/Myphoto/myphoto.png';

const About = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-6">
          <div className="text-center mb-4 img border border-secondary border-3 rounded-3">
            <img
              src={myphoto}
              alt="MyPhoto"
              className=""
              style={{ maxWidth: '60%', height: 'auto',filter: 'drop-shadow(20px 5px 10px gray)'}}
            />
          </div>
          <h1 className="text-center  mb-5">Priyanshu Mehta</h1>
        </div>
        <div className="col-lg-6 mt-5 pt-3">
          <div className="text-center">
            <h1 className='img'>Who I Am?</h1>
            <p>I am a fullstack web develeper and always trying to learn something. 
               Basically i have a decent knowledge of React, Nodejs, mongodb, Express and
               strapi . You can say i am a MERN Stack develeper. I have done B.sc in computer Science and currently having M.Sc in Computer Science. I have some 
               amazing projects like e-commerce website, a Notes taking website and a news
               website. You can check them out at http://www.xyz.com
            </p>
            
          </div>
          <div className='container text-center'>
          <a href="https://www.instagram.com/priyanshu.mehta10/" target="_blank"><i className="fa-brands fa-instagram fa-shake fa-2xl"></i></a>
          <a href="" target="_blank"><i className="fa-brands fa-facebook fa-shake fa-2xl m-4"></i></a>
          <a href="https://github.com/priyanshumehta10" target="_blank"><i className="fa-brands fa-github fa-shake fa-2xl "></i></a>
          <a href="" target="_blank"><i className="fa-solid fa-envelope fa-shake fa-2xl m-4"></i></a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
