import { IconProps, Icon } from "phosphor-react";
interface IconizerProps extends IconProps {
    icon: Icon;
}
const Iconizer = ({ icon: Icon, ...rest }: IconizerProps) => {
    return <Icon {...rest} />;
};

export default Iconizer;
