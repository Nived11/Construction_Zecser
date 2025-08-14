import { AddServiceForm , ServiceHeading} from "../../features/admin-services";

const Services = () => {
  return (
    <div className="p-4 bg-[#F9F8FD] shadow-md rounded-lg">
      <ServiceHeading />
      <AddServiceForm />
    </div>
  );
};

export default Services;
