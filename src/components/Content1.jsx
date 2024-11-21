// import React from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import './Content1.css'
// function Content1() {
//   return (
//     <div className="container py-5">
//       <div className="row">
//         <div className="col-md-8 mx-auto text-center" style={{ marginTop:"10rem" }}>
//         <p className="display-4" style={{fontFamily:"sans-serif",fontSize:"45px"}}>
//   Great things can <span className="custom-happen" style={{color:"#ffb619"}}>happen</span><br />
//   Pick up your phone, start the conversation.
// </p>
//           <p className="lead" style={{fontSize: "22px",fontFamily:"sans-serif"}}>
//             We are a team of experienced and expert technocrats. We are pleased to share that we are creative innovators and technical wizards. We master designing and developing great websites, and we can help turn your dreams into reality.
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Content1;




import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Content1.css';

function Content1() {
  return (
    <div className="container py-5">
      <div className="row">
        <div className="col-md-8 mx-auto text-center" style={{ marginTop: "10rem" }}>
          <p className="display-4 custom-heading">
            Great things can <span className="custom-happen">happen</span><br />
            Pick up your phone, start the conversation.
          </p>
          <p className="lead custom-lead">
            We are a team of experienced and expert technocrats. We are pleased to share that we are creative innovators and technical wizards. We master designing and developing great websites, and we can help turn your dreams into reality.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Content1;