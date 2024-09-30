import styles from "./Comment.module.jsx";

export function Comment() {
  return (
    <div className={styles.comment}>
      <img src="https://github.com/AlyssonTrugilio.png" alt="" />
      <div className={styles.commentBox}>
        <div className={styles.commentContent}></div>
      </div>
    </div>
  );
}
