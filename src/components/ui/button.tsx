import { Button, type ButtonProps } from "antd";
import styled from "@emotion/styled";

const StyledButton = styled(Button)``;

const CustomButton = (props: ButtonProps) => <StyledButton {...props} />;
export default CustomButton;
