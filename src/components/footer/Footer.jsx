import styles from "./footer.module.css";

function Footer() {
  return (
    <div className={styles.footer}>
      <div className={styles.wrapper}>
        <div className={styles.links}>
          <span className={styles.heading}>Support</span>
          <span className={styles.link}>Help Center</span>
          <span className={styles.link}>AirCover</span>
          <span className={styles.link}>Anti-discrimination</span>
          <span className={styles.link}>Disability support</span>
          <span className={styles.link}>Cancellation options</span>
          <span className={styles.link}>Report neighbourhood concern</span>
        </div>
        <div className={styles.links}>
          <span className={styles.heading}>Hosting</span>
          <span className={styles.link}>Airbnb your home</span>
          <span className={styles.link}>AirCover for Hosts</span>
          <span className={styles.link}>Hosting resources</span>
          <span className={styles.link}>Community forum</span>
          <span className={styles.link}>Hosting responsibly</span>
        </div>
        <div className={styles.links}>
          <span className={styles.heading}>Airbnb</span>
          <span className={styles.link}>Newsroom</span>
          <span className={styles.link}>New features</span>
          <span className={styles.link}>Careers</span>
          <span className={styles.link}>Investors</span>
          <span className={styles.link}>Airbnb.org emergency stays</span>
        </div>
        <div className={styles.copyrignt}>
          <div className={styles.author}>
            &copy; 2023 Airbnb, Inc. &bull; Privacy &bull; Terms &bull; Sitemap
            &bull; Company details
          </div>
          <div className={styles.socialLinks}>
            <span></span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
