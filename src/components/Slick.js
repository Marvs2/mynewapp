import Slider from "react-slick";
import "./slick-carousel/slick/slick.css";
import "./slick-carousel/slick/slick.theme.css";

export default function Slick() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1
    };
    return (
        <div className='w-3/4 m-auto'>
            <div className='mt-20'>
                <Slider {...settings}>
                {slickdt.map((sdt) => (
                    <div className="bg-white h-[450px] text-black rounded-x1">
                        <div className="h-56 rounded-t-xl bg-indigo-500 flex justify-center items-center">
                            <h3>{sdt.name}</h3>
                        </div>
                        <div className="flex flex-col justify-center items-center gap-4 p-4">
                            <p className="text-xl font-semibold">{sdt.company}</p>
                            <p>{sdt.quote}</p>
                            <button className="bg-indigo-500 text-white text-lg px-6 py-1 rounded-xl">Read More</button>
                        </div>
                    </div>
                ))}
                </Slider>
            </div>
        </div>
    );
}


const slickdt = [
    // Add your testimonials data here, for example:
    {
      name: "Marvin Villanueva",
      company: "Bachelor of Science in Information Technology",
      quote: "One of the student to enjoy company with! Marvin R. Villanueva, born on August 2001, in Quezon City, is currently pursuing a Bachelor of Science in Information Technology at the Polytechnic University of the Philippines, Quezon City Campus. Marvin exhibits strong technical skills in the development of Student Academic Services Systems. As a dedicated researcher in the field of higher education, he has consistently focused on enhancing student support systems to foster holistic student development and success. His work is driven by a passion for understanding the complexities of student needs and the best practices for addressing them through strategic, integrated, and collaborative approaches.     Marvin has delved into the historical evolution of student services and explored innovative trends such as technology integration and data-driven decision-making. His goal is to contribute valuable insights and practical solutions that can help institutions create supportive learning environments, ultimately improving student well-being, retention, and graduation rates. Through his research, Marvin strives to make a meaningful impact on the academic and personal lives of students, ensuring they have the resources and support necessary to thrive in their educational journeys. ",
      image: require("./images/img-HqFEBR0j8DG0dKKGnLCHD.jpeg"),
    },
    {
      name: "Marvin Villanueva",
      company: "Bachelor of Science in Information Technology",
      quote: "One of the developers to work with! Marvin R. Villanueva, born in August 2001 in Quezon City, has completed his Bachelor of Science in Information Technology at the Polytechnic University of the Philippines, Quezon City Campus. Marvin demonstrates exceptional technical skills in developing Student Academic Services Systems. As a committed researcher in higher education, he has focused on enhancing student support systems to promote holistic development and success. His work is fueled by a passion for understanding student needs and implementing best practices through strategic, integrated, and collaborative approaches.  Marvin has explored the historical evolution of student services and examined innovative trends like technology integration and data-driven decision-making. His aim is to offer valuable insights and practical solutions to help institutions create supportive learning environments, thereby improving student well-being, retention, and graduation rates. Through his research, Marvin is dedicated to making a significant impact on students' academic and personal lives, ensuring they receive the resources and support necessary for their educational journeys.",
      image: require("./images/img-B1TMggx8xiwiddhdbrOKa.jpeg"),
    },
     {
      name: "Marvin Villanueva",
      company: "Bachelor of Science in Information Technology",
      quote: "One of the developers to work with! Marvin R. Villanueva, born in August 2001 in Quezon City, has completed his Bachelor of Science in Information Technology at the Polytechnic University of the Philippines, Quezon City Campus. Marvin demonstrates exceptional technical skills in developing Student Academic Services Systems. As a committed researcher in higher education, he has focused on enhancing student support systems to promote holistic development and success. His work is fueled by a passion for understanding student needs and implementing best practices through strategic, integrated, and collaborative approaches.  Marvin has explored the historical evolution of student services and examined innovative trends like technology integration and data-driven decision-making. His aim is to offer valuable insights and practical solutions to help institutions create supportive learning environments, thereby improving student well-being, retention, and graduation rates. Through his research, Marvin is dedicated to making a significant impact on students' academic and personal lives, ensuring they receive the resources and support necessary for their educational journeys.",
      image: require("./images/img-kC9muqKoC7IBabFe2dxDy.jpeg"),
    },
  ];