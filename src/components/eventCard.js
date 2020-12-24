import { useContext } from "react";
import {
  Card,
  CardImg,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
} from "reactstrap";
import { FormattedDate } from "react-intl";
import { store } from "./appContext";

const EventCard = (props) => {
  const { dispatch } = useContext(store);
  return (
    <Card className="m-2" style={{ height: "20em" }}>
      <CardImg
        top
        width="100%"
        height="60%"
        style={{ objectFit: "cover" }}
        src={props.cardData.image}
        alt="Card image cap"
      />
      <CardBody className="d-flex flex-column">
        <CardTitle tag="h5">{props.cardData.name}</CardTitle>
        <CardSubtitle tag="h6" className="mb-2 text-muted">
          <span>
            <FormattedDate value={new Date(props.cardData.startDate)} /> -{" "}
            <FormattedDate value={new Date(props.cardData.endDate)} />
          </span>
        </CardSubtitle>
        <Button
          outline
          color="primary"
          className="mt-auto"
          onClick={() =>
            dispatch({ type: "TOGGLE_MODAL", payload: props.cardData })
          }
        >
          Details
        </Button>
      </CardBody>
    </Card>
  );
};

export default EventCard;
