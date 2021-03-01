import { services } from "./services.data";
import {
  ServiceSection,
  ServiceTitle,
  ServiceCard,
  Card,
  CardImage,
  CardTitle,
  CardDescription,
} from "./services.style";

// rendering components
// ---------------------

const Services = () => {
  return (
    <ServiceSection>
      <ServiceTitle>services</ServiceTitle>
      <ServiceCard>
        {services.map((service, index) => (
          <Card key={index}>
            <CardImage src={service.image} alt={`service-${index}`} />
            <CardTitle> {service.title} </CardTitle>
            <CardDescription> {service.description} </CardDescription>
          </Card>
        ))}
      </ServiceCard>
    </ServiceSection>
  );
};

export default Services;
