const SocialIcons = () => {
  const styles = {
    icon: {
      textDecoration: "none",
      fontSize: "22px",
      padding: "10px",
      transition: "0.2s ease-in",
    },
  };

  return (
    <div className="socialIcons" style={styles.socialIcons}>
      <a className="icon" style={styles.icon} href="https://github.com/psykoss">
        <i className="fa-brands fa-github" aria-hidden="true" title="Daniel Totolici' GitHub Profile"></i>
      </a>
      <a className="icon" style={styles.icon} href="https://www.linkedin.com/in/daniel-totolici-a07b282a1/">
        <i className="fa-brands fa-linkedin" aria-hidden="true" title="Daniel Totolici' LinkedIn Profile"></i>
      </a>
      <a className="icon" style={styles.icon} href="https://www.instagram.com/thedatahub/?next=%2F">
        <i className="fa-brands fa-instagram" aria-hidden="true" title="Daniel Totolici' Instagram Profile"></i>
      </a>
    </div>
  );
};

export default SocialIcons;
