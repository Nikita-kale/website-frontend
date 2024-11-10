import React from 'react';
import './CSS/AboutUs.css';


const AboutUs = () => {
  return (
    
   <div className='about-us'>
    <h1>About Us</h1>
 <table className="about-us-table">
            <tbody>
                <tr>
                    <td className="table-row-label">
                        <h3 className="table-row-label-text">Company Name :</h3>
                        </td>
                    <td className="table-row-value">
                        <strong>SUVARNAYOG VADHU-VAR NONDANI KENDRA</strong>
                    </td>
                </tr>
                <tr>
                    <td className="table-row-label">
                        <h3 className="table-row-label-text">Year of Est. :</h3>
                    </td>
                    <td className="table-row-value">
                       <strong> 1990</strong>
                    </td>
                </tr>
                <tr>
                    <td className="table-row-label">
                        <h3 className="table-row-label-text">Nature Of Business :</h3>
                        
                    </td>
                    <td className="table-row-value">
                        <strong>वधु वर सुचक केंद्र</strong>
                    </td>
                </tr>
            </tbody>
        </table>
     <div className="lower-part">
     <h2>Our Specialities</h2>
     <ul className='custom-list'>
      <li>सुशिक्षित , सुज्ञ , आणि सुसंकारिक अशीच स्थळे दाखवतो.</li>
      <li>आम्ही अगदी कमीत कमी शुल्क आकारतो .</li>
      <li>विस्तृत अनुभव असलेला वरिष्ठ संबंध व्यवस्थापक तुमच्यासाठी योग्य जुळणी शोधेल.</li>
      <li>सुज्ञ आणि गोपनीय सेवा</li>
      <li>तुमची योग्य जोडी शोधण्यासाठी आम्ही सदैव तत्पर असतो .</li>
      <li>आम्ही तुमच्या अपेक्षेनुसार योग्य स्थळे सुचवतो .</li>
      <li>आम्ही तुम्हाला योग्य साथीदार शोधण्यास मदत करतो .</li>
     </ul>
     </div>
    <div className="info">
      <h2>आमच्याविषयी थोडक्यात - </h2>
      <p><strong>jeevanmeet.com</strong> समूहाचा एक भाग, महाराष्ट्रातील ऑनलाइन विवाह सेवांमध्ये आम्ही अग्रणी आहोत . आम्ही वैवाहिक  मॅचमेकिंग सेवेची पायाभरणी करण्यासाठी 15 वर्षांहून अधिक काळ कौशल्यपूर्ण काम करत आहोत आणि तुमच्यासाठी खरोखर jeevanmeet सामन्यांचा सर्वात खास डेटाबेस ऑफर करतो! </p>
      <p>jeevanmeet यशस्वी मॅचमेकिंग मॉडेल सादर करत आहे.भारतीय उच्चभ्रूंसाठी अग्रगण्य विवाह सेवा म्हणून, आम्ही ओळखलो जातो .आमच्या वेबसाईटवरील सद्श्यासाठी आम्ही आमच्या सेवा समर्पित करतो .तुमचे लग्न आमच्यामार्फत निश्चित होणार याची आम्ही खात्री देतो.</p>
      <p>आम्ही तुम्हाला परिपूर्ण जीवनसाथी शोधण्यात मदत करतो जो शब्दाच्या प्रत्येक अर्थाने सुसंस्कृतपणाशी जुळतो.</p>
      <p>तर आजच आमच्या समूहाशी जोडले जा आणि आमच्या विश्वसनीय आणि तत्पर सेवेचा लाभ घ्या .</p>
    </div>
   </div>
  );
};

export default AboutUs;