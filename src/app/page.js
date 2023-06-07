import Header from "@component/components/Header";
import styles from "../app/styles/page.module.scss";
import user from "../assets/images/user.png";
import Image from "next/image";
import rectangle from "../assets/images/Rectangle.png";
import classes from "../app/styles/page.module.scss";
import team1 from "../assets/images/Rectangle 1090.png";
import team2 from "../assets/images/Real Estate Group.png";
import img3 from "../assets/images/Rectangle 1099.png";
import img4 from "../assets/images/Rectangle 1100.png";
import Footer from "@component/components/Footer";
export default function Home() {
  const slider_arr = [
    {
    id: 1,
    text: "Professionally designed-based on your input-your website features contact info. newsletter signup, and up-todate MLS listins."
    },
    {
    id: 2,
    text: "Your facebook Business poge is continually updated with new listings, monthly statistics, and sales announcements."
    },
    {
    id: 3,
    text: "Professionally designed-based on your input-your website features contact info. newsletter signup, and up-todate MLS listins."
    }
    ]

  return (
    <main className={styles.main}>
      <Header />
      <div className={classes.container}>
        <div className={classes.banner_section}>
          <div className={classes.left_part}>
            <h1>You’re great in person. Now, stand out online.</h1>
            <small>
              We build ond mointain the website and digital morketing for your
              estate business, so you can stay connected with your clients-and
              nnew ones.
            </small>
            <div className={classes.btn_part}>
              <button>Get Started</button>
              <button>Play video</button>
            </div>
            <div className={classes.bottom_part}>
              <Image src={user} alt="" />
              <p>Colin Real Estate Agent </p>
            </div>
          </div>
          <div className={classes.right_part}>
            <Image src={rectangle} alt="" height={500} width={480} />
          </div>
        </div>
        <div className={classes.team_part}>
          <Image src={team1} alt="" />
          <ul>
            <li>Ateam that works for you.</li>
            <li>
              You could spend hours online, at your computer, trying to attract
              new clients. Or you could let our experts handle it.{" "}
            </li>
            <li>
              On average, our design and digital marketing specialists save
              realtors eight of work per week.
            </li>
          </ul>
          <Image src={team2} alt="" />
        </div>
        <div className={classes.feedback_part}>
          <div className={classes.first}>
            <Image src={img3} alt="" width={482} height={433} />
            <div className={classes.txt_wrapper}>
              <h1>
                Avenue is my go-to for website, social media, email marketing-
                everything Leam More <span>Learn more...</span>{" "}
              </h1>
              <small>Colin Colpits Personal Real Estate Corp.</small>
            </div>
          </div>
          <div className={classes.second}>
            <div className={classes.txt_wrapper}>
              <h1>
                The team took hours of work off my schedule by taking over socia
                media.
                <span>Learn more</span>
              </h1>
              <small>Morlee Tecks RE?MAX Westcoost</small>
            </div>
            <Image src={img4} alt="" />
          </div>
        </div>
        <div className={classes.card_part}>
        {slider_arr.map(item => (
          <div key={item.id} className={classes.card_item}>
            <p>Website</p> <p>{item.text}</p>
            <button>Leam More</button>
          </div>
           ))}
        </div>
        <div className={classes.meeting_part}>
          <h1>Ready to meet your Avenue Team?</h1>
          <button>Get started</button>
        </div>
      </div>
      <Footer/>
    </main>
  );
}
