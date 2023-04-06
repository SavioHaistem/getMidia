import './banner.css'

function Banner({text}) {
  return (
    <div className="banner">
      <p className="bannerText"> {text} </p>
    </div>
  );
}

export default Banner;