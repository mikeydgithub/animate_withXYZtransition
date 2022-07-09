export default function Body() {
    return (
        <>
            <div
                className="page-features"
                xyz="fade flip-down stagger duration-10 delay-2 ease-out-back"
            >
                <div className="feature-item xyz-nested"></div>
                <div className="feature-item xyz-nested"></div>
                <div className="feature-item xyz-nested"></div>
            </div>

            <div
                className="page-section"
                xyz="fade small stagger delay-4 ease-in-out"
            >
                <div className="section-left" xyz="fade left stagger">
                    <div className="feature-item xyz-nested"></div>
                    <div className="feature-item xyz-nested"></div>
                    <div className="feature-item xyz-nested"></div>
                </div>

                <div className="section-right xyz-nested" xyz="fade big-delay-10"></div>

            </div>
        </>
    );
}

// style
// flip-down: animates the element downwards along the x-axis
// delay: delays the start of the animation for sometime. delay-2 delays by 0.2 seconds
// ease-in-out: changes the speed curve of the animation
// big: like the small utilit, the big utility scales the element along all 3 axes, but it scales the element up instead of down
// left: uses translateX to shift the element to the left, then animaite it to its usual position