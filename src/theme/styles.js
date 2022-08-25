import { styled } from "@mui/system";
import { theme } from "./muiTheme";

export const Title = styled("h1")(({}) => ({
    fontFamily: 'Poppins, sans-serif',
    fontWeight: "700",
    fontSize: "1.4rem",
    textDecoration: 'underline',
    textDecorationColor: theme.palette.erro
}));

export const Description = styled("subtitle")(({}) => ({
    fontFamily: 'Poppins, sans-serif',
    fontSize: "1rem",
    color: theme.palette.grey,
    lineHeight: '1.8rem'
}));

export const SubTitle = styled("subtitle")(({}) => ({
    fontFamily: 'Poppins, sans-serif',
    fontSize: "1rem",
}));
