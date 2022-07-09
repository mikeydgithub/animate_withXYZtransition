export default function Footer() {
    return (
      <div className="page-footer" xyz="fade down ease-in-out delay-10">
        <div
          className="footer-logo xyz-nested"
          xyz="fade left ease-in-out delay-10"
        ></div>
        <div className="footer-right" xyz="fade up stagger ease-in-out delay-10">
          <div className="footer-item xyz-nested"></div>
          <div className="footer-item xyz-nested"></div>
          <div className="footer-item xyz-nested"></div>
        </div>
      </div>
    );
  }

// styles
// up: uses translatY to shift element up, then animate it to its usual position
// down: does the same thing as up, but in the opposite direction