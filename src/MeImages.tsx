import Carousel from 'react-bootstrap/Carousel';
import Image from 'react-bootstrap/Image';

function MeImages() {
    return (
        <div className="me-images-container">
            <Carousel>
                <Carousel.Item interval={1000}>
                    <Image src="londondowntown.jpg"></Image>
                    <Carousel.Caption>
                    <h3>NU London Scholar</h3>
                    <p>Studied abroad for a year in London.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={500}>
                    <Image src="londoneye.jpg"></Image>
                    <Carousel.Caption>
                    <h3>Explored the global scene</h3>
                    <p>Learned about different cultures and global perspectives.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <Image src="robotics.jpg"></Image>
                    <Carousel.Caption>
                    <h3>Robotics Lead Programmer</h3>
                    <p>
                        Independently refactored code base in Java.
                    </p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
}

export default MeImages;
