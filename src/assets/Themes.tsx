import { green, purple } from '@mui/material/colors';
import { createTheme } from '@mui/material/styles';
import { color } from '@mui/system';
import { ThemeOptions } from '@mui/material'

type color = {
    light: string;
    main: string;
    dark: string;
}

const primaryColor = purple;

const secondaryColor = green;



export const customTheme: ThemeOptions = createTheme({
    palette: {
        primary: primaryColor,
        secondary: green,
    },
    components: {
        MuiFab: {
            styleOverrides: {
                primary: primaryColor,
                secondary: secondaryColor
            }
        },
        MuiButton: {
            variants: [
                {
                    props: { variant: 'dashed' },
                    style: {
                        textTransform: 'none',
                        border: `2px dashed ${primaryColor[500]}`,
                        backgroundColor: primaryColor[500]
                    },
                },
            ]
        },
        MuiAppBar: {
            styleOverrides: {
                root: {
                    marginBottom: 20
                }
            }
        }
    },
    typography: {
        fontFamily: 'Quicsand',
        fontWeightLight: 400,
        fontWeightRegular: 500,
        fontWeightMedium: 600,
        fontWeightBold: 700,
        h6: {
            fontSize: '30px',
            color: primaryColor[500]
        }
    }
});

declare module '@mui/material/Button' {
    interface ButtonPropsVariantOverrides {
        dashed: true;
    }
}