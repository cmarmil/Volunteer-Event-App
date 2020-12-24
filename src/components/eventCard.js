import {
  Card,
  CardImg,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button
} from "reactstrap";
import { FormattedDateTimeRange } from "react-intl";

const EventCard = (props) => {
  return (
    <Card className="m-2" style={{ height: "20em" }}>
      <CardImg
        top
        width="100%"
        height="50%"
        style={{ objectFit: "cover" }}
        src={props.cardData.image}
        alt="Card image cap"
      />
      <CardBody className="d-flex flex-column">
        <CardTitle tag="h5">{props.cardData.name}</CardTitle>
        <CardSubtitle tag="h6" className="mb-2 text-muted">
          <FormattedDateTimeRange
            from={new Date(props.cardData.startDate)}
            to={new Date(props.cardData.endDate)}
          />
        </CardSubtitle>
        <Button outline color="primary" className="mt-auto">Details</Button>
      </CardBody>
    </Card>
  );
};

export default EventCard;
