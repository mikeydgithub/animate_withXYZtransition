export default function Header() {
    return (
      <div
        className="page-hero"
        xyz="fade small stagger ease-out-back duration-30"
      >
        <div className="hero-logo xyz-nested"></div>
        <p className="hero-text xyz-nested">
          Curabitur blandit tempus porttitor. Morbi leo risus.
        </p>
      </div>
    );
} 

// styles
// fade: animates an emelement's opacity to fade it out of visibility
// small: scales an element down along the x,y, and z-axis
// stagger: adds a delay to each child element so that individual animations execute in sequence instead of at the same time
// ease-out-back: changes the speed curve of the animation and adds a slight overshoot to its end
// duration: sets the length of the animation. 