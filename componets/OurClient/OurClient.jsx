import './OurClient.css'
import c1 from '../../src/assets/BrandLogo/being-social-mumbai.png'
import c2 from '../../src/assets/BrandLogo/best-skincare-clinic-tune-aesthetics.webp'
import c3 from '../../src/assets/BrandLogo/bs-logo-2x.webp'
import c4 from '../../src/assets/BrandLogo/CandereLogoWhite.png'
import c5 from '../../src/assets/BrandLogo/cropped-NGJ-LOGO-FINAL_png.png'
import c6 from '../../src/assets/BrandLogo/goat-robotics-favicon.png'
import c7 from '../../src/assets/BrandLogo/golden-gateway.png'
import c8 from '../../src/assets/BrandLogo/light-bg-logo-j5PEJEGK.png'
import c9 from '../../src/assets/BrandLogo/logo-mayon.webp'
import c10 from '../../src/assets/BrandLogo/lyris-logo.png'
import c11 from '../../src/assets/BrandLogo/nobuy_logo.png'
import c12 from '../../src/assets/BrandLogo/sushruta_logo.webp'
import c13 from '../../src/assets/BrandLogo/trigun-studio-interior.webp'
const images = [
    c1,c2,c3,c4,c5,c6,c7,c8,c9,c10,c11,c12,c13
]
const chunkArray = (arr, size) =>
  Array.from({ length: Math.ceil(arr.length / size) }, (_, i) =>
    arr.slice(i * size, i * size + size)
  );
function OurClient() {
  const imageRows = chunkArray(images, 5);
  return (
    <div className='our-clinet-container'>
      <h3>Our Trusted Clients</h3>
      {imageRows.map((row, rowIndex) => (
        <div
          key={rowIndex}
          className={`our-client-grid-row ${
            row.length < 5 ? 'center-row' : ''
          }`}
        >
          {row.map((data, index) => {
            const globalIndex = rowIndex * 5 + index;
            const specialClass =
              globalIndex === 8
                ? 'color-modified-img-c9'
                : globalIndex === 12
                ? 'color-modified-img-c13'
                : '';

            return (
              <div key={index} className="client-data-grid">
                <img
                  src={data}
                  className={`client-img ${specialClass}`}
                  alt={`client-${globalIndex + 1}`}
                />
              </div>
            );
          })}
        </div>
      ))}
    </div>
  )
}

export default OurClient
