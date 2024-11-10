import React, { useRef } from 'react';
import './CSS/Product.css';
import './CSS/ProductCard.css'; 

const ProductCard = ({ title, imgSrc, buttonText }) => {
  const canvasRef = useRef(null);

  const handleDownload = () => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    const image = new Image();
    image.src = imgSrc;

    image.onload = () => {
      // Set canvas dimensions
      canvas.width = 600;
      canvas.height = 800;

      // Background color
      ctx.fillStyle = '#f1f1f1'; // Light grey background
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Draw the image in the middle with a border
      ctx.drawImage(image, 50, 300, 500, 300); // Image of the product
      ctx.strokeStyle = '#e90052'; // Border color for image
      ctx.lineWidth = 5;
      ctx.strokeRect(50, 300, 500, 300); // Border around image

      // Add constant Name, phone number, and company info
      ctx.font = 'bold 24px Arial';
      ctx.fillStyle = '#000';
      ctx.fillText('Vaishali Rakhunde', 20, 170); // Name at the top left

      ctx.font = 'bold 18px Arial';
      ctx.fillStyle = '#000';
      ctx.fillText('+91-9325323956', canvas.width - 180, 170); // Phone on the top right

      // Company name in center
      ctx.font = 'bold 25px Arial';
      ctx.fillStyle = '#333';
      ctx.textAlign = 'center';
      ctx.fillText('SUVARNAYOG VADHU-VAR NONDANI KENDRA', canvas.width / 2, 220);

      // Subtitle in Marathi with a colored background
      ctx.fillStyle = '#e90052';
      ctx.fillRect(150, 250, 300, 40); // Background for subtitle
      ctx.fillStyle = '#fff';
      ctx.font = 'bold 22px Arial';
      ctx.fillText(title, canvas.width / 2, 280); // Marathi text in the middle

      // Add constant email and website at the bottom
      ctx.fillStyle = 'brown';
      ctx.font = 'bold 20px Arial';
      ctx.textAlign = 'left';
      ctx.fillText('suvarnayog708@gmail.com', 20, canvas.height - 40);
      ctx.fillText('https://jeeavnmeet.com', canvas.width - 240, canvas.height - 40);

      // Trigger the download
      const link = document.createElement('a');
      link.href = canvas.toDataURL('image/png');
      link.download = `${title}.png`; // File name for the download
      link.click();
    };
  };

  return (
    <div className="product-card">
      <h2 className="product-title">{title}</h2>

      {/* Hidden Canvas for generating downloadable image */}
      <canvas ref={canvasRef} style={{ display: 'none' }}></canvas>

      {/* Download Button */}
      <button onClick={handleDownload} className="download-button">
        {buttonText}
      </button>

      <img src={imgSrc} alt="Product" className="product-image" />

      {/* Enquiry Button */}
      <a
        href={`https://wa.me/919325323956?text=${encodeURIComponent(`I am interested in your services related to ${title}. कृपया अधिक माहिती द्या.`)}`}
        target="_blank"
        rel="noopener noreferrer"
        className="enquiry-button"
      >
        <button>Enquiry</button>
      </a>
    </div>
  );
};

export default ProductCard;
