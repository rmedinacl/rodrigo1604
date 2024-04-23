import Button from "react-bootstrap/Button";
import Badge from "react-bootstrap/Badge";

const Boton = ({ colorButton, textButton, raza, razaColor }) => {
  return (
    <>
      <div className="badge-div">
        <Button variant={colorButton}>{textButton}</Button>
        <Badge pill bg={razaColor}>
          {" "}
          {raza}{" "}
        </Badge>
      </div>
    </>
  );
};

export default Boton;
