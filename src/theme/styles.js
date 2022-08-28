import { styled } from "@mui/system";

export const Title = styled("h1")(({ theme }) => ({
    color: theme.palette.light,
    fontFamily: 'Poppins, sans-serif',
    fontWeight: "700",
    fontSize: "1.4rem",
    textDecoration: 'underline',
    textDecorationColor: theme.palette.erro,
    margin: '0'
}));

export const Description = styled("subtitle")(({ theme }) => ({
    fontFamily: 'Poppins, sans-serif',
    fontSize: "1rem",
    color: theme.palette.grey,
    lineHeight: '1.8rem'
}));

export const SubTitle = styled("subtitle")(({ theme }) => ({
    color: theme.palette.light,
    fontFamily: 'Poppins, sans-serif',
    fontSize: "1rem",
}));
