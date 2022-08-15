import { styled } from "@mui/system";

export const Title = styled("h1")(({ theme }) => ({
    fontFamily: 'Poppins, sans-serif',
    fontWeight: "700",
    fontSize: "1.8rem",
    textDecoration: 'underline',
    textDecorationColor: '#F8032D'
}));

export const Description = styled("subtitle")(({ theme }) => ({
    fontFamily: 'Poppins, sans-serif',
    fontSize: "1rem",
    color: '#ACABBD',
    lineHeight: '1.8rem'
}));

export const SubTitle = styled("subtitle")(({ theme }) => ({
    fontFamily: 'Poppins, sans-serif',
    fontSize: "1rem",
}));