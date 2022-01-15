import "./Footer.scss";

export default function Footer() {
  return (
    <div className="main-footer">
      <div className="container">
        <div className="row">
          {/* Column1 */}
          <div className="col">
            <h4>SPOT</h4>
            <ul className="list-unstyled">
    <li>About Us</li>
    <li>Resources</li>
    <li></li>
            </ul>
          </div>
          <hr />
          <div className="row">
            <p className="col-sm">
              &copy; {new Date().getFullYear} Desiree Mendes and Kayla Johnston | All rights Reserved
            </p>
          </div>
        </div>
       
      </div>
    </div>
  )
}