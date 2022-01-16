import "./Footer.scss";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <div className="main-footer">
      <div className="container">
        <div className="row">
          {/* Column1 */}
          <div className="col">
            <h4>SPOT</h4>
            <ul className="list-unstyled">
    <li>
      <a  class="nav-link" href="/About">About Us</a>
      </li>
    <li>
    <a  class="nav-link" href="/Resources">Resources</a>
      </li>
    <li></li>
            </ul>
          </div>
          <hr />
          <div className="row-copyright">
            <p className="col-sm">
              &copy; {currentYear} Desiree Mendes and Kayla Johnston | All rights Reserved
            </p>
          </div>
        </div>
       
      </div>
    </div>
  )
}