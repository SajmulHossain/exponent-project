import { Separator } from "./ui/separator";

const Heading = ({text}) => {
    return (
      <div>
        <h2 className="mb-1">{text}</h2>
        <Separator />
      </div>
    );
};

export default Heading;