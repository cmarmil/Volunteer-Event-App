import {
  Card,
  CardImg,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
  Badge
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
            from={new Date("2020-1-1")}
            to={new Date("2020-1-15")}
          />
        </CardSubtitle>
        <Button outline color="primary" className="mt-auto">Details</Button>
      </CardBody>
    </Card>
  );
};

export default EventCard;
