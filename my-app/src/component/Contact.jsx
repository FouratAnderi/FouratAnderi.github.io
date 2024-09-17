import { FaGithub, FaLinkedin } from 'react-icons/fa';



export const Contact = () => {
    return (
        <div style={{display:'flex',justifyContent:'center',alignItems:'center',height:'100vh',alignContent:'center'}}>
         {/* <h1 style={{fontFamily:'Noto Sans JP',fontSize:'50px',color:'white'}}>Contact Me</h1> */}
        <div style={{display:'flex',justifyContent:'center',alignItems:'center',height:'100vh'}}>
           
            <div>
            <ul style={{fontFamily:'Noto Sans JP',fontSize:'50px',color:'white'}}>
                    <p>
                        Email: fouratanderi98@gmail.com
                    </p>
                </ul>
                <div style={{display:'flex',alignItems:'center',flexDirection:'row',justifyContent:'center'}}>
                <ul style={{fontFamily:'Noto Sans JP',fontSize:'50px',color:'white'}}>
                    <a href=" FouratAnderi" target="_blank" rel="noopener noreferrer">     
                        <FaGithub size={50} color="white" />
                    </a>
                </ul>
                <ul style={{fontFamily:'Noto Sans JP',fontSize:'50px'}}>
                    <a href=" https://www.linkedin.com/in/fourat-anderi/" target="_blank" rel="noopener noreferrer">
                        <FaLinkedin size={50} color="white" />
                    </a>
                </ul>
                </div>
                

            </div>
        </div>
        </div>
    )
}