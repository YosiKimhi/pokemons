import classes from './LoadingSpinner.module.css';

const LoadingSpinner = () => {
  return (
    <div className={classes['semipolar-spinner']}>
      <div className={classes.ring}></div>
      <div className={classes.ring}></div>
      <div className={classes.ring}></div>
      <div className={classes.ring}></div>
      <div className={classes.ring}></div>
    </div>
  );
};

export default LoadingSpinner;
