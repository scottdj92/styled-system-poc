import styled from "@emotion/styled";
import { color } from "styled-system";

type Props = {
    color: string;
    bg: string;
};

export default styled.div<Props>({
}, ( props ) => ({
    color: `${color}`,
    backgroundColor: props.bg,
}));
