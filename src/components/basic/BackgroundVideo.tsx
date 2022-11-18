import styles from 'styles/app.module.scss';

export default function BackgroundVideo() {
  return (
    <div className={styles['video-bg']}>
      <video width="320" height="240" autoPlay loop muted>
        <source
          src="https://dm0qx8t0i9gc9.cloudfront.net/watermarks/video/Brap4t-Afjh0a4y4s/videoblocks-blacksmith-is-polishing-a-knife-with-sandpaper_humhnbroq__2ad88c1c173ffe8c4f7c18841ea0dda8__P360.mp4"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>
    </div>
  );
}
