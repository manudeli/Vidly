// Input: liked: boolean
// Output: onClick

export default function Like({ liked, onClick }) {
  let classes = "fa fa-heart";
  if (!liked) classes += "-o";
  return (
    <div>
      <i
        onClick={onClick}
        style={{ cursor: "pointer" }}
        className={classes}
        aria-hidden="true"
      />
    </div>
  );
}
