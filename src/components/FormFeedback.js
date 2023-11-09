import Typography from "./Typography";

function FormFeedback({ children }) {
  return (
    <Typography
      color="red"
      size="xs"
      className="absolute top-full mt-1 left-0 leading-3"
    >
      {children}
    </Typography>
  );
}

export default FormFeedback;
